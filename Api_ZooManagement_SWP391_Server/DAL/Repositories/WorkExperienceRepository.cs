using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class WorkExperienceRepository: GenericRepository<WorkExperience>
    {
        public WorkExperienceRepository(DataContext context) : base(context) { }
        
    }
}
