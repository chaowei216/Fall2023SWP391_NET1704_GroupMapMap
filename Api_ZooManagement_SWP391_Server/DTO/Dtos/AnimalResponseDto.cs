using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class AnimalResponseDto
    {
        public List<GetAnimalDto> Animals { get; set; } = new List<GetAnimalDto>();
        public int Pages { get; set; }
        public int CurrentPage { get; set; }
    }
}
