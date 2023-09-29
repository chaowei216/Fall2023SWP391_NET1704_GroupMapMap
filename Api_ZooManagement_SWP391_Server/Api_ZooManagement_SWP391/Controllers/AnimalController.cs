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
        [ProducesResponseType(200)]
        public IActionResult GetAnimalById(string id)
        {
            if (!_animalService.AnimalExists(id))
                return NotFound();

            var animal = _mapper.Map<AnimalDto>(_animalService.GetByAnimalId(id));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(animal);
        }

        /*[HttpPost]
        [ProducesResponseType(200)]
        public IActionResult CreateAnimal([FromBody] AnimalDto animalDto)
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
            animalMap.AnimalId = animalId;

            if (!_animalService.AddAnimal(animalMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }*/

        /*[HttpPost]
        public IActionResult CreateAnimal(string userId, [FromBody] AnimalDto animalDto)
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
            animalMap.AnimalId = animalId;

            if (!_animalService.AddAnimal(animalMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        } */

    }
}
