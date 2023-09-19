namespace Api_ZooManagement_SWP391.Entities
{
    public class New
    {
        public string NewId { get; set; }
        public string CategoryId { get; set; }
        public string NewTitle { get; set; }
        public string NewContent { get; set; }

        public ICollection<NewPost> NewPosts { get; set; }
        public NewCategory NewCategory { get; set; }
    }
}
