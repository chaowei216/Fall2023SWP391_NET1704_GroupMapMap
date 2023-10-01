using DAL.Entities;
using DAL.Repositories;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BBL.Interfaces;

namespace BBL.Services
{
    public class SpeciesAnimalsService : ISpeciesAnimalsService
    {
        private readonly IGenericRepository<SpeciesAnimal> _speciesRepository;
        public SpeciesAnimalsService(IGenericRepository<SpeciesAnimal> speciesRepository)
        {
            _speciesRepository = speciesRepository;
        }
        public bool AddSpeciesAnimals(SpeciesAnimal speciesAnimal)
        {
            return _speciesRepository.Add(speciesAnimal);
        }

        public ICollection<SpeciesAnimal> GetAll()
        {
            return _speciesRepository.GetAll();
        }

        public SpeciesAnimal GetBySpeciesAnimalsId(string id)
        {
            return _speciesRepository.GetById(id);
        }

        public SpeciesAnimal GetBySpeciesAnimalsName(string name)
        {
            var Species = _speciesRepository.GetAll();
            foreach (SpeciesAnimal species in Species)
            {
                if (species.SpeciesName == name)
                {
                    return species;
                }
            }
            return null;
        }

        public bool UpdateSpeciesAnimals(SpeciesAnimal speciesAnimal)
        {
            return _speciesRepository.Update(speciesAnimal);
        }

        public bool SpeciesExists(string id)
        {
            return _speciesRepository.GetById(id) != null ? true : false;
        }
    }
}
