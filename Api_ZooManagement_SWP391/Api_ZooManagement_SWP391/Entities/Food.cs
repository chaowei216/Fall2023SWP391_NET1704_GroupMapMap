using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Food
    {
        [Required]
        [MaxLength(6)]
        [RegularExpression(@"^F\d{5}$")]
        public string FoodId { get; set; }

        [Required] 
        public string FName { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateOnly ImportDate { get; set; }

        public ICollection<Feedschedule> Feedschedules { get; set; }
    }
}
