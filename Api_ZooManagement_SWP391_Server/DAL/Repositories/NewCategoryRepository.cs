using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class NewCategoryRepository : GenericRepository<NewsCategory>
    {
        public NewCategoryRepository(DataContext context) : base(context) { }
    }
}
