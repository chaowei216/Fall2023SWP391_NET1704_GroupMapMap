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
        private readonly DataContext _context;

        public UserService(DataContext context, IGenericRepository<User> userRepository,
            IGenericRepository<WorkExperience> workExpRepository,
            IGenericRepository<ExperienceDetail> expDetailRepository)
        {
            _userRepository = userRepository;
            _workExpRepository = workExpRepository;
            _expDetailRepository = expDetailRepository;
            _context = context;
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
            return Update(user, null);
        }
    
        public bool Update(User user, User? userMap)
        {
            if(userMap != null)
            {
                user.Firstname = userMap.Firstname;
                user.Lastname = userMap.Lastname;
                user.Address = userMap.Address;
                user.Role = user.Role;
                if(user.Phone != userMap.Phone &&
                    GetUserByPhone(userMap.Phone) == null)
                {
                    user.Phone = userMap.Phone;
                }
                user.EndDate = userMap.EndDate;
                user.Status = userMap.Status;
            }
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

        public User GetUserByPhone(string phone)
        {
            if(phone == null) return null;
            return _userRepository.GetAll().Where(x => x.Phone == phone).FirstOrDefault();
        }

        public bool DeleteUser(string id)
        {
            var user = _userRepository.GetById(id);
            if (user == null) return false;
            
            user.Status = false;
            return _userRepository.Update(user);
        }

        public ICollection<User> GetActiveUsers()
        {
            return _userRepository.GetAll().Where(u => u.Status == true).ToList();
        }

        public ICollection<Animal> GetAnimalsByUserId(string userId)
        {
            var user = _userRepository.GetById(userId);
            if (user == null) return null;

            if(UserRoleExtensions.ToIntValue(user.Role) == 3)
            {
                var animals = _context.AnimalTrainers.Where(u => u.UserId == userId).Select(animal => animal.Animal).ToList();
                if (animals == null || animals.Count() == 0) return null;
                return animals;
            }
            return null;
        }
    }
}
