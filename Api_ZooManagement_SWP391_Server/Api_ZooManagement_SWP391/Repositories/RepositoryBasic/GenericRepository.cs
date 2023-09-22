using Api_ZooManagement_SWP391.Data;
using Microsoft.EntityFrameworkCore;

namespace Api_ZooManagement_SWP391.Repositories.BaseRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {

        private readonly DataContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository()
        {
        }
        public GenericRepository(DataContext context)
        {
            this._context = context;
            _dbSet = context.Set<T>();
        }
        public void Add(T entity)
        {
            try
            {
                _dbSet.Add(entity);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T?> GetByIdAsync(Guid id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public void Update(T entity)
        {
            try
            {
                _dbSet.Update(entity);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }


    }
}
