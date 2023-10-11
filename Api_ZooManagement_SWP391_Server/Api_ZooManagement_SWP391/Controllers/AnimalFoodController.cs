using AutoMapper;
using BBL.Interfaces;
using BBL.Services;
using DAL.Entities;
using DTO.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalFoodController : ControllerBase
    {
        private readonly IAnimalFoodService _animalFoodService;
        private readonly IMapper _mapper;
        private readonly IAnimalService _animalService;
        private readonly IFoodService _foodService;
        public AnimalFoodController(IAnimalFoodService animalFoodService, IMapper mapper, IAnimalService animalService, IFoodService foodService)
        {
            _animalFoodService = animalFoodService;
            _mapper = mapper;
            _animalService = animalService;
            _foodService = foodService;

        }
        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult AddAnimalFood([FromBody] AnimalFoodDto animalFoodDto)
        {
            if (animalFoodDto == null)
                return BadRequest();

            var animal = _mapper.Map<Animal>(animalFoodDto);

            List<AnimalFood> animalFoods = new List<AnimalFood>();

            var foodAmount = animalFoodDto.Foods;
            foreach (var food in foodAmount)
            {
                var food1 = _foodService.GetByFoodId(food.id);
                if(food1 == null) return BadRequest("Food not found!!!");
                if (food.quantity == 0) continue;
                animalFoods.Add(new AnimalFood()
                {
                    AnimalId = animal.AnimalId, 
                    Food = food1,
                    Amount = food.quantity,
                });
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_animalFoodService.AddAnimalFood(animalFoods, animal.AnimalId))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }   

            return Ok("Successful Created");
        }
    }
}
