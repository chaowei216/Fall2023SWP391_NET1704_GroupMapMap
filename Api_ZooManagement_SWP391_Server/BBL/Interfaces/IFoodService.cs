using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IFoodService
    {
        bool AddFood(Food food);
        bool UpdateFood(Food food);
        ICollection<Food> GetAllFood();
        Food GetByFoodId(string id);
        Food GetByFoodName(string name);
    }
}
