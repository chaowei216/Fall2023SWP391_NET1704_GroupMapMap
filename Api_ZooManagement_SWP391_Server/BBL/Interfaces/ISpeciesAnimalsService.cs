using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface ISpeciesAnimalsService
    {
        bool AddSpeciesAnimals(SpeciesAnimal speciesAnimal);
        bool UpdateSpeciesAnimals(SpeciesAnimal speciesAnimal);
        ICollection<SpeciesAnimal> GetAll();
        SpeciesAnimal GetBySpeciesAnimalsId(string id);
        SpeciesAnimal GetBySpeciesAnimalsName(string name);
    }
}
