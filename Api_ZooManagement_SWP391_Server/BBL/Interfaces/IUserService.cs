
using DAL.Entities;


namespace BBL.Interfaces
{
    public interface IUserService
    {
        bool Add(User user);
        bool Update(User user);
        ICollection<User> GetUsers();
        User GetById(string id);
        public User CheckLogin(string username, string password);
        public User GetByEmail(string email);
        public User GetByPassword(string password);
        public bool ForgotPassword(User user, string token);
        public bool ResetPassword(User user, string newPassword, string confirmPassword);
    }
}
