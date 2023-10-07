using BBL.Interfaces;
using DAL.Data;
using DAL.Entities;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Services
{
    public class FoodService : IFoodService

    {
        private readonly IGenericRepository<Food> _foodRepository;
        private readonly IGenericRepository<AnimalFood> _animalFoodRepo;
        private readonly DataContext _context;

        public FoodService(IGenericRepository<Food> foodRepository,
            IGenericRepository<AnimalFood> animalFoodRepo, DataContext context)
        {
            _foodRepository = foodRepository;
            _animalFoodRepo = animalFoodRepo;
            _context = context;
        }

        public bool AddFood(Food food)
        {
            return _foodRepository.Add(food);
        }

        public bool DeleteFood(string foodId)
        {
            var food = _foodRepository.GetById(foodId);
            if (food == null) return false;
            _context.Remove(food);
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool FoodExists(string id)
        {
            return _foodRepository.GetById(id) != null ? true : false;
        }

        public ICollection<Food> GetAllFood()
        {
            return _foodRepository.GetAll();
        }

        public List<Animal> GetAnimalsByFoodId(string foodId)
        {
            var animals = _animalFoodRepo.GetAll().Where(e => e.FoodId == foodId).Select(a => a.Animal).ToList();
            if (animals == null || animals.Count() == 0) return null;
            return animals;
        }

        public Food GetByFoodId(string id)
        {
            return _foodRepository.GetById(id);
        }

        public Food GetByFoodName(string name)
        {
            var Foods = _foodRepository.GetAll();
            foreach (Food food in Foods)
            {
                if (food.FName == name)
                {
                    return food;
                }
            }
            return null;
        }

        public bool UpdateFood(Food foodMap)
        {
            var food = _foodRepository.GetById(foodMap.FoodId);
            if (food == null) return false;
            food.FName = foodMap.FName;
            food.ImportDate = foodMap.ImportDate;
            food.ExpiredDate = foodMap.ExpiredDate;
            food.Quantity = foodMap.Quantity;          
            return _foodRepository.Update(food);
        }
    }
}
