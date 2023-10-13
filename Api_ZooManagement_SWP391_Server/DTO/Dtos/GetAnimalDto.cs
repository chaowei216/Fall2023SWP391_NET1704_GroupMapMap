using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class GetAnimalDto
    {
        public string AnimalId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Sex { get; set; }
        public string Region { get; set; }
        public string HealthCheck { get; set; }
        public DateTime Birthday { get; set; }

        public string Species { get; set; }
        public bool Rarity { get; set; }
        /* public ICollection<AnimalCageDto> AnimalCages { get; set; }
         public ICollection<GetTrainersDto> AnimalTrainers { get; set; }*/
        public string CId { get; set; }
        public string UserId { get; set; }
        public DateTime EntryCageDate { get; set; }
        public DateTime StartTrainDate { get; set; }
        public string AnimalImage { get; set; }
    }
}
