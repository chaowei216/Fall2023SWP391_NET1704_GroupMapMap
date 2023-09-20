using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class WorkExperience
    {
        public string ExperienceId { get; set; }
        public string Position { get; set; }
        public ICollection<ExperienceDetail> ExperienceDetails { get; set; }
    }
}
