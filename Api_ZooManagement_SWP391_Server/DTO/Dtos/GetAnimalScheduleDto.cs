using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class GetAnimalScheduleDto
    {
        public string AnimalId { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool Sex { get; set; }
        public string Region { get; set; } = string.Empty;
        public string HealthCheck { get; set; } = string.Empty;
        public DateTime Birthday { get; set; }
        public bool Rarity { get; set; }
        public string? AnimalImage { get; set; }
        public List<AnimalScheduleCreateDto> Schedules { get; set; }
    }
}
