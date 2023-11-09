using BLL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class MealService : IMealService
    {
        private readonly IGenericRepository<Meal> _mealRepo;

        public MealService(IGenericRepository<Meal> mealRepo)
        {
            _mealRepo = mealRepo;
        }
        public bool AddMeal(Meal meal)
        {
            throw new NotImplementedException();
        }

        public bool DeleteMeal(string mealId)
        {
            throw new NotImplementedException();
        }

        public Meal GetMealById(string mealId)
        {
            throw new NotImplementedException();
        }

        public ICollection<Meal> GetMeals()
        {
            return _mealRepo.GetAll().ToList();
        }

        public bool UpdateMeal(Meal meal)
        {
            throw new NotImplementedException();
        }
    }
}
