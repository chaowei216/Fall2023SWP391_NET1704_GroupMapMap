namespace Api_ZooManagement_SWP391.Dtos
{
    public class UpdateAnimalDto
    {
        public string AnimalId { get; set; }
        public string Description { get; set; }
        public string HealthCheck { get; set; }
        public bool Status { get; set; }
        public DateTime? EndTrainDate { get; set; }
        public DateTime? OutCageDate { get; set; }
    }
}
