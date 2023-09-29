using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Services
{
    public class ScheduleService : IScheduleService
    {
        private readonly IGenericRepository<Schedule> _scheduleRepository;

        public ScheduleService(IGenericRepository<Schedule> scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }

        public bool AddSchedule(Schedule schedule)
        {
            return _scheduleRepository.Add(schedule);
        }

        public ICollection<Schedule> GetAllSchedule()
        {
            return _scheduleRepository.GetAll();
        }

        public Schedule GetSchedule(string id)
        {
            return _scheduleRepository.GetById(id);
        }

        public bool UpdateSchedule(Schedule schedule)
        {
            return _scheduleRepository.Update(schedule);
        }
    }
}
