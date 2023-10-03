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
        bool AddAnimal(string? userId, AnimalTrainer? animalTrainer, string? cageId, AnimalCage? animalCage, string? foodId, AnimalFood? animalFood, Animal animal);
        bool UpdateAnimal(string animalId, string userId, string cageId, string foodId, Animal animal);
        ICollection<Animal> GetAll();
        Animal GetByAnimalId(string id);
        bool AnimalExists(string id);
    }
}
