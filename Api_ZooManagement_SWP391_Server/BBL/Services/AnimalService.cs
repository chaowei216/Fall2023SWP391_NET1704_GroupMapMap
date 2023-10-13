using BBL.Interfaces;
using DAL.Data;
using DAL.Entities;
using DAL.Repositories;
using DTO.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Services
{
    public class AnimalService : IAnimalService
    {
        private readonly IGenericRepository<Animal> _animalRepo;
        private readonly IGenericRepository<User> _userRepo;
        private readonly IGenericRepository<Cage> _cageRepo;
        private readonly IGenericRepository<AnimalTrainer> _animalTrainerRepo;
        private readonly IGenericRepository<AnimalCage> _animalCageRepo;
        private readonly IGenericRepository<Food> _foodRepo;
        private readonly IGenericRepository<AnimalFood> _animalFoodRepo;
        private readonly DataContext _context;


        public AnimalService(IGenericRepository<Animal> animalRepo,
                             IGenericRepository<User> userRepo,
                             IGenericRepository<Cage> cageRepo,
                             IGenericRepository<Food> foodRepo, IGenericRepository<AnimalCage> animalCageRepo,
                             IGenericRepository<AnimalTrainer> animalTrainerRepo, DataContext context, IGenericRepository<AnimalFood> animalFoodRepo)
        {
            _animalRepo = animalRepo;
            _cageRepo = cageRepo;
            _userRepo = userRepo;
            _animalCageRepo = animalCageRepo;
            _animalTrainerRepo = animalTrainerRepo;
            _foodRepo = foodRepo;
            _animalFoodRepo = animalFoodRepo;
            _context = context;
        }
        public bool AddAnimal(string? userId, string? cageId, List<AnimalFood> animalFood, Animal animal)
        {
            if (_animalRepo.Add(animal))
            {
                var trainer = _userRepo.GetById(userId);
                var cage = _cageRepo.GetById(cageId);
                AnimalTrainer newAnimalTrainer = new AnimalTrainer
                {
                    User = trainer,
                    Animal = animal,
                };
                _animalTrainerRepo.Add(newAnimalTrainer);
                AnimalCage newAnimalCage = new AnimalCage
                {
                    Cage = cage,
                    Animal = animal,
                };
                _animalCageRepo.Add(newAnimalCage);
                if (animalFood == null) return false;
                foreach (AnimalFood food in animalFood)
                {
                    _animalFoodRepo.Add(food);
                }

                return true;
            }
            return false;
        }

        public bool AnimalExists(string id)
        {
            return _animalRepo.GetById(id) != null ? true : false;
        }

        public ICollection<GetAnimalDto> GetAll()
        {
            //var getAnimal = _context.Animals.Include(animal => animal.AnimalCages).Include(animal => animal.AnimalTrainers).ToList();
            var getAnimal = (from a in _context.Animals
                             join ac in _context.AnimalCages on a.AnimalId equals ac.AnimalId
                             join at in _context.AnimalTrainers on a.AnimalId equals at.AnimalId
                             select new GetAnimalDto
                             {
                                 AnimalId = a.AnimalId,
                                 Name = a.Name,
                                 Description = a.Description,
                                 Sex = a.Sex,
                                 Region = a.Region,
                                 HealthCheck = a.HealthCheck,
                                 Birthday = a.Birthday,
                                 Species = a.Species,
                                 Rarity = a.Rarity,
                                 CId = ac.CageId,
                                 UserId = at.UserId,
                                 AnimalImage = a.AnimalImage
                             }).ToList();
            return getAnimal;
        }

        public Animal GetByAnimalId(string id)
        {
            return _animalRepo.GetById(id);
        }

        public ICollection<AnimalTrainer> GetAnimalTrainers()
        {
            return _animalTrainerRepo.GetAll();
        }

        public ICollection<AnimalCage> GetAnimalCages()
        {
            return _animalCageRepo.GetAll();
        }

        public ICollection<AnimalTrainer> GetTrainerByAnimalId(string animalId)
        {
            var user = _context.AnimalTrainers.Where(a => a.AnimalId == animalId).ToList();
            if (user == null) return null;
            return user;
        }

        public ICollection<AnimalCage> GetCageByAnimalId(string animalId)
        {
            var cage = _context.AnimalCages.Where(a => a.AnimalId == animalId).ToList();
            if (cage == null) return null;
            return cage;
        }

        public bool UpdateAnimal(Animal animal, Animal? animalMap)
        {
            if (animalMap != null)
            {
                animal.Description = animalMap.Description;
                animal.HealthCheck = animalMap.HealthCheck;
                animal.Status = animalMap.Status;
                animal.Rarity = animalMap.Rarity;
            }
            return _animalRepo.Update(animal);
        }
        public bool AddAnimalTrainer(string userId, string animalId, AnimalTrainer animalTrainer)
        {
            if (animalTrainer.UserId != null)
            {
                var trainer = _userRepo.GetById(userId);
                var animal = _animalRepo.GetById(animalId);
                AnimalTrainer newAnimalTrainer = new AnimalTrainer
                {
                    User = trainer,
                    Animal = animal,
                    StartTrainDate = animalTrainer.StartTrainDate,
                };
                return _animalTrainerRepo.Add(newAnimalTrainer);
            }
            return false;
        }

        public bool AddAnimalCage(string cageId, string animalId, AnimalCage animalCage)
        {
            if (animalCage.CageId != null)
            {
                var cage = _cageRepo.GetById(cageId);
                var animal = _animalRepo.GetById(animalId);
                AnimalCage newAnimalCage = new AnimalCage
                {
                    Cage = cage,
                    Animal = animal,
                    EntryCageDate = DateTime.Now,
                };
                return _animalCageRepo.Add(newAnimalCage);
            }
            return false;
        }
        public bool DeleteAnimal(string animalId)
        {
            var animal = _animalRepo.GetById(animalId);
            if (animal == null)
                return false;

            animal.Status = false;
            return _animalRepo.Update(animal);
        }

        public ICollection<AnimalTrainer> GetAnimalByTrainerId(string trainerId)
        {
            var animals = _animalTrainerRepo.GetAll().Where(at => at.UserId == trainerId).ToList();
            if(animals == null) return null;
            return animals;
        }

        public ICollection<AnimalTrainer> GetTrainersCanTrain()
        {
            var user = _animalTrainerRepo.GetAll().Where(at => at.AnimalId.Count() < 10 && at.EndTrainDate == null).ToList();
            if (user == null) return null;
            return user;
        }
    }
}
