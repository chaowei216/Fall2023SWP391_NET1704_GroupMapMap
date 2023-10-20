using AutoMapper;
using BBL.Interfaces;
using DAL.Entities;
using DTO.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExperienceController : ControllerBase
    {
        private readonly IWorkExperienceService _experienceService;
        private readonly IMapper _mapper;

        public ExperienceController(IWorkExperienceService experienceService, IMapper mapper)
        {
            _experienceService = experienceService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<WorkExperienceDto>))]
        public IActionResult GetAllExperience()
        {
            var exps = _mapper.Map<List<WorkExperienceDto>>(_experienceService.GetExperiences());
            if(!ModelState.IsValid) 
                return BadRequest(exps);
            return Ok(exps);
            
        }

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(500)]
        [ProducesResponseType(400)]
        public IActionResult AddExperience([FromBody] ExperienceCreateDto expCreate)
        {
            if (expCreate == null)
                return BadRequest();

            if (_experienceService.GetExperienceByPosition(expCreate.Position) != null)
                return BadRequest("Position existed");

            var exp = _mapper.Map<WorkExperience>(expCreate);
            int count = _experienceService.GetExperiences().Count() + 1;
            var expId = "EX" + count.ToString().PadLeft(3, '0');
            exp.ExperienceId = expId;

            if (!ModelState.IsValid)
                return BadRequest(exp);

            if(!_experienceService.AddExperience(exp))
            {
                ModelState.AddModelError("", "Error when adding experience!!!");
                return BadRequest(ModelState);
            }

            return Ok("Create Successfully");
        }
    }
}
