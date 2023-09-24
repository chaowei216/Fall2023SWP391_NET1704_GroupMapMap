using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class GuestRepository : GenericRepository<Guest>
    {
        public GuestRepository(DataContext context) : base(context) { }
    }
}
