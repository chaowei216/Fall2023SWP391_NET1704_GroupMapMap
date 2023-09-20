using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Entities;
using Api_ZooManagement_SWP391.Repositories.RepositoriesBasic;

namespace Api_ZooManagement_SWP391.Repositories
{

    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context) {
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

        public ICollection<User> GetAll()
        {
            return _context.Users.ToList();
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
    }
}
