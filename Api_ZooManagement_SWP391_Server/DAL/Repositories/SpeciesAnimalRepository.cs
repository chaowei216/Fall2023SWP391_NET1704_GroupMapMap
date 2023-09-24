using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class SpeciesAnimalRepository: GenericRepository<SpeciesAnimal>
    {
        public SpeciesAnimalRepository(DataContext context) : base(context) { } 
    }
}
