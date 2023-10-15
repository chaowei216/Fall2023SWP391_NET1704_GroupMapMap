﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class GetAnimalDto
    {
        public string AnimalId { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool Sex { get; set; }
        public string Region { get; set; } = string.Empty;
        public string HealthCheck { get; set; } = string.Empty;
        public DateTime Birthday { get; set; }
        public string Species { get; set; } = string.Empty;
        public bool Rarity { get; set; }
        public string? CId { get; set; }
        public string? UserId { get; set; }
        public DateTime? EntryCageDate { get; set; }
        public DateTime? StartTrainDate { get; set; }
        public string? AnimalImage { get; set; }
        public List<FoodAmountDto>? Foods { get; set; }
    }
}
