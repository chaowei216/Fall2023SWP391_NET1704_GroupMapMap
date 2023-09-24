namespace DAL.Entities
{
    public class Review
    {
        public string ReviewId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }

        public Guest Guest { get; set; }


    }
}
