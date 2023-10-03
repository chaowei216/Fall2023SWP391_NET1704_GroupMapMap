using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BBL.Interfaces;
using AutoMapper;
using Api_ZooManagement_SWP391.Dtos;
using DAL.Entities;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly IFoodService _foodService;
        private readonly IMapper _mapper;

        public FoodController(IFoodService foodService, IMapper mapper)
        {
            _foodService = foodService;
            _mapper = mapper;
        }

        [HttpGet()]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Food>))]
        public IActionResult GetFood()
        {
            var foods = _foodService.GetAllFood();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(foods);
        }

        [HttpGet("foodId")]
        [ProducesResponseType(200, Type = typeof(Food))]
        [ProducesResponseType(400)]
        public IActionResult GetFood(string foodId)
        {
            if (!_foodService.FoodExists(foodId))
            {
                return NotFound();
            }
            var foods = _mapper.Map<FoodDto>(_foodService.GetByFoodId(foodId));
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            return Ok(foods);
        }


        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateFood([FromBody] FoodDto foodDto)
        {
            if (foodDto == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int count = _foodService.GetAllFood().Count() + 1;
            var foodId = "F" + count.ToString().PadLeft(4, '0');

            var foodMap = _mapper.Map<Food>(foodDto);
            foodMap.FoodId = foodId;

            if (!_foodService.AddFood(foodMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successful Created");
        }

    }
}
