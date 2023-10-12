using DTO.Dtos;
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
        private readonly ICageService _cageService;
        private readonly IUserService _userService;
        public Regex animalRegex = new Regex(@"^A\d{4}");
        public Regex userRegex = new Regex(@"^Z\d{4}");

        public AnimalController(IMapper mapper, IAnimalService animalService, ICageService cageService, IUserService userService)
        {
            _animalService = animalService;
            _mapper = mapper;
            _cageService = cageService;
            _userService = userService;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Animal>))]
        public IActionResult GetAllAnimal()
        {
            var animal = _mapper.Map<List<GetAnimalDto>>(_animalService.GetAll());
            animal = _mapper.Map<List<GetAnimalDto>>(_cageService.GetAll());
            if (!ModelState.IsValid)
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
                                          [FromBody] AnimalCreateDto animalDto)
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
            cageMap.EntryCageDate = animalDto.EntryCageDate;    
            userMap.StartTrainDate = animalDto.StartTrainDate;
            animalMap.Status = true;

            int isCageFull = _cageService.GetByCageId(cageId).AnimalQuantity;
            int fullCage = _cageService.GetByCageId(cageId).MaxCapacity;
            int isTrainerFull = _animalService.GetAnimalByTrainerId(userId).Count();

            isCageFull += 1;
            if (isCageFull > fullCage)
            {
                return BadRequest("This cage is full");
            }
            if (isTrainerFull > 10)
            {
                return BadRequest("Zoo trainer have trained 10 animals");
            }
            if(!userRegex.IsMatch(userId)) {
                return BadRequest("This is not a zoo trainer!!!");
            }

            
            if (!_animalService.AddAnimal(userId, cageId, animalMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }

        [HttpPut("{animalId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateAnimal(string animalId, [FromBody] UpdateAnimalDto updateAnimalDto)
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
            var trainerMap = _mapper.Map<AnimalTrainer>(updateAnimalDto);
            var cageMap = _mapper.Map<AnimalCage>(updateAnimalDto);

            var animalTrainer = _animalService.GetTrainerByAnimalId(animalId).Where(a => a.EndTrainDate == null).FirstOrDefault();
            if (animalTrainer == null)
                return BadRequest("Something wrong!!!");
            if (animalTrainer.UserId != updateAnimalDto.UserId)
            {
                animalTrainer.EndTrainDate = DateTime.Now;
                _animalService.AddAnimalTrainer(updateAnimalDto.UserId, animalId, trainerMap);
            }

            var animalCage = _animalService.GetCageByAnimalId(animalId).Where(c => c.OutCageDate == null).FirstOrDefault();
            if (animalCage.CageId != updateAnimalDto.CageId)
            {
                animalCage.OutCageDate = DateTime.Now;
                _animalService.AddAnimalCage(updateAnimalDto.CageId, animalId, cageMap);
            }

            if (!_animalService.UpdateAnimal(animal, animalMap))
            {
                ModelState.AddModelError("", "Error when updating animal!!");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }

        [HttpDelete("{animalId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteAnimal(string animalId)
        {
            var animal = _animalService.GetByAnimalId(animalId);

            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_animalService.DeleteAnimal(animalId))
            {
                ModelState.AddModelError("", "Something wrong while deleting animal!!!");
            }
            return NoContent();
        }
    }
}
