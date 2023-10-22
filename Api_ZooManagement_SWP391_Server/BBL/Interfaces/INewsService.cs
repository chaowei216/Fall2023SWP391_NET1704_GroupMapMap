using DAL.Entities;
using DTO.Dtos;

namespace BBL.Interfaces
{
    public interface INewsService
    {
        bool AddNews(News news);
        bool UpdateNews(News newsmap);
        bool DeleteNews(string newsId);
        News GetNews(string id);
        ICollection<News> GetAllNews();
        bool NewsExists(string id);
    }
}
