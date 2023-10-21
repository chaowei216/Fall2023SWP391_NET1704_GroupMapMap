﻿using BBL.Interfaces;
using DAL.Data;
using DAL.Entities;
using DAL.Repositories;


namespace BBL.Services
{
    public class NewsService : INewsService
    {
        private readonly IGenericRepository<News> _newsRepo;
        private readonly DataContext _context;

        public NewsService(IGenericRepository<News> newsRepo, DataContext context)
        {
            _newsRepo = newsRepo;
            _context = context;
        }
        public bool AddNews(News news)
        {
            return _newsRepo.Add(news);
        }

        public bool DeleteNews(string newsId)
        {
            var news = _newsRepo.GetById(newsId);
            if (news == null) return false;
            _context.Remove(news);
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
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
            if (news != null)
                return true;
            return false;
        }

        public bool UpdateNews(News newsMap)
        {
            var review = _newsRepo.GetById(newsMap.NewsId);
            if (review == null) return false;
            review.NewsTitle = newsMap.NewsTitle;
            review.AuthorName = newsMap.AuthorName;
            review.ReleaseDate = newsMap.ReleaseDate;
            review.NewsContent = newsMap.NewsContent;
            return _newsRepo.Update(review);
        }
    }
}
