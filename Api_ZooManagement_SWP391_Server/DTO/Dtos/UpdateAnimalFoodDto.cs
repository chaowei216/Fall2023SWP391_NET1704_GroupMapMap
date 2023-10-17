using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class UpdateAnimalFoodDto
    {
        public string id { get; set; }
        public string description { get; set; }
        public float quantity { get; set; }
    }
}
