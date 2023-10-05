
using DAL.Entities;

namespace BBL.Interfaces
{
    public interface IUserService
    {
        bool Add(string? expId, string? company, User user);
        bool Update(User user, User? userMap);
        bool UserExists(string id);
        bool DeleteUser(string id);
        ICollection<User> GetUsers();
        ICollection<User> GetActiveUsers();
        ICollection<Animal> GetAnimalsByUserId(string userId);
        User GetById(string id);
        int GetTotalUserByRole(Role role);
        User GetUserByPhone(string phone);
        public User CheckLogin(string username, string password);
        public User GetByEmail(string email);
        public bool ForgotPassword(User user, string token);
        public bool ResetPassword(User user, byte[] passwordHash, byte[] passwordSalt);
    }
}
