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
        public AnimalService(IGenericRepository<Animal> animalRepo)
        {
            _animalRepo = animalRepo;
        }
        public bool AddAnimal(string userId, string cageId, Animal animal)
        {
            var trainer = _userRepo.GetAll().Where(u => u.UserId == userId).FirstOrDefault();
            var cage = _cageRepo.GetAll().Where(c => c.CId == cageId).FirstOrDefault();

            return _animalRepo.Add(animal);
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

        public bool UpdateAnimal(Animal animal)
        {
            return _animalRepo.Update(animal);
        }
    }
}
