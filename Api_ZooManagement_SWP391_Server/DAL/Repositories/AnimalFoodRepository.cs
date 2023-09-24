using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Entities;
using DAL.Interface;

namespace Api_ZooManagement_SWP391.Repositories
{
    public class AnimalFoodRepository: GenericRepository<AnimalFood>
    {
        public AnimalFoodRepository(DataContext context) : base(context) { }
    }
}
