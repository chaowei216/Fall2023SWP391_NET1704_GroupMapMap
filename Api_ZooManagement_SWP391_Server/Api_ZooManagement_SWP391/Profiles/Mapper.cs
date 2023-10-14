
using AutoMapper;
using DTO.Dtos;
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
            CreateMap<OrderDto, Order>();
            CreateMap<OrderCreateDto, Order>();
            CreateMap<TicketDto, Ticket>();
            CreateMap<Ticket, TicketShowDto>();
            CreateMap<UpdateAnimalDto, Animal>();
            CreateMap<Animal, UpdateAnimalDto>();
            CreateMap<AnimalTrainer, AnimalDto>();
            CreateMap<AnimalDto, AnimalTrainer>();
            CreateMap<AnimalCage, AnimalDto>();
            CreateMap<AnimalDto, AnimalCage>();
            CreateMap<AnimalTrainer, UpdateAnimalDto>();
            CreateMap<UpdateAnimalDto, AnimalTrainer>();
            CreateMap<UpdateAnimalDto, AnimalCage>();
            CreateMap<User, UserUpdateDto>();
            CreateMap<UserUpdateDto, User>();
            CreateMap<Animal, AnimalFoodDto>();
            CreateMap<AnimalFoodDto, Animal>();
            CreateMap<Animal, AnimalCreateDto>();
            CreateMap<AnimalCreateDto, Animal>();
            CreateMap<AnimalCreateDto, AnimalTrainer>();
            CreateMap<AnimalTrainer, AnimalCreateDto>();
            CreateMap<AnimalCage, AnimalCreateDto>();
            CreateMap<AnimalCreateDto, AnimalCage>();
            CreateMap<Animal, GetAnimalDto>();
            CreateMap<Cage, GetAnimalDto>();
            CreateMap<AnimalTrainer, AvailableTrainer>();
            CreateMap<AnimalFood, AnimalCreateDto>();
            CreateMap<AnimalCreateDto, AnimalFood>();
            CreateMap<Animal, AnimalCreateDto>();
            CreateMap<AnimalCreateDto, Animal>();
            CreateMap<AnimalFood, UpdateAnimalDto>();
            CreateMap<UpdateAnimalDto, AnimalFood>();
            CreateMap<AnimalTrainer, GetAnimalDto>();
            CreateMap<AnimalCage, GetAnimalDto>();
        }

    }
}
