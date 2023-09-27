﻿using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Entities;
using Api_ZooManagement_SWP391.Repositories.BaseRepository;

namespace Api_ZooManagement_SWP391.Repositories
{
    public class AnimalScheduleRepository: GenericRepository<AnimalSchedule>
    {
        public AnimalScheduleRepository(DataContext context) : base(context) { }
    }
}