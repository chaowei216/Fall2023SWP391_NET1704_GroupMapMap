using Api_ZooManagement_SWP391.Data;
using Microsoft.EntityFrameworkCore;

namespace DAL.Interface
{
    public interface IGenericRepository<T> where T : class
    {
        void Add(T entity);
        void Update(T entity);
        ICollection<T> GetAll();
        T GetById(string id);
    }
}
