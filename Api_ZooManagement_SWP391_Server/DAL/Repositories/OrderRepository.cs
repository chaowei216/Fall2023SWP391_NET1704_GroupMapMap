using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class OrderRepository : GenericRepository<Order>
    {
        public OrderRepository(DataContext context) : base(context) { }
    }
}
