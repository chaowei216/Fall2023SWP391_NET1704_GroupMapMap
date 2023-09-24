using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class UserRepository: GenericRepository<User> 
    {
        public UserRepository(DataContext   context) : base(context) { }
    }
}
