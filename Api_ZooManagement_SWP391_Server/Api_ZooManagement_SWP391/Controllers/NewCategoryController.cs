using Api_ZooManagement_SWP391.Dtos;
using AutoMapper;
using BBL.Interfaces;
using DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewCategoryController : ControllerBase
    {
        private readonly INewsCategoryService _newCategoryService;
        private readonly IMapper _mapper;

        public NewCategoryController(INewsCategoryService newCategoryService, IMapper mapper)
        {
            _newCategoryService = newCategoryService;
            _mapper = mapper;
        }

        [HttpGet()]
        [ProducesResponseType(200, Type = typeof(IEnumerable<NewsCategory>))]
        public IActionResult GetAllNews()
        {
            var allNewsCategory = _mapper.Map<List<NewsCategoryDto>>(_newCategoryService.GetAllNewsCategory());

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(allNewsCategory);
        }

        [HttpGet("{newsCategoryId}")]
        [ProducesResponseType(200, Type = typeof(NewsCategory))]
        [ProducesResponseType(400)]
        public IActionResult GetNews(string id)
        {
            if (!_newCategoryService.NewsCategoryExists(id)) return NotFound();

            var newCategory = _mapper.Map<NewsDto>(_newCategoryService.GetNewsCategory(id));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(newCategory);
        }

    }
}
