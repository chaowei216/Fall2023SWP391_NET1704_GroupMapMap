using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AnimalRepository : GenericRepository<Animal>
    {
        public AnimalRepository(DataContext context) : base(context) { }
    }
}
