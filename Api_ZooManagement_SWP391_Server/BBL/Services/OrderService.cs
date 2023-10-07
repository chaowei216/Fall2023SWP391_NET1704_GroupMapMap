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
        private readonly IGenericRepository<OrderTicket> _ordTicketRepo;

        public OrderService(IGenericRepository<Order> orderRepo, IGenericRepository<Ticket> ticketRepo,
            IGenericRepository<OrderTicket> ordTicketRepo)
        {
            _orderRepo = orderRepo;
            _ordTicketRepo = ordTicketRepo;
        }
        public bool AddOrder(Order order)
        {
            if(order != null)
            {
                return _orderRepo.Add(order);
            }
            return false;
        }

        public bool AddOrder(List<OrderTicket> ordTickets, Order order)
        {
            if (ordTickets == null || ordTickets.Count == 0) return false;
            double totalPrice = ordTickets.Sum(u => u.Ticket.Price * u.TicketQuantity);
            if (!totalPrice.Equals(order.TotalPrice)) return false;
            foreach(OrderTicket ticket in ordTickets)
            {
                _ordTicketRepo.Add(ticket);
            }
            return true;
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

    }
}
