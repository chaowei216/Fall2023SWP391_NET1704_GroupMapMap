using AutoMapper;
using BBL.Interfaces;
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
        private readonly IFoodService _foodService;

        public MealController(IMealService mealService, IMapper mapper, IFoodService foodService)
        {
            _mapper = mapper;
            _foodService = foodService;
            _mealService = mealService;
        }

        [HttpGet("meal")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<MealDto>))]
        public IActionResult GetMeal()
        {
            var meal = _mealService.GetMeals();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(meal);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateMeal([FromBody] CreateMealDto createMealDto)
        {
            if (createMealDto == null) return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var mealMap = _mapper.Map<Meal>(createMealDto);

            int count = _mealService.CountMeal() + 1;
            var mealId = "ME" + count.ToString().PadLeft(4, '0');

            mealMap.MealId = mealId;

            if(!_mealService.AddMeal(createMealDto.FoodMeals, mealMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Create Successfully!!!");
        }
    }
}
