using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class ScheduleRepository: GenericRepository<Schedule>
    {
        public ScheduleRepository(DataContext context) : base(context) { }
    }
}
