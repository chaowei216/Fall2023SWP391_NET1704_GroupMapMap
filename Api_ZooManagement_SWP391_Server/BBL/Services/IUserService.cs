using DAL.Entities;

namespace BBL.Services
{
    public interface IUserService
    {
        public ICollection<User> GetUsers();
        public User CheckLogin(string username, string password);
        public User GetByEmail(string email);
        public User GetByPassword(string password);
    }
}
