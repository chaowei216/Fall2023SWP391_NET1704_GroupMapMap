namespace Api_ZooManagement_SWP391.Dtos
{
    public class AnimalDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Sex { get; set; }
        public DateTime EntryDate { get; set; }
        public string Region { get; set; }
        public string HealthCheck { get; set; }
        public DateTime Birthday { get; set; }
        public bool Status { get; set; }
        public string SpeciesId { get; set; }
    }
}
