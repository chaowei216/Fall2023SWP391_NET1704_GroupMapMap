using DAL.Data;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace BBL.Services
{

    public class UserService : IUserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }
        public User CheckLogin(string username, string password)
        {
            List<User> users = _context.Users.ToList();
            foreach (User u in users)
            {
                if (u.Email.Equals(username) && u.Password.Equals(password))
                {
                    return u;
                }
            }
            return null;
        }

        public User GetByEmail(string email)
        {
            if (email == null)
            {
                return null;
            }
            return _context.Users.Where(u => u.Email.Equals(email)).FirstOrDefault();
        }

        public User GetByPassword(string password)
        {
            if (password == null)
            {
                return null;
            }
            return _context.Users.Where(p => p.Password.Equals(password)).FirstOrDefault();
        }

        public ICollection<User> GetUsers()
        {
            return _context.Users.ToList();
        }
    }
}
