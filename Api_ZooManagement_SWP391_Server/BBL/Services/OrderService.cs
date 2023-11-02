using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
using MailKit.Security;
using MimeKit.Text;
using MimeKit;
using Microsoft.Extensions.Configuration;
using DTO.Dtos;

namespace BBL.Services
{
    public class OrderService : IOrderService
    {
        private readonly IGenericRepository<Order> _orderRepo;
        private readonly IGenericRepository<OrderTicket> _ordTicketRepo;
        private readonly IGenericRepository<Transaction> _transRepo;
        private readonly IConfiguration _config;

        public OrderService(IGenericRepository<Order> orderRepo,
                            IGenericRepository<Ticket> ticketRepo,
                            IGenericRepository<OrderTicket> ordTicketRepo,
                            IGenericRepository<Transaction> transRepo,
                            IConfiguration config)
        {
            _orderRepo = orderRepo;
            _ordTicketRepo = ordTicketRepo;
            _transRepo = transRepo;
            _config = config;
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
            var trans = order.Transaction;
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("mapmapzoofpt@gmail.com"));
            email.To.Add(MailboxAddress.Parse(order.Email));
            email.Subject = "Reset Password";
            email.Body = new TextPart(TextFormat.Text) { Text = "This is your order details:\n" + order.OrderId  +"\n"
                                                                                                + order.Email + "\n"
                                                                                                + order.FullName + "\n"
                                                                                                + order.TotalPrice + "\n"
                                                                                                + trans.TransactionInfo.ToString() + "\n"
                                                                                                + trans.TransactionDate.ToString() + "\n"
                                                                                                + "\n\nMapMap Zoo thank you for join with us!!!" };

            using var smtp = new MailKit.Net.Smtp.SmtpClient();
            smtp.Connect(_config.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(_config.GetSection("EmailUser").Value, _config.GetSection("EmailPassword").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
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

        public ICollection<StatisticDto> GetStatistics()
        {
            List<StatisticDto> staList = new List<StatisticDto>();
            for (int i = 1; i <= 12; i++)
            {
                staList.Add(new StatisticDto()
                {
                    Month = i,
                    TotalPrice = 0,
                    TotalTicket = 0
                });
            }
            var ordDetails = _ordTicketRepo.GetAll();
            foreach(var ord in ordDetails)
            {
                int month = ord.StartDate.Month;
                var order = _orderRepo.GetById(ord.OrderId);
                staList[month - 1].TotalPrice += order.TotalPrice;
                staList[month - 1].TotalTicket += ord.TicketQuantity;
            }
            return staList.ToList();
        }

        public bool OrderExists(string id)
        {
            if (_orderRepo.GetById(id) != null) return true;
            return false;
        }

    }
}
