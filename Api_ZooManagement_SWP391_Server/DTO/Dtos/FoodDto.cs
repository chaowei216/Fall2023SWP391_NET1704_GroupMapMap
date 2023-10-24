﻿namespace DTO.Dtos
{
    public class FoodDto
    {
        public string FoodId {  get; set; }
        public string FName {  get; set; }
        public int Quantity { get; set; }
        public DateTime ImportDate { get; set; }
        public DateTime ExpiredDate {  get; set; }
        public string CategoryName { get; set; }
    }
}
