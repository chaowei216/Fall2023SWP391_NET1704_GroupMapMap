using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface INewsCategoryService
    {
        bool AddNewsCategory(NewsCategory news);
        bool UpdateNewsCategory(NewsCategory news);
        NewsCategory GetNewsCategory(string id);
        ICollection<NewsCategory> GetAllNewsCategory();
        bool NewsCategoryExists(string id);
    }
}
