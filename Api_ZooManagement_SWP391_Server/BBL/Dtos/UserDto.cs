
using DAL.Entities;

namespace BBL.Dtos
{
    public class UserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
}
