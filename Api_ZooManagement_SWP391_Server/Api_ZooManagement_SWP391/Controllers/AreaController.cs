using BBL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreaController : ControllerBase
    {
        private readonly IAreaService _areaService;
        public AreaController( IAreaService areaService)
        {
            _areaService = areaService;
        }
        [HttpGet]
        public IActionResult GetArea()
        {
            var areas = _areaService.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(areas);
        }
        [HttpGet("areaId")]
        public IActionResult GetArea(string id)
        {
            var area = _areaService.GetByAreaId(id);
            if(area == null)
            {
                return NotFound();
            }
            return Ok(area);
            
        }

    }
}
