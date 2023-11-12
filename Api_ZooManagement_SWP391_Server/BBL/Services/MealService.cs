using BLL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using DTO.Dtos;
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
        private readonly IGenericRepository<Food> _foodRepo;
        private readonly IGenericRepository<FoodMeal> _foodMealRepo;

        public MealService(IGenericRepository<Meal> mealRepo, IGenericRepository<Food> foodRepo, IGenericRepository<FoodMeal> foodMealRepo)
        {
            _mealRepo = mealRepo;
            _foodRepo = foodRepo;
            _foodMealRepo = foodMealRepo;
        }
        public bool AddMeal(List<FoodMealDto> foodMeals, Meal meal)
        {
            if (_mealRepo.Add(meal))
            {
                if (foodMeals != null && foodMeals.Count() > 0)
                {
                    foreach (var foodMeal in foodMeals)
                    {
                        var food = _foodRepo.GetById(foodMeal.FoodId);
                        if (food == null) return false;
                        var fMeal = new FoodMeal()
                        {
                            Food = food,
                            Meal = meal,
                            Quantity = foodMeal.Quantity,
                            Unit = foodMeal.Unit
                        };

                        _foodMealRepo.Add(fMeal);
                    }
                }
            }
            return false;
        }

        public bool DeleteMeal(string mealId)
        {
            var meal = _mealRepo.GetById(mealId);
            return _mealRepo.Delete(meal);
        }

        public Meal GetMealById(string mealId)
        {
            return _mealRepo.GetById(mealId);
        }

        public ICollection<Meal> GetMeals()
        {
            return _mealRepo.GetAll().ToList();
        }

        public bool UpdateMeal(Meal meal)
        {
            return _mealRepo.Update(meal);
        }
    }
}
