using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class UpdateAnimalFoodDto
    {
        public string FoodId { get; set; }
        public string Description { get; set; }
        public float Amount { get; set; }
    }
}
