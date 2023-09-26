﻿using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class AnimalTrainer
    {
        public string UserId { get; set; }
        public string AnimalId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool TrainingStatus { get; set; }
        public User User { get; set; }
        public Animal Animal { get; set; }

    }
}