namespace Api_ZooManagement_SWP391.Entities
{
    public class News
    {
        public string NewsId { get; set; }
        public string NewsTitle { get; set; }
        public string NewsContent { get; set; }

        public ICollection<NewsPost> NewsPosts { get; set; }
        public NewsCategory NewsCategory { get; set; }
    }
}
