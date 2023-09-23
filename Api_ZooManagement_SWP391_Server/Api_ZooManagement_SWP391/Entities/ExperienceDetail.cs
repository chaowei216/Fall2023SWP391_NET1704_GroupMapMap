﻿namespace Api_ZooManagement_SWP391.Entities
{
    public class ExperienceDetail
    {
        public string UserId { get; set; }
        public string ExperienceId { get; set; }
        public string Company { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; }
        public User User { get; set; }
        public WorkExperience WorkExperience { get; set; }

    }
}
