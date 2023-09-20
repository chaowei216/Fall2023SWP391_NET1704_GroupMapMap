using Api_ZooManagement_SWP391.Dtos;
using Api_ZooManagement_SWP391.Entities;
using Api_ZooManagement_SWP391.Repositories.RepositoriesBasic;
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
        private readonly IUserRepository _userRepo;

        public LoginController(IConfiguration configuration, IUserRepository userRepo)
        {
            _configuration = configuration;
            _userRepo = userRepo;
        }

        private User Authentication(UserDto user)
        {
            var user_ = _userRepo.CheckLogin(user.Email, user.Password);
            if ( user_ != null)
            {
                return user_;
            }
            return null;
        }

        private string GenerateToken(UserDto user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                 _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(1),
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost("Login")]
        public IActionResult Login(UserDto user)
        {
            var user_ = Authentication(user);
            if (user_ == null)
            {
                return BadRequest("User not found.");
            }
            string token = GenerateToken(user);
            return Ok(token);
        }
    }
}
