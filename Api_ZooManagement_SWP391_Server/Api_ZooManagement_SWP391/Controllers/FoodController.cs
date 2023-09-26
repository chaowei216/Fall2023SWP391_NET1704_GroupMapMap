using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BBL.Interfaces;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly IFoodService _foodService;
        public FoodController(IFoodService foodService)
        {
            _foodService = foodService;
        }
        [HttpGet]
        public IActionResult GetFood()
        {
            var species = _foodService.GetAllFood();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(species);
        }
        [HttpGet("SpeciesId")]
        public IActionResult GetFood(string id)
        {
            var species = _foodService.GetByFoodId(id);
            if (species == null)
            {
                return NotFound();
            }
            return Ok(species);
        }

    }
}
