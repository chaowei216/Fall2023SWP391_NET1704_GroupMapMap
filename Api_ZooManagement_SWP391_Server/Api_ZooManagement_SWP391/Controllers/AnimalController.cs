using DTO.Dtos;
using Api_ZooManagement_SWP391.Profiles;
using AutoMapper;
using BBL.Interfaces;
using BBL.Services;
using DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;

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
        private readonly IScheduleService _scheduleService;
        private readonly IAnimalScheduleService _animalScheduleService;
        private readonly IAnimalSpeciesService _animalSpeciesService;
        private readonly IFoodCategoryService _foodCategoryService;

        public AnimalController(IMapper mapper, 
                                IAnimalService animalService,
                                ICageService cageService,
                                IUserService userService,
                                IFoodService foodService,
                                IScheduleService scheduleService,
                                IAnimalScheduleService animalScheduleService,
                                IAnimalSpeciesService animalSpeciesService,
                                IFoodCategoryService foodCategoryService)
        {
            _animalService = animalService;
            _mapper = mapper;
            _cageService = cageService;
            _userService = userService;
            _foodService = foodService;
            _scheduleService = scheduleService;
            _animalScheduleService = animalScheduleService;
            _animalSpeciesService = animalSpeciesService;
            _foodCategoryService = foodCategoryService;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<GetAnimalDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetAllAnimal()
        {
            var animals = _animalService.GetAll().Where(a=> a.Status == true).ToList();
            foreach (var animal in animals)
            {
                animal.CId = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).CageId;
                animal.EntryCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).EntryCageDate;
                animal.OutCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).OutCageDate;
                animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                animal.EndTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).EndTrainDate;
                var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);
                
                if (foods != null && foods.Count > 0)
                {
                    animal.Foods = new List<FoodAmountDto>();
                    foreach (var food in foods)
                    {
                        var foodDetail = _foodService.GetByFoodId(food.FoodId);
                        var foodCate = _foodService.GetByFoodId(food.FoodId).CategoryId;
                        animal.Foods.Add(new FoodAmountDto
                        {
                            FoodId = food.FoodId,
                            FName = foodDetail.FName,
                            CategoryName = _foodCategoryService.GetByCateId(foodCate).CategoryName,
                            Amount = food.Amount,
                            StartEat = food.StartEat,
                            EndEat = food.EndEat,
                        });
                    }
                }

                var schedules = _animalScheduleService.GetScheduleByAnimalId(animal.AnimalId);
                if (schedules != null)
                {
                    animal.Schedules = new List<GetAnimalScheduleDto>();
                    foreach (var schedule in schedules)
                    {
                        var scheduleDetail = _scheduleService.GetSchedule(schedule.ScheduleId);
                        animal.Schedules.Add(new GetAnimalScheduleDto
                        {
                            ScheduleId = schedule.ScheduleId,
                            ScheduleName = scheduleDetail.ScheduleName,
                            Description = schedule.Description,
                            Time = schedule.Time,
                        });
                    }
                }
            }

            return Ok(animals);
        }

        [HttpGet("page/{page}")]
        [ProducesResponseType(200, Type = typeof(AnimalResponseDto))]
        [ProducesResponseType(400)]
        public IActionResult GetAnimals(int page)
        {
            var animals = _animalService.GetAll();

            var pageResults = 10f;
            var pageCount = Math.Ceiling(animals.Count() / pageResults);
            if (animals != null && animals.Count > 0)
            {
                foreach (var animal in animals)
                {
                    animal.CId = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).CageId;
                    animal.EntryCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).EntryCageDate;
                    animal.OutCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).OutCageDate;
                    animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                    animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                    animal.EndTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).EndTrainDate;
                    var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);
                    if (foods != null && foods.Count > 0)
                    {
                        animal.Foods = new List<FoodAmountDto>();
                        foreach (var food in foods)
                        {
                            var foodDetail = _foodService.GetByFoodId(food.FoodId);
                            var foodCate = _foodService.GetByFoodId(food.FoodId).CategoryId;
                            animal.Foods.Add(new FoodAmountDto
                            {
                                FoodId = food.FoodId,
                                FName = foodDetail.FName,
                                CategoryName = _foodCategoryService.GetByCateId(foodCate).CategoryName,
                                Amount = food.Amount,
                                StartEat = food.StartEat,
                                EndEat = food.EndEat,
                            });
                        }
                    }

                    var schedules = _animalScheduleService.GetScheduleByAnimalId(animal.AnimalId);
                    if (schedules != null)
                    {
                        animal.Schedules = new List<GetAnimalScheduleDto>();
                        foreach (var schedule in schedules)
                        {
                            var scheduleDetail = _scheduleService.GetSchedule(schedule.ScheduleId);
                            animal.Schedules.Add(new GetAnimalScheduleDto
                            {
                                ScheduleId = schedule.ScheduleId,
                                ScheduleName = scheduleDetail.ScheduleName,
                                Description = schedule.Description,
                                Time = schedule.Time,
                            });
                        }
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
        [ProducesResponseType(200, Type = typeof(IEnumerable<OldUsersDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetTrainersByAnimalId(string animalId)
        {
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var trainers = _animalService.GetOldTrainersOfAnimal(animalId);

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(trainers);
        }

        [HttpGet("{animalId}/oldcages")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<OldCagesDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetOldCagesOfAnimal(string animalId)
        {
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var cages = _animalService.GetOldCagesOfAnimal(animalId);

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
                animal.CId = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).CageId;
                animal.EntryCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).EntryCageDate;
                animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);
                if (foods != null && foods.Count > 0)
                {
                    animal.Foods = new List<FoodAmountDto>();
                    foreach (var food in foods)
                    {
                        var foodDetail = _foodService.GetByFoodId(food.FoodId);
                        var foodCate = _foodService.GetByFoodId(food.FoodId).CategoryId;
                        animal.Foods.Add(new FoodAmountDto
                        {
                            FoodId = food.FoodId,
                            FName = foodDetail.FName,
                            CategoryName = _foodCategoryService.GetByCateId(foodCate).CategoryName,
                            Amount = food.Amount,
                            StartEat = food.StartEat,
                            EndEat = food.EndEat,
                        });
                    }
                }

                var schedules = _animalScheduleService.GetScheduleByAnimalId(animal.AnimalId);
                if (schedules != null)
                {
                    animal.Schedules = new List<GetAnimalScheduleDto>();
                    foreach (var schedule in schedules)
                    {
                        var scheduleDetail = _scheduleService.GetSchedule(schedule.ScheduleId);
                        animal.Schedules.Add(new GetAnimalScheduleDto
                        {
                            ScheduleId = schedule.ScheduleId,
                            ScheduleName = scheduleDetail.ScheduleName,
                            Description = schedule.Description,
                            Time = schedule.Time,
                        });
                    }
                }
            }

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(animal);
        } 

        [HttpPost("Animal")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        //[Authorize(Roles = "STAFF")]
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
            var animalId = "AN" + count.ToString().PadLeft(4, '0');

            List<AnimalFood> animalFoods = new List<AnimalFood>();

            var animalMap = _mapper.Map<Animal>(animalDto);
            var userMap = _mapper.Map<AnimalTrainer>(animalDto);
            var cageMap = _mapper.Map<AnimalCage>(animalDto);
            var foodAmount = animalDto.AnimalFoods;
            var species = _animalSpeciesService.GetBySpeciesName(animalDto.SpeciesName);

            animalMap.AnimalId = animalId;
            cageMap.EntryCageDate = DateTime.Now;    
            userMap.StartTrainDate = DateTime.Now;
            animalMap.Species = species;

            animalMap.Status = true;

            int isCageFull = _cageService.GetByCageId(cageId).AnimalQuantity;
            int fullCage = _cageService.GetByCageId(cageId).MaxCapacity;

            foreach (var food in foodAmount)
            {
                var food1 = _foodService.GetByFoodId(food.FoodId);
                if (food1 == null) return BadRequest("Food not found!!!");
                if (food.Amount == 0) continue;
                animalFoods.Add(new AnimalFood()
                {
                    AnimalId = animalMap.AnimalId,
                    Food = food1,
                    Amount = food.Amount,
                    StartEat = food.StartEat,
                    EndEat = food.EndEat,
                });
            }
            
            if (isCageFull > fullCage)
            {
                return BadRequest("This cage is full");
            }

            if (!_animalService.AddAnimal(userId, cageId, animalMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }

        [HttpPost("AnimalSchedule")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        //[Authorize(Roles = "STAFF")]
        public IActionResult CreateAnimalSchedule(string animalId, [FromBody] AnimalScheduleDto animalScheduleDto)
        {
            if (animalId == null)
            {
                return BadRequest();
            }
            if (animalId != animalScheduleDto.AnimalId)
                return BadRequest(ModelState);
            if (!_animalService.AnimalExists(animalId))
                return NotFound();

            var animalScheduleMap = _mapper.Map<Animal>(animalScheduleDto);
            var animal = _animalService.GetByAnimalId(animalId);
            var schedules = animalScheduleDto.AnimalSchedules;

            List<AnimalScheduleCreateDto> list = new List<AnimalScheduleCreateDto>();

            foreach (var schedule in schedules)
            {
                var getSchedule = _scheduleService.GetSchedule(schedule.ScheduleId);
                if (getSchedule == null) return BadRequest("Food not found!!!");
                list.Add(new AnimalScheduleCreateDto()
                {
                    ScheduleId = schedule.ScheduleId,
                    Time = schedule.Time,
                    Description = schedule.Description,
                });
            }

            if (!_animalScheduleService.AddAnimalSchedule(animal, animalScheduleMap))
            {
                ModelState.AddModelError("", "Error when updating animal!!");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }

        [HttpPut("{animalId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        //[Authorize(Roles = "STAFF")]
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
            var scheduleMap = _mapper.Map<AnimalSchedule>(updateAnimalDto);

            var newTrainer = _userService.GetById(updateAnimalDto.UserId);
            var animalTrainer = _userService.GetUserByAnimalId(animal.AnimalId);
            var oldTrainer = _userService.GetById(animalTrainer.UserId);
            if (animalTrainer == null)
                return BadRequest("Something wrong!!!");
            if (animalTrainer.UserId != updateAnimalDto.UserId)
            {
                newTrainer.CountAnimal += 1;
                oldTrainer.CountAnimal -= 1;
                animalTrainer.EndTrainDate = DateTime.Now;
                _animalService.AddAnimalTrainer(updateAnimalDto.UserId, animalId, trainerMap);
            }

            var newCage = _cageService.GetByCageId(updateAnimalDto.CageId);
            var animalCage = _animalService.GetAnimalCageByAnimalId(animalId).Where(c => c.OutCageDate == null).FirstOrDefault();
            var oldCage = _cageService.GetByCageId(animalCage.CageId);
            if(animalCage == null)
            {
                return BadRequest("Something wrong!!!");
            }
            if (animalCage.CageId != updateAnimalDto.CageId)
            {
                newCage.AnimalQuantity += 1;
                oldCage.AnimalQuantity -= 1;
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
                    StartEat = food.StartEat,
                    EndEat = food.EndEat,
                });
            }

            List<UpdateAnimalScheduleDto> animalSchedules = new List<UpdateAnimalScheduleDto>();
            var animalSchedule = _scheduleService.GetScheduleByAnimalId(updateAnimalDto.AnimalId);
            var schedules = updateAnimalDto.AnimalSchedules;
            foreach (var schedule in schedules)
            {
                var schedule1 = _scheduleService.GetSchedule(schedule.ScheduleId);
                if (schedule1 == null) return BadRequest("Schedule not found!!!");
                animalSchedules.Clear();
                animalSchedules.Add(new UpdateAnimalScheduleDto()
                {
                    ScheduleId = schedule.ScheduleId,
                    Description = schedule.Description,
                    Time = schedule.Time,
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
        //[Authorize(Roles = "STAFF")]
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

        [HttpGet("animalSpecies")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<GetSpeciesAnimalDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetAnimalSpecies(string speciesId)
        {
            var animalSpecies = _animalService.GetAnimalBySpecies(speciesId);
            foreach(var animalSpecie in  animalSpecies)
            {
                var animals = animalSpecie.Animals.Where(a => a.Status == true);
                foreach (var animal in animals)
                {
                    animal.CId = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).CageId;
                    animal.EntryCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).EntryCageDate;
                    animal.OutCageDate = _cageService.GetAnimalCageByAnimalId(animal.AnimalId).OutCageDate;
                    animal.UserId = _userService.GetUserByAnimalId(animal.AnimalId).UserId;
                    animal.StartTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).StartTrainDate;
                    animal.EndTrainDate = _userService.GetUserByAnimalId(animal.AnimalId).EndTrainDate;
                    var foods = _foodService.GetFoodsByAnimalId(animal.AnimalId);

                    if (foods != null && foods.Count > 0)
                    {
                        animal.Foods = new List<FoodAmountDto>();
                        foreach (var food in foods)
                        {
                            var foodDetail = _foodService.GetByFoodId(food.FoodId);
                            var foodCate = _foodService.GetByFoodId(food.FoodId).CategoryId;
                            animal.Foods.Add(new FoodAmountDto
                            {
                                FoodId = food.FoodId,
                                FName = foodDetail.FName,
                                CategoryName = _foodCategoryService.GetByCateId(foodCate).CategoryName,
                                Amount = food.Amount,
                                StartEat = food.StartEat,
                                EndEat = food.EndEat,
                            });
                        }
                    }

                    var schedules = _animalScheduleService.GetScheduleByAnimalId(animal.AnimalId);
                    if (schedules != null)
                    {
                        animal.Schedules = new List<GetAnimalScheduleDto>();
                        foreach (var schedule in schedules)
                        {
                            var scheduleDetail = _scheduleService.GetSchedule(schedule.ScheduleId);
                            animal.Schedules.Add(new GetAnimalScheduleDto
                            {
                                ScheduleId = schedule.ScheduleId,
                                ScheduleName = scheduleDetail.ScheduleName,
                                Description = schedule.Description,
                                Time = schedule.Time,
                            });
                        }
                    }
                }
            }
            return Ok(animalSpecies);
        }
    }
}
