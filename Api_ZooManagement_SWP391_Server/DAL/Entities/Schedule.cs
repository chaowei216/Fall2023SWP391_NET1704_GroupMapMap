namespace DAL.Entities
{
    public class Schedule
    {
        public string ScheduleId { get; set; }
        public string MealType { get; set; }
        public ICollection<AnimalSchedule> AnimalSchedules { get; set; }
    }
}
