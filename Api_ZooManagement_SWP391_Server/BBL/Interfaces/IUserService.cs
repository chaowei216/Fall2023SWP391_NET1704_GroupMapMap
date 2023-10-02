
using DAL.Entities;

namespace BBL.Interfaces
{
    public interface IUserService
    {
        bool Add(string? expId, string? company, User user);
        bool Update(User user);
        bool UserExists(string id);
        ICollection<User> GetUsers();
        User GetById(string id);
        public User CheckLogin(string username, string password);
        public User GetByEmail(string email);
        public bool ForgotPassword(User user, string token);
        public bool ResetPassword(User user, byte[] passwordHash, byte[] passwordSalt);
    }
}
