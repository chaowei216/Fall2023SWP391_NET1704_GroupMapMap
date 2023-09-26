using BBL.Interfaces;
using BBL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CageController : ControllerBase
    {
        private readonly ICageService _cageService;

        public CageController(ICageService cageService)
        {
            _cageService = cageService;
        }

        [HttpGet]
        public IActionResult GetCage()
        {
            var cages = _cageService.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(cages);
        }
        [HttpGet("CageId")]
        public IActionResult GetArea(string id)
        {
            var cage = _cageService.GetByCageId(id);
            if (cage == null)
            {
                return NotFound();
            }
            return Ok(cage);

        }
    }
}
