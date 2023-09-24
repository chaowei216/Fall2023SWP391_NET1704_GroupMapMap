using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class FoodCategoryRepository : GenericRepository<FoodCategory>
    {
        public FoodCategoryRepository(DataContext context) : base(context) { }
    }
}
