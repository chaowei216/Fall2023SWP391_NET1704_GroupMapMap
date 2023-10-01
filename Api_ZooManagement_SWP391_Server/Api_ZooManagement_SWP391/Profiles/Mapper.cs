
﻿using AutoMapper;
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
            CreateMap<Animal, AnimalDto>();
            CreateMap<User, UserDto>();
            CreateMap<Area,AreaDto>();
            CreateMap<AreaDto, Area>();
            CreateMap<Cage, CageDto>();
            CreateMap<CageDto, Cage>();
        }

    }
}
