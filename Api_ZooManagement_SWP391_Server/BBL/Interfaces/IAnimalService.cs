using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IAnimalService
    {
        bool AddAnimal(string? userId, string? cageId, Animal animal);
        bool UpdateAnimal(Animal animal, Animal? animalMap);
        bool AddAnimalTrainer(string userId, string animalId, AnimalTrainer animalTrainer);
        bool AddAnimalCage(string cageId, string animalId, AnimalCage animalCage);
        ICollection<Animal> GetAll();
        Animal GetByAnimalId(string id);
        bool AnimalExists(string id);
        bool DeleteAnimal(string id);
        ICollection<AnimalTrainer> GetTrainerByAnimalId(string animalId);
        ICollection<AnimalCage> GetCageByAnimalId(string animalId);
        ICollection<AnimalCage> GetAnimalCages();
        ICollection<AnimalTrainer> GetAnimalTrainers();
    }
}
