using Api_ZooManagement_SWP391.Dtos;
using AutoMapper;
using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

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
            var u = _mapper.Map<List<UserDto>>(_userService.GetUsers());
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(u);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateUser([FromQuery] string? expId, [FromQuery] string? company, [FromBody] UserCreateDto userCreate)
        {
            if (userCreate == null)
                return BadRequest();

            var users = _userService.GetUsers()
                .Where(c => c.Email.Trim().ToUpper() == userCreate.Email.TrimEnd().ToUpper())
                .FirstOrDefault();

            if (users != null)
            {
                ModelState.AddModelError("", "User already exists");
                return StatusCode(422, ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = _mapper.Map<User>(userCreate);
            string userId = "";
            int count = _userService.GetUsers().Count() + 1;

            CreatePasswordHash("123456", out byte[] passwordHash, out byte[] passwordSalt);


            if(UserRoleExtensions.ToIntValue(user.Role) == 2) 
               userId = "S" + count.ToString().PadLeft(4, '0');
            else if(UserRoleExtensions.ToIntValue(user.Role) == 3)
               userId = "Z" + count.ToString().PadLeft(4, '0');
            
            user.UserId = userId; 
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.StartDate = DateTime.Now;
            user.Status = true;

            if (!_userService.Add(expId, company, user))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successful Created");
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac
                    .ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
