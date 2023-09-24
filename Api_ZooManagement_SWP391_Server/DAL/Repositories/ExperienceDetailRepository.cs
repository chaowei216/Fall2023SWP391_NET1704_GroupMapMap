using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Entities;
using DAL.Interface;

namespace Api_ZooManagement_SWP391.Repositories
{
    public class ExperienceDetailRepository: GenericRepository<ExperienceDetail>
    {
        public ExperienceDetailRepository(DataContext context) : base(context) { }
    }
}
