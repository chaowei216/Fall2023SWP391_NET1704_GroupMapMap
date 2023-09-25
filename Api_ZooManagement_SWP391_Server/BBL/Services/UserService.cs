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

        public bool Add(User user)
        {
            return _userRepository.Add(user);
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
                user.ResetTokenExpires = DateTime.Now.AddHours(1);
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

        public User GetById(string id)
        {
            return _userRepository.GetById(id);
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

        public ICollection<User> GetUsers()
        {
            return _userRepository.GetAll();
        }

        public bool ResetPassword(User user, string newPassword, string confirmPassword)
        {
            if (user == null) return false;
            if (newPassword == null || confirmPassword == null) return false;
            if(!newPassword.Equals(confirmPassword)) return false;
            user.Password = newPassword;
            user.ResetPassToken = null;
            user.ResetTokenExpires = null;
            return Update(user);
        }

        public bool Update(User user)
        {
            return _userRepository.Update(user);
        }
    }
}
