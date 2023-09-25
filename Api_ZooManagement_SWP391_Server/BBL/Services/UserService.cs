using DAL.Entities;
using DAL.Repositories;

namespace BBL.Services
{

    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _userRepository;

        public UserService(IGenericRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }
        public User CheckLogin(string username, string password)
        {
            var users = _userRepository.GetAll();
            foreach (User u in users)
            {
                if (u.Email.Equals(username) && u.Password.Equals(password))
                {
                    return u;
                }
            }
            return null;
        }

        public bool ForgotPassword(User user, string token)
        {
            if (user == null)
                return false;
            if (token != null)
            {
                user.ResetPassToken = token;
                return _userRepository.Update(user);
            }
            return false;
        }

        public User GetByEmail(string email)
        {
            var users = _userRepository.GetAll();
            if (email == null)
            {
                return null;
            }
            return users.FirstOrDefault(u => u.Email.Equals(email));
        }

        public User GetByPassword(string password)
        {
            var users = _userRepository.GetAll();
            if (password == null || users == null)
            {
                return null;
            }
            return users.FirstOrDefault(p => p.Password.Equals(password));
        }

        public bool ResetPassword()
        {
            throw new NotImplementedException();
        }

        public bool VerifyEmail(string token)
        {
            var users = _userRepository.GetAll();
            if(users != null)
            {
                var user = users.FirstOrDefault(u => u.VerificationToken == token);
                if (user != null)
                {
                    user.VerifyAt = DateTime.Now;
                    return _userRepository.Update(user);
                }
            }
            return false;
        }
    }
}
