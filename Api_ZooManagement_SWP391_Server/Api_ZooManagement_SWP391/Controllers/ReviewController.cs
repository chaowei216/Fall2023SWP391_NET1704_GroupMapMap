using AutoMapper;
using BBL.Interfaces;
using DAL.Entities;
using DTO.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;
        private readonly IMapper _mapper;

        public ReviewController(IReviewService reviewService, IMapper mapper)
        {
            _reviewService = reviewService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Review>))]
        public IActionResult GetAllReview()
        {
            var review = _mapper.Map<List<ReviewDto>>(_reviewService.GetAllReview());
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(review);
        }
        [HttpGet("reviewId")]
        [ProducesResponseType(200, Type = typeof(Review))]
        [ProducesResponseType(400)]
        public IActionResult GetReview(string reviewId)
        {
            if (!_reviewService.ReviewExists(reviewId)) return NotFound();

            var reviews = _mapper.Map<ReviewDto>(_reviewService.GetReview(reviewId));

            if (!ModelState.IsValid) return BadRequest();

            return Ok(reviews);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateReview([FromBody] ReviewDto reviewDto)
        {
            if (reviewDto == null)
            {
                return BadRequest(ModelState);
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int count = _reviewService.GetAllReview().Count + 1;
            var reviewId = "R" + count.ToString().PadLeft(4, '0');

            var reviewMap = _mapper.Map<Review>(reviewDto);
            reviewMap.ReviewId = reviewId;

            if (!_reviewService.AddReview(reviewMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successful Created");
        }
        [HttpPut("{reviewId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateFood(string reviewId, [FromBody] ReviewUpdateDto reviewUpdate)
        {
            if (reviewUpdate == null)
                return BadRequest(ModelState);

            if (reviewId != reviewUpdate.ReviewId)
                return BadRequest(ModelState);

            if (!_reviewService.ReviewExists(reviewId))
                return NotFound();

            var reviewMap = _mapper.Map<Review>(reviewUpdate);

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_reviewService.UpdateReview(reviewMap))
            {
                ModelState.AddModelError("", "Error when updating food!!");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpDelete("{reviewId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteFood(string reviewId)
        {
            if (!_reviewService.ReviewExists(reviewId))
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_reviewService.DeleteReview(reviewId))
            {
                ModelState.AddModelError("", "Something went wrong while deleting food");
            }

            return NoContent();
        }
    }
}
