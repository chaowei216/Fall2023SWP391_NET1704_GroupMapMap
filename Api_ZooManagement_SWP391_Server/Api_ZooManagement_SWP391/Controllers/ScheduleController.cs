using BBL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleService _scheduleService;

        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }
        [HttpGet]
        public IActionResult GetSchedule()
        {
            var schedule = _scheduleService.GetAllSchedule();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(schedule);
        }
        [HttpGet("scheduleId")]
        public IActionResult GetArea(string id)
        {
            var schedule = _scheduleService.GetSchedule(id);
            if (schedule == null)
            {
                return NotFound();
            }
            return Ok(schedule);

        }

    }
}
