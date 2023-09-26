using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BBL.Interfaces;
using DAL.Entities;
using AutoMapper;
using Api_ZooManagement_SWP391.Dtos;

namespace Api_ZooManagement_SWP391.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;

        public OrderController(IOrderService orderService, IMapper mapper)
        {
            _orderService = orderService;
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
        [ProducesResponseType(200, Type = typeof(Order))]
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
        public IActionResult CreateOrder([FromQuery] string ticketId, [FromBody] OrderDto orderCreate)
        {
            if (orderCreate == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var orderMap = _mapper.Map<Order>(orderCreate);

            if (!_orderService.AddOrder(ticketId, orderMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successful Created");
        }



    }
}
