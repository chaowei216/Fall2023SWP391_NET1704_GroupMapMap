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
        bool UpdateAnimal(string? userId, string? cageId, Animal animal);
        ICollection<Animal> GetAll();
        Animal GetByAnimalId(string id);
        bool AnimalExists(string id);
    }
}
