using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class NewRepository : GenericRepository<News>
    {
        public NewRepository(DataContext context) : base(context) { }
    }
}
