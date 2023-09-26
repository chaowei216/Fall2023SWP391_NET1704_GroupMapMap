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
    public class AreaService : IAreaService
    {
        private readonly IGenericRepository<Area> _areaRepository;
        public AreaService(IGenericRepository<Area> areaRepository)
        {
            _areaRepository = areaRepository;
        }

        public bool AddArea(Area area)
        {
            return _areaRepository.Add(area);
        }

        public ICollection<Area> GetAll()
        {
            return _areaRepository.GetAll();
        }

        public Area GetByAreaId(string id)
        {
            return _areaRepository.GetById(id);
        }

        public Area GetByAreaName(string name)
        {
            var Areas = _areaRepository.GetAll();
            foreach (Area area in Areas)
            {
                if (area.AreaName == name)
                {
                    return area;
                }
            }
            return null;
        }

        public bool UpdateArea(Area area)
        {
            return _areaRepository.Update(area);
        }
    }
}
