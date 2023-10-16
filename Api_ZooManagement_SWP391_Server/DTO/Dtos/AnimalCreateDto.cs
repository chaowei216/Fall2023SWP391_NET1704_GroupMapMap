using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class AnimalCreateDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Sex { get; set; }
        public string Region { get; set; }
        public string HealthCheck { get; set; }
        public DateTime Birthday { get; set; }
        public string Species { get; set; }
        public bool Rarity { get; set; }
        public DateTime? EntryCageDate { get; set; }
        public DateTime? StartTrainDate { get; set; }
        public List<FoodAmountDto> Foods { get; set; }
    }
}
