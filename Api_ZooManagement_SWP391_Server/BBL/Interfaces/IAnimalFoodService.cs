using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IAnimalFoodService
    {
        bool AddAnimalFood(List<AnimalFood> animalFood, string animalId);
    }
}
