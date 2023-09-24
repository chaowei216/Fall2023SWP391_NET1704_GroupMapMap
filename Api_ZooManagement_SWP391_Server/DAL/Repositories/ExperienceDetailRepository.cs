using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class ExperienceDetailRepository: GenericRepository<ExperienceDetail>
    {
        public ExperienceDetailRepository(DataContext context) : base(context) { }
    }
}
