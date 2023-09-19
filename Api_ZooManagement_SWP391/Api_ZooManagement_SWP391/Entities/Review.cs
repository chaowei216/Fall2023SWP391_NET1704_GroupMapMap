namespace Api_ZooManagement_SWP391.Entities
{
    public class Review
    {
        private string ReviewId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }

        public Guest Guest { get; set; }


    }
}
