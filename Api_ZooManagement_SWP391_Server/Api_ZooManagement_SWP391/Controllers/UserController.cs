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
            int count = _userService.GetTotalUserByRole(user.Role) + 1;

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

        [HttpPut("{userId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdatePokemon(string userId, [FromBody] UserUpdateDto updateUser)
        {
            if (updateUser == null)
                return BadRequest(ModelState);

            if (userId != updateUser.UserId)
                return BadRequest(ModelState);

            if (!_userService.UserExists(userId))
                return NotFound();

            if (_userService.GetUserByPhone(updateUser.Phone) != null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest();

            var userMap = _mapper.Map<User>(updateUser);
            var user = _userService.GetById(userId);
            user.Firstname = updateUser.Firstname;
            user.Lastname = updateUser.Lastname;
            user.Address = updateUser.Address;
            user.Role = updateUser.Role;
            user.Phone = updateUser.Phone;
            user.EndDate = updateUser.EndDate;
            user.Status = updateUser.Status;


            if (!_userService.Update(userMap))
            {
                ModelState.AddModelError("", "Error when updating user!!");
                return StatusCode(500, ModelState);
            }

            return NoContent();
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
