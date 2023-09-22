namespace Api_ZooManagement_SWP391.Entities
{
    public class User
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public bool Sex { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool Status { get; set; }
        public Role Role { get; set; }
        public ICollection<ExperienceDetail> ExperienceDetails { get; set; }  
        public ICollection<AnimalTrainer> AnimalTrainers { get; set; }



    }
}
