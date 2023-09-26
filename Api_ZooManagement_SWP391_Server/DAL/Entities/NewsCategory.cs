using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class NewsCategory
    {
        public string Id { get; set; }
        public string CategoryName { get; set; }
        public ICollection<News> News { get; set; }

    }
}
