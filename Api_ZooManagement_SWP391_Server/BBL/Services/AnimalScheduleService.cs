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
    public class AnimalScheduleService : IAnimalScheduleService
    {
        private readonly IGenericRepository<AnimalSchedule> _animalScheduleRepo;
        private readonly IGenericRepository<Animal> _animalRepo;
        private readonly IGenericRepository<Schedule> _scheduleRepo;

        public AnimalScheduleService(IGenericRepository<Animal> animalRepo, IGenericRepository<AnimalSchedule> animalScheduleRepo, IGenericRepository<Schedule> scheduleRepo)
        {
            _animalRepo = animalRepo;
            _animalScheduleRepo = animalScheduleRepo;
            _scheduleRepo = scheduleRepo;
        }
        public bool AddAnimalSchedule(string animalId, List<AnimalSchedule> schedules)
        {

            return true;
        }
    }
}
