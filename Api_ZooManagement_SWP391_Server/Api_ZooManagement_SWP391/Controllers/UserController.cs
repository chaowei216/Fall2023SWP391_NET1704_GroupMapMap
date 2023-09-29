using AutoMapper;
using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UserController(IMapper mapper, IUserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        [HttpGet("users")]
        [Authorize(Roles = "ADMIN")]
        public IActionResult GetUsers()
        {
            var u = _userService.GetUsers();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(u);
        }
    }
}
