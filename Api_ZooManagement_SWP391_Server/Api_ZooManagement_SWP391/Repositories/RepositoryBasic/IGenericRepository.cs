using Api_ZooManagement_SWP391.Data;
using Microsoft.EntityFrameworkCore;

namespace Api_ZooManagement_SWP391.Repositories.BaseRepository
{
    public interface IGenericRepository<T> where T : class
    {
        void Add(T entity);
        void Update(T entity);
    }
}
