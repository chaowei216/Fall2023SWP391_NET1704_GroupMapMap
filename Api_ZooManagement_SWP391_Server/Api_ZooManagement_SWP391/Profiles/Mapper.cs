
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
            CreateMap<Animal, AnimalDto>();
            CreateMap<AnimalDto, Animal>();
            CreateMap<User, UserDto>();
            CreateMap<UserCreateDto, User>();
            CreateMap<Area, AreaDto>();
            CreateMap<AreaDto, Area>();
            CreateMap<Cage, CageDto>();
            CreateMap<CageDto, Cage>();
            CreateMap<FoodDto, Food>();
            CreateMap<FoodUpdateDto, Food>();
            CreateMap<AnimalCage, AnimalCageDto>();
            CreateMap<AnimalCageDto, AnimalCage>();
            CreateMap<AnimalSchedule, AnimalScheduleDto>();
            CreateMap<AnimalScheduleDto, AnimalSchedule>();
            CreateMap<AnimalFoodDto, AnimalFood>();
            CreateMap<AnimalFood, AnimalFoodDto>();
            CreateMap<AnimalTrainer, AnimalTrainerDto>();
            CreateMap<AnimalTrainerDto, AnimalTrainer>();
            CreateMap<UpdateAnimalDto, Animal>().ReverseMap();
            CreateMap<OrderDto, Order>();
            CreateMap<OrderCreateDto, Order>();
            CreateMap<TicketDto, Ticket>();
            CreateMap<Ticket, TicketShowDto>();
        }

    }
}
