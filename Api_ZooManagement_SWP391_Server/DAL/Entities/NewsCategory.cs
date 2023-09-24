namespace DAL.Entities
{
    public class NewsCategory
    {
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public ICollection<News> News { get; set; }

    }
}
