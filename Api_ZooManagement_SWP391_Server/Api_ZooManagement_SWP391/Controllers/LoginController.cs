using Api_ZooManagement_SWP391.Dtos;
using Api_ZooManagement_SWP391.Entities;
using Api_ZooManagement_SWP391.Repositories.RepositoriesBasic;
using Api_ZooManagement_SWP391.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

        private User Authentication(UserDto user)
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
        public IActionResult Login(UserDto user)
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

        [HttpGet("GetUser")]
        [Authorize(Roles = "ADMIN")]
        public IActionResult GetUser()
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
