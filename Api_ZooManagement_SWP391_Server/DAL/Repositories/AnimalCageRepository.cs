using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AnimalCageRepository : GenericRepository<AnimalCage>
    {
        public AnimalCageRepository(DataContext context) : base(context) { }
    }
}
