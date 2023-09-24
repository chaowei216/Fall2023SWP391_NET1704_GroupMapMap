using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AnimalFoodRepository: GenericRepository<AnimalFood>
    {
        public AnimalFoodRepository(DataContext context) : base(context) { }
    }
}
