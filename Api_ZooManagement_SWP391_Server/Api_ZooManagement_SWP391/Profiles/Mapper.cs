using AutoMapper;
using Api_ZooManagement_SWP391.Dtos;
using DAL.Entities;

namespace Api_ZooManagement_SWP391.Profiles
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<Order, OrderDto>();
            CreateMap<Ticket, TicketDto>();
            CreateMap<News, NewsDto>();
        }
    }
}
