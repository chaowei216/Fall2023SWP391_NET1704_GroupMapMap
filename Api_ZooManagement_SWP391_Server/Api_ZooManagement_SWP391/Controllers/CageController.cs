using BBL.Interfaces;
using BBL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Api_ZooManagement_SWP391.Dtos;
using AutoMapper;
using DAL.Entities;
using System.Text.RegularExpressions;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CageController : ControllerBase
    {
        private readonly ICageService _cageService;
        private readonly IAreaService _areaService;
        private readonly IMapper _mapper;
        public Regex areaFormat = new Regex(@"^AE\d{3}");

        public CageController(IMapper mapper, ICageService cageService)
        {
            _cageService = cageService;
            _mapper = mapper;
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
        public IActionResult GetArea(string cageId)
        {
            if (!_cageService.CageExists(cageId))
                return NotFound();

            var cage = _mapper.Map<CageDto>(_cageService.GetByCageId(cageId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(cage);
        }

        [HttpPost]
        public IActionResult CreateCage([FromBody] CageDto cageDto)
        {
            if (cageDto == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if(!areaFormat.IsMatch(cageDto.AreaId))
            {
                return BadRequest("Wrong area format.");
            }

            int count = _cageService.GetAll().Count() + 1;
            var cageId = "C" + count.ToString().PadLeft(4, '0');

            var cageMap = _mapper.Map<Cage>(cageDto);
            cageMap.CId = cageId;
            _cageService.AddCage(cageMap);

            return Ok("Successfully");
        }
    }
}
