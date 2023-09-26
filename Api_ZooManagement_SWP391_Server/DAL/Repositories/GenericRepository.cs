﻿using DAL.Data;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {

        protected readonly DataContext _context;
        protected readonly DbSet<T> _dbSet;

        public GenericRepository(DataContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }
        public bool Add(T entity)
        {
            try
            {
                _dbSet.Add(entity);
                return _context.SaveChanges() > 0 ? true : false;
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }

        public ICollection<T> GetAll()
        {
            return _dbSet.ToList();
        }

        public T GetById(string id)
        {
            return _dbSet.Find(id);
        }

        public bool Update(T entity)
        {
            try
            {
                _dbSet.Update(entity);
                return _context.SaveChanges() > 0 ? true : false;
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }
    }
}