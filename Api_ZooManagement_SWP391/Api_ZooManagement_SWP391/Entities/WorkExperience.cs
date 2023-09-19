using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class WorkExperience
    {
        public string ExperienceId { get; set; }
        public DateTime WorkTime { get; set; }
        public string Company {  get; set; }
        public string Description { get; set; }
        public User User { get; set; }

    }
}
