using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AreaRepository : GenericRepository<Area>
    {
        public AreaRepository(DataContext context) : base(context) { }
    }
}
