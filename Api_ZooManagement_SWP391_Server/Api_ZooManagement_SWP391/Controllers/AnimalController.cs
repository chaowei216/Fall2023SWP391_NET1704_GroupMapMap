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
        private readonly IFoodService _foodService;
        public Regex animalRegex = new Regex(@"^A\d{4}");
        public Regex userRegex = new Regex(@"^Z\d{4}");

        public AnimalController(IMapper mapper, IAnimalService animalService, ICageService cageService, IUserService userService, IFoodService foodService)
        {
            _animalService = animalService;
            _mapper = mapper;
            _cageService = cageService;
            _userService = userService;
            _foodService = foodService;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<GetAnimalDto>))]
        public IActionResult GetAllAnimal()
        {
            var animals = _animalService.GetAll();
            if(animals == null)
                return NotFound("Have any animals");

            foreach (var animal in animals)
            {
                animal.CId = _cageService.GetCageByAnimalId(animal.AnimalId).CageId;
                animal.EntryCageDate = _cageService.GetCageByAnimalId(animal.AnimalId).EntryCageDate;
                animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);
                if (foods != null && foods.Count > 0)
                {
                    animal.Foods = new List<FoodAmountDto>();
                    foreach (var food in foods)
                    {
                        animal.Foods.Add(new FoodAmountDto
                        {
                            id = food.FoodId,
                            quantity = food.Amount,
                            Description = food.Description
                        });
                    }
                }
            }

            return Ok(animals);
        }

        [HttpGet("page/{page}")]
        [ProducesResponseType(200, Type = typeof(AnimalResponseDto))]
        public IActionResult GetAnimals(int page)
        {
            var animals = _animalService.GetAll();
            if (animals == null || animals.Count() == 0)
                return NotFound();

            var pageResults = 1f;
            var pageCount = Math.Ceiling(animals.Count() / pageResults);

            foreach (var animal in animals)
            {
                animal.CId = _cageService.GetCageByAnimalId(animal.AnimalId).CageId;
                animal.EntryCageDate = _cageService.GetCageByAnimalId(animal.AnimalId).EntryCageDate;
                animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);
                if (foods != null && foods.Count > 0)
                {
                    animal.Foods = new List<FoodAmountDto>();
                    foreach (var food in foods)
                    {
                        animal.Foods.Add(new FoodAmountDto
                        {
                            id = food.FoodId,
                            quantity = food.Amount
                        });
                    }
                }
            }

            var result = animals
                        .Skip((page - 1) * (int)pageResults)
                        .Take((int)pageResults).ToList();

            var response = new AnimalResponseDto
            {
                Animals = result,
                CurrentPage = page,
                Pages = (int)pageCount
            };

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(response);
        }

        [HttpGet("{animalId}/oldtrainers")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<UserDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetTrainersByAnimalId(string animalId)
        {
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var trainers = _mapper.Map<List<UserDto>>(_animalService.GetOldTrainersOfAnimal(animalId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(trainers);
        }

        [HttpGet("{animalId}/oldcages")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<CageDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetOldCagesOfAnimal(string animalId)
        {
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var cages = _mapper.Map<List<CageDto>>(_animalService.GetOldCagesOfAnimal(animalId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(cages);
        }

        [HttpGet("{animalId}")]
        [ProducesResponseType(200, Type = typeof(GetAnimalDto))]
        [ProducesResponseType(400)]
        public IActionResult GetAnimalById(string animalId)
        {
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var animal = _animalService.GetById(animalId);
            if(animal != null)
            {
                animal.CId = _cageService.GetCageByAnimalId(animal.AnimalId).CageId;
                animal.EntryCageDate = _cageService.GetCageByAnimalId(animal.AnimalId).EntryCageDate;
                animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);
                if (foods != null && foods.Count > 0)
                {
                    animal.Foods = new List<FoodAmountDto>();
                    foreach (var food in foods)
                    {
                        animal.Foods.Add(new FoodAmountDto
                        {
                            id = food.FoodId,
                            quantity = food.Amount
                        });
                    }
                }
            }

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(animal);
        }

        [HttpGet("AvailableTrainers")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public IActionResult GetTrainersAvailable()
        {
            var user = _mapper.Map<List<AvailableTrainer>>(_animalService.GetTrainersCanTrain());
            return Ok(user);
        }

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

            int count = 0;
            var animals = _animalService.GetAll();
            if (animals == null) count = 1;
            else count = animals.Count() + 1;
            var animalId = "A" + count.ToString().PadLeft(4, '0');

            List<AnimalFood> animalFoods = new List<AnimalFood>();

            var animalMap = _mapper.Map<Animal>(animalDto);
            var userMap = _mapper.Map<AnimalTrainer>(animalDto);
            var cageMap = _mapper.Map<AnimalCage>(animalDto);
            var foodMap = _mapper.Map<Animal>(animalDto);
            var foodAmount = animalDto.Foods;

            animalMap.AnimalId = animalId;
            cageMap.EntryCageDate = DateTime.Now;    
            userMap.StartTrainDate = DateTime.Now;

            animalMap.Status = true;

            int isCageFull = _cageService.GetByCageId(cageId).AnimalQuantity;
            int fullCage = _cageService.GetByCageId(cageId).MaxCapacity;

            foreach (var food in foodAmount)
            {
                var food1 = _foodService.GetByFoodId(food.id);
                if (food1 == null) return BadRequest("Food not found!!!");
                if (food.quantity == 0) continue;
                animalFoods.Add(new AnimalFood()
                {
                    AnimalId = animalMap.AnimalId,
                    Food = food1,
                    Amount = food.quantity,
                    Description = food.Description
                });
            }
            isCageFull += 1;
            if (isCageFull > fullCage)
            {
                return BadRequest("This cage is full");
            }
            if (_animalService.GetTrainersCanTrain().Count() >= 10)
            {
                return BadRequest("Zoo trainer have trained 10 animals");
            }
            if(!userRegex.IsMatch(userId)) {
                return BadRequest("This is not a zoo trainer!!!");
            }
    
            if (!_animalService.AddAnimal(userId, cageId, animalFoods, animalMap))
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
            var foodMap = _mapper.Map<AnimalFood>(updateAnimalDto);

            var animalTrainer = _userService.GetUserByAnimalId(animal.AnimalId);
            if (animalTrainer == null)
                return BadRequest("Something wrong!!!");
            if (animalTrainer.UserId != updateAnimalDto.UserId)
            {
                animalTrainer.EndTrainDate = DateTime.Now;
                _animalService.AddAnimalTrainer(updateAnimalDto.UserId, animalId, trainerMap);
            }

            var animalCage = _animalService.GetCageByAnimalId(animalId).Where(c => c.OutCageDate == null).FirstOrDefault();
            if(animalCage == null)
            {
                return BadRequest("Something wrong!!!");
            }
            if (animalCage.CageId != updateAnimalDto.CageId)
            {
                animalCage.OutCageDate = DateTime.Now;
                _animalService.AddAnimalCage(updateAnimalDto.CageId, animalId, cageMap);
            }

            List<UpdateAnimalFoodDto> animalFoods = new List<UpdateAnimalFoodDto>();
            var foods = _foodService.GetFoodsByAnimalId(updateAnimalDto.AnimalId);
            var foodAmount = updateAnimalDto.AnimalFoods;
            foreach (var food in foodAmount)
            {
                var food1 = _foodService.GetByFoodId(food.FoodId);
                if (food1 == null) return BadRequest("Food not found!!!");
                animalFoods.Add(new UpdateAnimalFoodDto()
                {
                    FoodId = food.FoodId,
                    Amount = food.Amount,
                    Description = food.Description,
                });
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
