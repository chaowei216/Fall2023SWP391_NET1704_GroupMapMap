using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Entities;
using DAL.Interface;

namespace Api_ZooManagement_SWP391.Repositories
{
    public class UserRepository: GenericRepository<User> 
    {
        public UserRepository(DataContext   context) : base(context) { }
    }
}
