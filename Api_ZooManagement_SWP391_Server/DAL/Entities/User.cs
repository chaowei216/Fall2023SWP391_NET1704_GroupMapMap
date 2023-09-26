using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class User
    {
        public string UserId { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public bool Sex { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool Status { get; set; }
        public string? RefreshToken { get; set; }
        public string? ResetPassToken { get; set; }
        public DateTime? ResetTokenExpires { get; set; }
        public Role Role { get; set; }
        public ICollection<ExperienceDetail> ExperienceDetails { get; set; }  
        public ICollection<AnimalTrainer> AnimalTrainers { get; set; }



    }
}
