using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class CageRepository : GenericRepository<Cage>
    {
        public CageRepository(DataContext context) : base(context) { }
    }
}
