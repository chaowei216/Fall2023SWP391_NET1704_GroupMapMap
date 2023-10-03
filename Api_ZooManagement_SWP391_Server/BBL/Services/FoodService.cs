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
    public class FoodService : IFoodService

    {
        private readonly IGenericRepository<Food> _foodRepository;
        public FoodService(IGenericRepository<Food> foodRepository)
        {
            _foodRepository = foodRepository;
        }

        public bool AddFood(Food food)
        {
            return _foodRepository.Add(food);
        }

        public bool FoodExists(string id)
        {
            return _foodRepository.GetById(id) != null ? true : false;
        }

        public ICollection<Food> GetAllFood()
        {
            return _foodRepository.GetAll();
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

        public bool UpdateFood(Food food)
        {
            _foodRepository.Update(food);
            return true;

        }
    }
}
