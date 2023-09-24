using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AnimalScheduleRepository: GenericRepository<AnimalSchedule>
    {
        public AnimalScheduleRepository(DataContext context) : base(context) { }
    }
}
