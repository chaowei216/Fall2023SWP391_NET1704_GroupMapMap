﻿using DTO.Dtos;
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
        public IActionResult GetUsers()
        {
            var u = _mapper.Map<List<UserDto>>(_userService.GetUsers());
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(u);
        }

        [HttpGet("users/active")]
        [ProducesResponseType(200, Type= typeof(IEnumerable<UserDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetActiveUsers()
        {
            var users = _mapper.Map<List<UserDto>>(_userService.GetActiveUsers());
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(users);
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

            var user = _mapper.Map<User>(userCreate);
            if (_userService.GetUserByPhone(userCreate.Phone) != null)
            {
                return BadRequest("Phone Existed!!");
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);


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
        public IActionResult UpdateUser(string userId, [FromBody] UserUpdateDto updateUser)
        {
            if (updateUser == null)
                return BadRequest(ModelState);

            if (userId != updateUser.UserId)
                return BadRequest(ModelState);

            if (!_userService.UserExists(userId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            var user = _userService.GetById(userId);
            var userMap = _mapper.Map<User>(updateUser);

            if (user.Phone != userMap.Phone &&
                _userService.GetUserByPhone(userMap.Phone) != null)
            {
                return BadRequest("Phone Existed!!");
            }

            if (!_userService.Update(user, userMap))
            {
                ModelState.AddModelError("", "Error when updating user!!");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpDelete("{userId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteUser(string userId)
        {
            if (!_userService.UserExists(userId))
            {
                return NotFound();
            }

            var animals = _userService.GetAnimalsByUserId(userId);

            if (animals != null)
                return BadRequest("User still manage animals!!!");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_userService.DeleteUser(userId))
            {
                ModelState.AddModelError("", "Something went wrong while deleting user");
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