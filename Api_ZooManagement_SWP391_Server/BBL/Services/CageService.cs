using DAL.Entities;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BBL.Interfaces;

namespace BBL.Services
{
    public class CageService : ICageService
    {
        private readonly IGenericRepository<Cage> _cageRepository;
        public CageService(IGenericRepository<Cage> cageRepositiry)
        {
            _cageRepository = cageRepositiry;
        }
        public bool AddCage(Cage cage)
        {
            return _cageRepository.Add(cage);
        }

        public ICollection<Cage> GetAll()
        {
            return _cageRepository.GetAll();
        }

        public Cage GetByCageId(string id)
        {
            return _cageRepository.GetById(id);
        }

        public bool UpdateCage(Cage cage)
        {
            return _cageRepository.Update(cage);
        }
    }
}
