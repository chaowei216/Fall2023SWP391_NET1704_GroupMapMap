using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class News
    {
        public string NewsId { get; set; }
        public string Category { get; set; }
        public string NewsTitle { get; set; }
        public string NewsContent { get; set; }
        public string AuthorName { get; set; }
        public DateTime ReleaseDate { get; set; }     
        public User User { get; set; }
    }
}
