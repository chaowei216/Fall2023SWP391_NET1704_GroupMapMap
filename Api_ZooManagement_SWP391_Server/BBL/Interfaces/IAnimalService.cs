using DAL.Entities;
using DTO.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IAnimalService
    {
        bool AddAnimal(string? userId, string? cageId, List<AnimalFood> animalFood, Animal animal);
        bool UpdateAnimal(Animal animal, Animal? animalMap);
        bool AddAnimalTrainer(string userId, string animalId, AnimalTrainer animalTrainer);
        bool AddAnimalCage(string cageId, string animalId, AnimalCage animalCage);
        ICollection<GetAnimalDto>? GetAll();
        Animal? GetByAnimalId(string id);
        GetAnimalDto? GetById(string id);
        bool AnimalExists(string id);
        bool DeleteAnimal(string id);
        ICollection<User> GetTrainersCanTrain();
        ICollection<User>? GetOldTrainersOfAnimal(string animalId);
        ICollection<Cage>? GetOldCagesOfAnimal(string animalId);
        ICollection<Cage> GetCageByAnimalId(string animalId);
        ICollection<AnimalCage> GetAnimalCages();
        ICollection<AnimalTrainer> GetAnimalTrainers();
        ICollection<Animal> GetAnimalByTrainerId(string trainerId);
    }
}
