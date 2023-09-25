using BBL.Dtos;
using DAL.Entities;
using DAL.Repositories;
using BBL.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;
        private readonly IGenericRepository<User> _userRepo;

        public LoginController(IConfiguration configuration, IUserService userService, IGenericRepository<User> userRepository)
        {
            _configuration = configuration;
            _userService = userService;
            _userRepo = userRepository;
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

        [HttpGet("users")]
        [Authorize(Roles = "ADMIN")]
        public IActionResult GetUsers()
        {
            var u = _userRepo.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(u);
        }

        [HttpPost("verify")]
        public IActionResult VerifyEmail(string token)
        {
            var result = _userService.VerifyEmail(token);

            if (!result)
            {
                return BadRequest("Invalid token");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok("User verified!!");

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

        private object CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }
    }
}
