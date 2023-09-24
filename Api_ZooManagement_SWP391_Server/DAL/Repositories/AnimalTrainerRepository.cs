using DAL.Data;
using DAL.Entities;
using DAL.Interface;

namespace DAL.Repositories
{
    public class AnimalTrainerRepository: GenericRepository<AnimalTrainer>
    {
        public AnimalTrainerRepository(DataContext context) : base(context) { }
    }
}
