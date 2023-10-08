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
    public class NewCategoryService : INewsCategoryService
    {
        private readonly IGenericRepository<NewsCategory> _newCategoryRepository;

        public NewCategoryService(IGenericRepository<NewsCategory> newCategoryRepository)
        {
            _newCategoryRepository = newCategoryRepository;
        }

        public bool AddNewsCategory(NewsCategory news)
        {
            throw new NotImplementedException();
        }

        public ICollection<NewsCategory> GetAllNewsCategory()
        {
            return _newCategoryRepository.GetAll();
        }

        public NewsCategory GetNewsCategory(string id)
        {
            return _newCategoryRepository.GetById(id);
        }

        public bool NewsCategoryExists(string id)
        {
            return _newCategoryRepository.GetById(id)!= null ? true : false;
        }

        public bool UpdateNewsCategory(NewsCategory news)
        {
            throw new NotImplementedException();
        }
    }
}
