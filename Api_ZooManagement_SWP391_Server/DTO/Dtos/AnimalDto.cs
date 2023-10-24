namespace DTO.Dtos
{
    public class AnimalDto
    {
        public string animalId {  get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Sex { get; set; }
        public string Region { get; set; }
        public string HealthCheck { get; set; }
        public DateTime Birthday { get; set; }
        public bool Rarity { get; set; }
        public DateTime EntryCageDate { get; set; }
        public DateTime StartTrainDate { get; set; }
        public string AnimalImage { get; set; }
    }
}
