namespace DTO.Dtos
{
    public class AnimalScheduleDto
    {
        public string AnimalId { get; set; }
        public List<UpdateAnimalScheduleDto> AnimalSchedules { get; set; }
    }
}
