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
    public class AnimalFoodService : IAnimalFoodService
    {
        private readonly IGenericRepository<AnimalFood> _animalFoodRepo;
        private readonly IGenericRepository<Animal> _animalRepo;
        private readonly IGenericRepository<Food> _foodRepo;
        public AnimalFoodService(IGenericRepository<Animal> animalRepo, IGenericRepository<AnimalFood> animalFoodRepo, IGenericRepository<Food> foodRepo)
        {
            _animalFoodRepo = animalFoodRepo;
            _foodRepo = foodRepo;
            _animalRepo = animalRepo;
        }
        public bool AddAnimalFood(List<AnimalFood> animalFood, string animalId)
        {
            if (animalFood == null) return false;
            foreach (AnimalFood food1 in animalFood)
            {
                _animalFoodRepo.Add(food1);
            }
            return true;
        }
    }
}
