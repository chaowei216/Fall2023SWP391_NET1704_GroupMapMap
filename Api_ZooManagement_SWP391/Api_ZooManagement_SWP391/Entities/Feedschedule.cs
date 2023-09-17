using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class FeedSchedule
    {
        
        [Required]
        [MaxLength(5)]
        public string AnimalID { get; set; }

        [Required]
        public string FoodId { get; set; }

        [Required]
        public int Amount { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime FeedTime { get; set; }  
        public Animal  Animal { get; set; }
        public Food Food { get; set; }  

    }
}
