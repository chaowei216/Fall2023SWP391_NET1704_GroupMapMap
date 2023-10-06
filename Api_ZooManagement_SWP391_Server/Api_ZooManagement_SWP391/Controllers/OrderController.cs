using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BBL.Interfaces;
using DAL.Entities;
using AutoMapper;
using DTO.Dtos;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly ITicketService _ticketService;
        private readonly IMapper _mapper;

        public OrderController(IOrderService orderService, IMapper mapper,
            ITicketService ticketService)
        {
            _orderService = orderService;
            _ticketService = ticketService;
            _mapper = mapper;
        }

        [HttpGet()]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Order>))]
        public IActionResult GetAllOrder()
        {
            var orders = _mapper.Map<List<OrderDto>>(_orderService.GetAllOrders());
            if (!ModelState.IsValid) return BadRequest();
            return Ok(orders);
        }

        [HttpGet("{orderId}")]
        [ProducesResponseType(200, Type = typeof(OrderDto))]
        [ProducesResponseType(400)]
        public IActionResult GetOrder(string orderId)
        {
            if(!_orderService.OrderExists(orderId)) return NotFound();

            var order = _mapper.Map<OrderDto>(_orderService.GetOrder(orderId));

            if(!ModelState.IsValid) return BadRequest();

            return Ok(order);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateOrder([FromBody] OrderCreateDto orderCreate)
        {
            if (orderCreate == null)
                return BadRequest();

            var orderMap = _mapper.Map<Order>(orderCreate);
            int count = _orderService.GetAllOrders().Count() + 1;
            orderMap.OrderId = "O" + count.ToString().PadLeft(4, '0');


            var TicketQuantities = orderCreate.Tickets;
            List<OrderTicket> orderTickets = new List<OrderTicket>();
            if (TicketQuantities == null || TicketQuantities.Count() == 0)
            {
                return BadRequest("No ticket");
            }
            foreach (var ticketQuantity in TicketQuantities)
            {
                var ticket = _ticketService.GetTicketByType(ticketQuantity.Type);

                if (ticket == null) return BadRequest("Ticket Not Found");
                
                if(ticketQuantity.Amount == 0) continue;
                orderTickets.Add(new OrderTicket()
                {
                       Order = orderMap,
                       Ticket = ticket,
                       TicketQuantity = ticketQuantity.Amount
                 });
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_orderService.AddOrder(orderTickets, orderMap))
                {
                    ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successful Created");
        }


    }
}
