namespace DTO.Dtos
{
    public class FoodAmountDto
    {
        public string FoodId { get; set; }
        public DateTime StartEat { get; set; }
        public DateTime EndEat { get; set; }
        public float Amount { get; set; }
    }
}
