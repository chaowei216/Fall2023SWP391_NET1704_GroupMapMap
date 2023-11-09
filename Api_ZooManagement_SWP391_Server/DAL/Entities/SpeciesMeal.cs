using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class SpeciesMeal
    {
        public string SpeciesId { get; set; }
        public string MealId { get; set; }
        public DateTime StartEat { get; set; }
        public DateTime EndEat { get; set; }

        public AnimalSpecies AnimalSpecies { get; set; }
        public Meal Meal { get; set; }
    }
}
