using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AnimalCageRepository : GenericRepository<AnimalCage>
    {
        public AnimalCageRepository(DataContext context) : base(context) { }
    }
}
