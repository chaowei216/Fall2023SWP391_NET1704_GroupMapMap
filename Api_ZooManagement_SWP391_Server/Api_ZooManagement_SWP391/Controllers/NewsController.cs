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
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;
        private readonly IMapper _mapper;

        public NewsController(INewsService newsService, IMapper mapper)
        {
            _newsService = newsService;
            _mapper = mapper;
        }

        [HttpGet()]
        [ProducesResponseType(200, Type = typeof(IEnumerable<News>))]
        public IActionResult GetAllNews()
        {
            var allNews = _mapper.Map<List<NewsDto>>(_newsService.GetAllNews());

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(allNews);
        }

        [HttpGet("{newsId}")]
        [ProducesResponseType(200, Type = typeof(News))]
        [ProducesResponseType(400)]
        public IActionResult GetNews(string newsId)
        {
            if (!_newsService.NewsExists(newsId)) return NotFound();

            var news = _mapper.Map<NewsDto>(_newsService.GetNews(newsId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(news);
        }

    }
}
