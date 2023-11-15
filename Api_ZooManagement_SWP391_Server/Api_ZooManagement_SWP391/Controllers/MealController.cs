using AutoMapper;
using BLL.Interfaces;
using DAL.Entities;
using DTO.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly IMealService _mealService;
        private readonly IMapper _mapper;

        public MealController(IMealService mealService, IMapper mapper)
        {
            _mapper = mapper;
            _mealService = mealService;
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateMeal([FromBody] CreateMealDto createMealDto)
        {
            if (createMealDto == null) return BadRequest();

            var meal = _mealService.GetMealById(createMealDto.MealId);

            if(meal != null) return BadRequest("Meal already existed");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var mealMap = _mapper.Map<Meal>(createMealDto);

            int count = 0;
            var meals = _mealService.GetMeals();
            if (meals == null) count = 1;
            else count = meals.Count() + 1;
            var mealId = "ME" + count.ToString().PadLeft(4, '0');

            mealMap.MealId = mealId;

            if(!_mealService.AddMeal(createMealDto.FoodMeals, meal))
            {

            }
            return Ok();
        }
    }
}
