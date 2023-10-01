
﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Api_ZooManagement_SWP391.Dtos;
using BBL.Interfaces;
using DAL.Entities;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;

        public LoginController(IConfiguration configuration, IUserService userService)
        {
            _configuration = configuration;
            _userService = userService;
        }

        private User Authentication(LoginDto user)
        {
            var user_ = _userService.CheckLogin(user.Email, user.Password);
            if ( user_ != null)
            {
                return user_;
            }
            return null;
        }

        private string GenerateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };
            var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                 _configuration["Jwt:Issuer"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto user)
        {
            var user_ = Authentication(user);
            if (user_ == null)
            {
                return BadRequest("User not found.");
            }
            //user.Role = user_.Role;
            string token = GenerateToken(user_);
            return Ok(token);
        }

        [HttpPost("forgot-password")]
        public IActionResult ForgotPassword(string email)
        {
            var user = _userService.GetByEmail(email);

            if (user == null)
            {
                return BadRequest("invalid email");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var resetToken = CreateRandomToken().ToString();

            var result = _userService.ForgotPassword(user, resetToken);

            if (!result)
            {
                return BadRequest("invalid token");
            }

            return Ok("you can reset your password");

        }

        [HttpPost("reset-password")]
        public IActionResult ResetPassword([FromQuery]ResetPasswordDto request)
        {
            var user = _userService.GetUsers().Where(user => user.ResetPassToken == request.Token).FirstOrDefault();

            if(user == null || user.ResetTokenExpires < DateTime.Now)
            {
                return BadRequest("Invalid Token");
            }

            var result = _userService.ResetPassword(user, request.Password, request.PasswordConfirmation);
            if(!result)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok("Reset Successfully");

        }

        private object CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }
    }
}
