﻿using AutoMapper;
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
        private readonly IGenericRepository<AnimalMeal> _animalMealRepo;
        private readonly IMapper _mapper;
        public MealService(IGenericRepository<Meal> mealRepo, IGenericRepository<Food> foodRepo, IGenericRepository<FoodMeal> foodMealRepo, IMapper mapper, IGenericRepository<AnimalMeal> animalMealRepo)
        {
            _mealRepo = mealRepo;
            _foodRepo = foodRepo;
            _animalMealRepo = animalMealRepo;
            _foodMealRepo = foodMealRepo;
            _mapper = mapper;
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
                        FoodMeal fMeal = new FoodMeal
                        {
                            Meal = meal,
                            Food = food,
                            Quantity = foodMeal.Quantity,
                            Unit = foodMeal.Unit
                        };
                        _foodMealRepo.Add(fMeal);
                    }
                }
                return true;
            }
            return false;
        }

        public int CountMeal()
        {
            return _mealRepo.GetAll().ToList().Count();
        }

        public bool DeleteMeal(string mealId)
        {
            var meal = _mealRepo.GetById(mealId);
            return _mealRepo.Delete(meal);
        }

        public ICollection<AnimalMeal> GetAllMealsByAnimalId(string animalId)
        {
            return _animalMealRepo.GetAll().ToList();
        }

        public AnimalMeal GetMealByAnimalId(string animalId)
        {
            return _animalMealRepo.GetAll().SingleOrDefault(am => am.AnimalId == animalId && (am.EndEat == null && am.StartEat < DateTime.Now) || (am.EndEat > DateTime.Now && am.StartEat < DateTime.Now));
        }

        public Meal GetMealById(string mealId)
        {
            return _mealRepo.GetById(mealId);
        }

        public ICollection<MealDto> GetMeals()
        {
            var meals = _mealRepo.GetAll().ToList();
            var allMeals = new List<MealDto>();
            if (meals != null && meals.Count > 0)
            {
                foreach (var meal in meals)
                {
                    var mealDto = _mapper.Map<MealDto>(meal);
                    var foodMeal = _foodMealRepo.GetAll().Where(ex => ex.MealId == meal.MealId).ToList();
                    if (foodMeal != null && foodMeal.Count > 0)
                    {
                        foreach (var fmeal in foodMeal)
                        {
                            var foodMealDetail = _mapper.Map<FoodMealDto>(fmeal);
                            mealDto.FoodMealDtos.Add(foodMealDetail);
                        }
                    }
                    allMeals.Add(mealDto);
                }
            }
            return allMeals;
        }

        public ICollection<FoodMeal> GetFoodsByMealId(string mealId)
        {
            return _foodMealRepo.GetAll().Where(fm => fm.MealId == mealId).ToList();
        }
        public ICollection<AnimalMeal> GetMealsByAnimalId(string animalId)
        {
            return _animalMealRepo.GetAll().Where(a => a.AnimalId == animalId).ToList();
        }

        public bool UpdateMeal(Meal meal)
        {
            return _mealRepo.Update(meal);
        }
    }
}
