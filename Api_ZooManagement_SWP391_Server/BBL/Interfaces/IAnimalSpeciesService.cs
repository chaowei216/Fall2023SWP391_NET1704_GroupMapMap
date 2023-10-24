using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IAnimalSpeciesService
    {
        bool AddAnimalSpecies(AnimalSpecies animalSpecies);
        ICollection<AnimalSpecies> GetAll();
        AnimalSpecies GetBySpeciesId(string id);
        bool SpeciesExists(string id);
        AnimalSpecies GetBySpeciesName(string name);
        /*AnimalSpecies GetByAnimalId(string animalId);*/
    }
}
