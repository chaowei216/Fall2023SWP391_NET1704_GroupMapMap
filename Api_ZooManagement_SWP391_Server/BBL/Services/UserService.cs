using BBL.Interfaces;
using DAL.Data;
using DAL.Entities;
using DAL.Repositories;
using System.Security.Cryptography;

namespace BBL.Services
{

    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IGenericRepository<WorkExperience> _workExpRepository;
        private readonly IGenericRepository<ExperienceDetail> _expDetailRepository;

        public UserService(DataContext context, IGenericRepository<User> userRepository,
            IGenericRepository<WorkExperience> workExpRepository,
            IGenericRepository<ExperienceDetail> expDetailRepository)
        {
            _userRepository = userRepository;
            _workExpRepository = workExpRepository;
            _expDetailRepository = expDetailRepository;
        }

        public bool Add(string? expId, string? company, User user)
        {
            if(_userRepository.Add(user))
            {
                if (expId != null && company != null)
                {
                    var workExp = _workExpRepository.GetById(expId);
                    if (workExp == null) return false;
                    var expDetail = new ExperienceDetail()
                    {
                        User = user,
                        WorkExperience = workExp,
                        Company = company,
                    };
                    _expDetailRepository.Add(expDetail);
                }
                return true;
            }
            return false;
        }

        public bool UserExists(string id)
        {
            return _userRepository.GetById(id) != null ? true : false;
        }

        public User CheckLogin(string username, string password)
        {
            var user = GetByEmail(username);
            if(user == null) return null;
            if(VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return user;
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

        public ICollection<User> GetUsers()
        {
            return _userRepository.GetAll();
        }

        public bool ResetPassword(User user, byte[] passwordHash, byte[] passwordSalt)
        {
            if (user == null) return false;

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.ResetPassToken = null;
            user.ResetTokenExpires = null;
            return Update(user);
        }
    
        public bool Update(User user)
        {
            return _userRepository.Update(user);
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac
                    .ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        public int GetTotalUserByRole(Role role)
        {
            return _userRepository.GetAll().Where(x => x.Role == role).Count();
        }
    }
}
