using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface INewsService
    {
        bool AddNews(News news);
        bool UpdateNews(News news);
        News GetNews(string id);
        ICollection<News> GetAllNews();
        bool NewsExists(string id);
    }
}
