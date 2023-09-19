namespace Api_ZooManagement_SWP391.Entities
{
    public class NewPost
    {
        public string NewsId { get; set; }
        public string  UserId { get; set; }
        public DateTime ReleaseDate { get; set; }
        public New New { get; set; }
        public User User { get; set; }

    }
}
