namespace Api_ZooManagement_SWP391.Entities
{
    public class NewsCategory
    {
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public ICollection<News> News { get; set; }

    }
}
