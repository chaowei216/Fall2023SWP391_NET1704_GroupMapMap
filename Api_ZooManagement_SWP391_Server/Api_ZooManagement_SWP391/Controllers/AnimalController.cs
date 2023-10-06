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
        public Regex animalRegex = new Regex(@"^A\d{4}");
        public Regex userRegex = new Regex(@"^U\d{4}");

        public AnimalController(IMapper mapper, IAnimalService animalService) 
        {
            _animalService = animalService;
            _mapper = mapper;
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
        [HttpPost]
        public IActionResult CreateAnimal([FromQuery] string? userId, [FromQuery] string? cageId,
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
            var userMap = _mapper.Map<AnimalTrainer>(animalDto);
            var cageMap = _mapper.Map<AnimalCage>(animalDto);
            animalMap.AnimalId = animalId;
            cageMap.EntryCageDate = DateTime.Now;
            userMap.StartTrainDate = DateTime.Now;
            animalMap.EntryDate = DateTime.Now;
            animalMap.Status = true;

            if (!_animalService.AddAnimal(userId, cageId, animalMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }

        /*[HttpPut("{animalId}")]
        public IActionResult UpdateAnimal(string animalId, [FromQuery] string? userId, [FromQuery] string? cageId,
                                          [FromBody] UpdateAnimalDto updateAnimalDto)
        {
            if (updateAnimalDto == null)
                return BadRequest(ModelState);

            if (animalId != updateAnimalDto.AnimalId)
                return BadRequest(ModelState);

            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            var animal = _animalService.GetByAnimalId(animalId);
            var animalMap = _mapper.Map<Animal>(updateAnimalDto);
            var userMap = _mapper.Map<AnimalTrainer>(updateAnimalDto);
            var cageMap = _mapper.Map<AnimalCage>(updateAnimalDto);
            animal.AnimalId = animalId;

            if (!_animalService.UpdateAnimal(userMap, cageMap, animalMap))
            {
                ModelState.AddModelError("", "Error when updating user!!");
                return StatusCode(500, ModelState);
            }
            return Ok();
        } */

        /*[HttpPut("{animalId}")]
        public IActionResult UpdateAnimal(string animalId, [FromQuery] string userId, [FromQuery] string cageId,
                                         [FromBody] UpdateAnimalDto updateAnimalDto)
        {
            if (updateAnimalDto == null)
                return BadRequest(ModelState);

            if (animalId != updateAnimalDto.AnimalId)
                return BadRequest(ModelState);

            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            var animal = _animalService.GetByAnimalId(animalId);
            var animalMap = _mapper.Map<Animal>(updateAnimalDto);
            var userMap = _mapper.Map<AnimalTrainer>(updateAnimalDto);
            var cageMap = _mapper.Map<AnimalCage>(updateAnimalDto);

            if (!_animalService.UpdateAnimal(userId, cageId, animalMap))
            {
                ModelState.AddModelError("", "Error when updating user!!");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }*/
    }
}
