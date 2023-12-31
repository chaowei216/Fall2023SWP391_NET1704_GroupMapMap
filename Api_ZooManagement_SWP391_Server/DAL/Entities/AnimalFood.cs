﻿namespace DAL.Entities
{
    public class AnimalFood
    {
        public string AnimalId { get; set; }
        public string FoodId { get; set; }
        public DateTime StartEat { get; set; }
        public DateTime EndEat { get; set; }
        public double Amount { get; set; }
        public Animal Animal { get; set; }
        public Food Food { get; set; }
    }
}
