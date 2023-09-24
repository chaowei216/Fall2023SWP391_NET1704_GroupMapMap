namespace DAL.Entities
{
    public class AnimalSchedule
    {
        public string AnimalId { get; set; }
        public string ScheduleId { get; set; }
        public DateTime Time { get; set; }
        public string Description { get; set; }
        public Animal Animal { get; set; }
        public Schedule Schedule { get; set; }
    }
}
