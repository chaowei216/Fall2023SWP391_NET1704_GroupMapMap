using DAL.Entities;

namespace BBL.Services
{
    public interface IUserService
    {
        public User CheckLogin(string username, string password);
        public User GetByEmail(string email);
        public User GetByPassword(string password);
        public bool ForgotPassword(User user, string token);
        public bool ResetPassword();
        public bool VerifyEmail(string token);
    }
}
