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
    public class FoodCategoryController : ControllerBase
    {
        private readonly IFoodCategoryService _foodCategoryService;
        private readonly IFoodService _foodService;
        private readonly IMapper _mapper;

        public FoodCategoryController(IFoodCategoryService foodCategoryService, IFoodService foodService, IMapper mapper)
        {
            _foodCategoryService = foodCategoryService;
            _foodService = foodService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public IActionResult GetAllCategory()
        {
            var foodCate = _foodCategoryService.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(foodCate);
        }

        [HttpGet("foodCategoryId")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public IActionResult GetByCateId(string id)
        {
            var foodCate = _foodCategoryService.GetByCateId(id);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(foodCate);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateArea([FromBody] FoodCategoryDto cateDto)
        {
            if (cateDto == null)
            {
                return BadRequest(ModelState);
            }

            if (_foodCategoryService.GetByCateName(cateDto.CategoryName) != null)
                return BadRequest("Cate existed");

            int count = _foodCategoryService.GetAll().Count() + 1;
            var cateId = "FC" + count.ToString().PadLeft(4, '0');

            var cateMap = _mapper.Map<FoodCategory>(cateDto);
            cateMap.CategoryId = cateId;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_foodCategoryService.AddFoodCate(cateMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }
    }
}
