using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class ReviewRepository : GenericRepository<Review>
    {
        public ReviewRepository(DataContext context) : base(context) { }
    }
}
