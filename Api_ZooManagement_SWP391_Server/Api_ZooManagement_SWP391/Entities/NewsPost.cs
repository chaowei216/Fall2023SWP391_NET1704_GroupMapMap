namespace Api_ZooManagement_SWP391.Entities
{
    public class NewsPost
    {
        public string NewsId { get; set; }
        public string  UserId { get; set; }
        public DateTime ReleaseDate { get; set; }
        public News News { get; set; }
        public User User { get; set; }

    }
}
