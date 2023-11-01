using BBL.Interfaces;
using DAL.Data;
using DAL.Entities;
using DAL.Repositories;
using DTO.Dtos;
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
        private readonly IGenericRepository<FoodCategory> _foodCategoryRepository;
        private readonly DataContext _context;

        public FoodService(IGenericRepository<Food> foodRepository,
            IGenericRepository<AnimalFood> animalFoodRepo, DataContext context, IGenericRepository<FoodCategory> foodCategoryRepository)
        {
            _foodRepository = foodRepository;
            _animalFoodRepo = animalFoodRepo;
            _context = context;
            _foodCategoryRepository = foodCategoryRepository;
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

        public ICollection<FoodDto> GetAllFood()
        {
            var getFoods = _foodRepository.GetAll().ToList();
            var allFoods = new List<FoodDto>();
            foreach (var getFood in getFoods)
            {
                var f = new FoodDto();
                f.FoodId = getFood.FoodId;
                f.FName = getFood.FName;
                f.Quantity = getFood.Quantity;
                f.ImportDate = getFood.ImportDate;
                f.ExpiredDate = getFood.ExpiredDate;
                var food = _foodCategoryRepository.GetById(getFood.CategoryId);
                f.CategoryName = food.CategoryName;
                    
                allFoods.Add(f);
            }
            return allFoods;
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

        public Food? GetByFoodName(string name)
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

        public ICollection<AnimalFood> GetFoodsByAnimalId(string animalId)
        {
            return _animalFoodRepo.GetAll().Where(aniFood => aniFood.AnimalId == animalId).ToList();
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

        public bool UpdateFoodFeed(string animalId)
        {
            var animalFood = GetFoodsByAnimalId(animalId).ToList();
            if (animalFood != null && animalFood.Count > 0) { 
            
                foreach (var aniFood in animalFood)
                {
                    /*var food = _foodRepository.GetById(aniFood.FoodId);
                    if (food.Quantity > aniFood.Amount && aniFood.EndEat > DateTime.Now)
                    {
                        food.Quantity -= aniFood.Amount;
                    }*/
                    //return _foodRepository.Update(food);
                   
                        for (int index = 0; index <= animalFood.Count; index++)
                        {
                            var food1 = GetByFoodId(aniFood.FoodId);

                            food1.Quantity = food1.Quantity - animalFood[index].Amount;
                            return _foodRepository.Update(food1);
                        }
                }
            }
            return false;
        }
    }
}
