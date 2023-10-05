using Api_ZooManagement_SWP391.Dtos;
using Api_ZooManagement_SWP391.Profiles;
using AutoMapper;
using BBL.Interfaces;
using BBL.Services;
using DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly IAnimalService _animalService;
        private readonly IMapper _mapper;
        private readonly ISpeciesAnimalsService _speciesAnimalsService;
        public Regex animalRegex = new Regex(@"^A\d{4}");
        public Regex userRegex = new Regex(@"^U\d{4}");

        public AnimalController(IMapper mapper, IAnimalService animalService, ISpeciesAnimalsService speciesAnimalsService) 
        {
            _animalService = animalService;
            _mapper = mapper;
            _speciesAnimalsService = speciesAnimalsService;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        public IActionResult GetAllAnimal()
        {
            var animal = _mapper.Map<List<AnimalDto>>(_animalService.GetAll());

            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            return Ok(animal);
        }

        [HttpGet("{animalId}")]
        [ProducesResponseType(200, Type = typeof(Animal))]
        [ProducesResponseType(400)]
        public IActionResult GetAnimalById(string animalId)
        {
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var animal = _mapper.Map<AnimalDto>(_animalService.GetByAnimalId(animalId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(animal);
        }

        [HttpPost]
        public IActionResult CreateAnimal([FromQuery] string? userId, [FromQuery] AnimalTrainerDto? animalTrainerDto,
                                          [FromQuery] string? cageId, [FromQuery] AnimalCageDto? animalCageDto,
                                          [FromQuery] string? foodId, [FromQuery] AnimalFoodDto? animalFoodDto,
                                          [FromQuery] string speciesId,
                                          [FromBody] AnimalDto animalDto)
        {
            if (animalDto == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int count = _animalService.GetAll().Count() + 1;
            var animalId = "A" + count.ToString().PadLeft(4, '0');

            var animalMap = _mapper.Map<Animal>(animalDto);
            var userMap = _mapper.Map<AnimalTrainer>(animalTrainerDto);
            var cageMap = _mapper.Map<AnimalCage>(animalCageDto);
            var foodMap = _mapper.Map<AnimalFood>(animalFoodDto);

            animalMap.AnimalId = animalId;
            animalMap.SpeciesAnimal = _speciesAnimalsService.GetBySpeciesAnimalsId(speciesId);

            if (!_animalService.AddAnimal(userId, userMap, cageId, cageMap, foodId, foodMap, animalMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }

    }
}
