﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class AnimalScheduleCreateDto
    {
        public string ScheduleId { get; set; }
        public DateTime Time { get; set; }
        public string Description { get; set; }
    }
}
