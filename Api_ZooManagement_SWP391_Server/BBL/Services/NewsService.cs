using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Services
{
    public class NewsService : INewsService
    {
        private readonly IGenericRepository<News> _newsRepo;

        public NewsService(IGenericRepository<News> newsRepo)
        {
            _newsRepo = newsRepo;
        }
        public bool AddNews(News news)
        {
            if(news != null)
            {
                return _newsRepo.Add(news);
            }
            return false;
        }

        public ICollection<News> GetAllNews()
        {
            return _newsRepo.GetAll();
        }

        public News GetNews(string id)
        {
            return _newsRepo.GetById(id);
        }

        public bool NewsExists(string id)
        {
            var news = _newsRepo.GetById(id);
            if(news != null) 
                return true;
            return false;
        }

        public bool UpdateNews(News news)
        {
            if(news != null)
            {
                return _newsRepo.Update(news);
            }
            return false;
        }
    }
}
