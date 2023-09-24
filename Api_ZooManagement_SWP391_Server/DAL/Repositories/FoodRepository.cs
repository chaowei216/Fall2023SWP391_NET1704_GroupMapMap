using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class FoodRepository : GenericRepository<Food>
    {
        public FoodRepository(DataContext context) : base(context) { }
    }
}
