
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
            CreateMap<NewsCreateDto, News>();
            CreateMap<News, NewsUpdateDto>();
            CreateMap<NewsUpdateDto, News>();
            CreateMap<Review, ReviewDto>();
            CreateMap<ReviewDto, Review>();
            CreateMap<Review, ReviewUpdateDto>();
            CreateMap<ReviewUpdateDto, Review>();
            CreateMap<User, UserDto>();
            CreateMap<UserCreateDto, User>();
            CreateMap<Area, AreaCreateDto>();
            CreateMap<Area, AreaDto>();
            CreateMap<AreaCreateDto, Area>();
            CreateMap<Cage, CageCreateDto>();
            CreateMap<CageCreateDto, Cage>();
            CreateMap<Cage, CageDto>();
            CreateMap<FoodDto, Food>();
            CreateMap<Food, FoodDto>(); 
            CreateMap<FoodUpdateDto, Food>();
            CreateMap<AnimalSchedule, AnimalScheduleDto>();
            CreateMap<AnimalScheduleDto, AnimalSchedule>();
            CreateMap<AnimalTrainer, AnimalTrainerDto>();
            CreateMap<AnimalTrainerDto, AnimalTrainer>();
            CreateMap<OrderDto, Order>();
            CreateMap<Order, OrderDto>();
            CreateMap<OrderCreateDto, Order>();
            CreateMap<TicketDto, Ticket>();
            CreateMap<Ticket, TicketShowDto>();
            CreateMap<UpdateAnimalDto, Animal>();
            CreateMap<Animal, UpdateAnimalDto>();
            CreateMap<AnimalTrainer, UpdateAnimalDto>();
            CreateMap<UpdateAnimalDto, AnimalTrainer>();
            CreateMap<UpdateAnimalDto, AnimalCage>();
            CreateMap<User, UserUpdateDto>();
            CreateMap<UserUpdateDto, User>();
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
            CreateMap<ExperienceDetail, ExperienceDetailDto>();
            CreateMap<UpdateAnimalFoodDto, AnimalFood>();
            CreateMap<AnimalFood, UpdateAnimalFoodDto>();
            CreateMap<AnimalFood, FoodAmountDto>();
            CreateMap<FoodAmountDto, AnimalFood>();
            CreateMap<ScheduleDto, Schedule>();
            CreateMap<Schedule, ScheduleDto>();
            CreateMap<ScheduleCreateDto, Schedule>();
            CreateMap<Schedule, ScheduleCreateDto>();
            CreateMap<PaymentResponseDto, Transaction>();
            CreateMap<AnimalSchedule, AnimalScheduleCreateDto>();
            CreateMap<AnimalScheduleCreateDto, AnimalSchedule>();
            CreateMap<Animal, AnimalScheduleDto>();
            CreateMap<AnimalScheduleDto, Animal>();
            CreateMap<WorkExperience, WorkExperienceDto>();
            CreateMap<ExperienceCreateDto, WorkExperience>();
            CreateMap<FoodCategoryDto, FoodCategory>();
            CreateMap<FoodCategory, FoodCategoryDto>();
            CreateMap<AnimalSpeciesDto, AnimalSpecies>();
            CreateMap<AnimalSpecies, GetAnimalDto>();
            CreateMap<FoodCreateDto, Food>();
            CreateMap<Review, ReviewCreateDto>();
            CreateMap<ReviewCreateDto, Review>();
        }

    }
}
