using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
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
        private readonly IGenericRepository<AnimalFood> _animalFoodRepo;
        private readonly IGenericRepository<Food> _foodRepo;

        public AnimalService(IGenericRepository<Animal> animalRepo,
                             IGenericRepository<User> userRepo,
                             IGenericRepository<Cage> cageRepo,
                             IGenericRepository<Food> foodRepo, IGenericRepository<AnimalCage> animalCageRepo, IGenericRepository<AnimalFood> animalFoodRepo,
                             IGenericRepository<AnimalTrainer> animalTrainerRepo)
        {
            _animalRepo = animalRepo;
            _cageRepo = cageRepo;
            _userRepo = userRepo;
            _foodRepo = foodRepo;
            _animalCageRepo = animalCageRepo;
            _animalFoodRepo = animalFoodRepo;
            _animalTrainerRepo = animalTrainerRepo;
        }
        public bool AddAnimal(string? userId, AnimalTrainer? animalTrainer,
                              string? cageId, AnimalCage? animalCage,
                              string? foodId, AnimalFood? animalFood,
                              Animal animal)
        {
            if (_animalRepo.Add(animal))
            {
                var trainer = _userRepo.GetById(userId);
                var cage = _cageRepo.GetById(cageId);
                var food = _foodRepo.GetById(foodId);
                AnimalTrainer newAnimalTrainer = new AnimalTrainer
                {
                    User = trainer,
                    Animal = animal,
                    EndDate = animalTrainer.EndDate,
                    StartDate = animalTrainer.StartDate,
                };
                _animalTrainerRepo.Add(newAnimalTrainer);
                AnimalCage newAnimalCage = new AnimalCage
                {
                    Cage = cage,
                    Animal = animal,
                    EntryDate = animalCage.EntryDate,
                    OutDate = animalCage.OutDate,
                };
                _animalCageRepo.Add(newAnimalCage);
                AnimalFood newAnimalFood = new AnimalFood
                {
                    Food = food,
                    Animal = animal,
                    Amount = animalFood.Amount,
                };
                _animalFoodRepo.Add(newAnimalFood);
                return true;
            }
            return false;
        }

        public bool AnimalExists(string id)
        {
            return _animalRepo.GetById(id) != null ? true : false;
        }

        public ICollection<Animal> GetAll()
        {
            return _animalRepo.GetAll();
        }

        public Animal GetByAnimalId(string id)
        {
            return _animalRepo.GetById(id);
        }

        public bool UpdateAnimal(string animalId, string userId, string cageId, string foodId, Animal animal)
        {
            return _animalRepo.Update(animal);
        }
    }
}
