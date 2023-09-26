using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BBL.Interfaces;
using BBL.Services;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeciesController : ControllerBase
    {
        private readonly ISpeciesAnimalsService _species;
        public SpeciesController(ISpeciesAnimalsService speciesServer)
        {

            _species = speciesServer;
        }
        [HttpGet]
        public IActionResult GetSpecies()
        {
            var species = _species.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(species);
        }
        [HttpGet("SpeciesId")]
        public IActionResult GetArea(string id)
        {
            var species = _species.GetBySpeciesAnimalsId(id);
            if (species == null)
            {
                return NotFound();
            }
            return Ok(species);
        }
    }
}
