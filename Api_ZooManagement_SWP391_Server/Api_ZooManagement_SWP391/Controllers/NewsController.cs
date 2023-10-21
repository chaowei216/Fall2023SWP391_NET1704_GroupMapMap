using DTO.Dtos;
using AutoMapper;
using BBL.Interfaces;
using DAL.Entities;
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

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateNews([FromBody] NewsDto newsDto)
        {
            if (newsDto == null)
            {
                return BadRequest(ModelState);
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int count = _newsService.GetAllNews().Count + 1;
            var newsId = "NW" + count.ToString().PadLeft(3, '0');

            var newsMap = _mapper.Map<News>(newsDto);
            newsMap.NewsId = newsId;

            if (!_newsService.AddNews(newsMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successful Created");
        }

        [HttpPut("{newsId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateFood(string newsId, [FromBody] NewsUpdateDto newsUpdate)
        {
            if (newsUpdate == null)
                return BadRequest(ModelState);

            if (newsId != newsUpdate.NewsId)
                return BadRequest(ModelState);

            if (!_newsService.NewsExists(newsId))
                return NotFound();

            var newsMap = _mapper.Map<News>(newsUpdate);

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_newsService.UpdateNews(newsMap))
            {
                ModelState.AddModelError("", "Error when updating food!!");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpDelete("{newsId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteFood(string newsId)
        {
            if (!_newsService.NewsExists(newsId))
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_newsService.DeleteNews(newsId))
            {
                ModelState.AddModelError("", "Something went wrong while deleting food");
            }

            return NoContent();
        }
    }
}
