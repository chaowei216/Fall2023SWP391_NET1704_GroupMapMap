using DTO.Dtos;
using AutoMapper;
using BBL.Interfaces;
using BBL.Services;
using DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreaController : ControllerBase
    {
        private readonly IAreaService _areaService;
        private readonly IMapper _mapper;
        public AreaController(IMapper mapper, IAreaService areaService)
        {
            _mapper = mapper;
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
        [ProducesResponseType(200, Type = typeof(Area))]
        public IActionResult GetArea(string areaId)
        {
            if (!_areaService.AreaExists(areaId))
                return NotFound();

            var area = _mapper.Map<AreaDto>(_areaService.GetByAreaId(areaId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(area);
        }

        [HttpPost]
        public IActionResult CreateArea([FromBody] AreaDto areaDto)
        {
            if (areaDto == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int count = _areaService.GetAll().Count() + 1;
            var areaId = "AE" + count.ToString().PadLeft(3, '0');

            var areaMap = _mapper.Map<Area>(areaDto);
            areaMap.AreaId = areaId;

            if (!_areaService.AddArea(areaMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving!!!");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully");
        }

    }
}
