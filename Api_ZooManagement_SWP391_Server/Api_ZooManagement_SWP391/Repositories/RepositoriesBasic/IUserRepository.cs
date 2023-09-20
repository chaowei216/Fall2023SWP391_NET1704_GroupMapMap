using Api_ZooManagement_SWP391.Entities;

namespace Api_ZooManagement_SWP391.Repositories.RepositoriesBasic
{
    public interface IUserRepository 
    {
        public ICollection<User> GetAll();
        public User GetByEmail(string email);
        public User GetByPassword(string password);
        public User CheckLogin(string username, string password);

    }
}
