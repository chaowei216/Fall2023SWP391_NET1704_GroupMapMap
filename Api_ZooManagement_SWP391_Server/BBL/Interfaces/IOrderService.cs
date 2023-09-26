using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IOrderService
    {
        bool AddOrder(string ticketId, Order order);
        bool UpdateOrder(Order order);
        ICollection<Order> GetAllOrders();
        Order GetOrder(string id);
        bool OrderExists(string id);

    }
}
