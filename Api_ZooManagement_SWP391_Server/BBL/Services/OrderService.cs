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
    public class OrderService : IOrderService
    {
        private readonly IGenericRepository<Order> _orderRepo;

        public OrderService(IGenericRepository<Order> orderRepo)
        {
            _orderRepo = orderRepo;
        }
        public bool AddOrder(Order order)
        {
            if(order != null)
            {
                return _orderRepo.Add(order);
            }
            return false;
        }

        public ICollection<Order> GetAllOrders()
        {
            return _orderRepo.GetAll();
        }

        public Order GetOrder(string id)
        {
            return _orderRepo.GetById(id);
        }

        public bool OrderExists(string id)
        {
            if (_orderRepo.GetById(id) != null) return true;
            return false;
        }

        public bool UpdateOrder(Order order)
        {
            if(order != null)
            {
                return _orderRepo.Update(order);
            }
            return false;

        }
    }
}
