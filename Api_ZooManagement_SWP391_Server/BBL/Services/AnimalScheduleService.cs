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
        public bool AddAnimalSchedule(Animal animal, Animal? animalMap)
        {
            if (animalMap != null)
            {
                animal.AnimalSchedules = animalMap.AnimalSchedules;
            }
            return _animalRepo.Update(animal);
        }

        public bool AnimalScheduleExisted(string animalId, string scheduleId)
        {
            return _animalScheduleRepo.GetAll().Where(schedule => schedule.AnimalId == animalId && schedule.ScheduleId == scheduleId) != null ? true : false;
        }

        public ICollection<AnimalSchedule> GetAll()
        {
            return _animalScheduleRepo.GetAll();
        }

        public ICollection<AnimalSchedule> GetScheduleByAnimalId(string animalId)
        {
            return _animalScheduleRepo.GetAll().Where(schedule => schedule.AnimalId == animalId).ToList();
        }
    }
}
