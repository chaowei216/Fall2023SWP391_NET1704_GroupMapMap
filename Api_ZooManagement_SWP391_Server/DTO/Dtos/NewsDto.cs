﻿namespace DTO.Dtos
{
    public class NewsDto
    {
        public string NewsId { get; set; } = string.Empty;
        public string NewsTitle { get; set; } = string.Empty;
        public string NewsContent { get; set; } = string.Empty;
        public string AuthorName { get; set; } = string.Empty;
        public string? NewsImage { get; set; }
        public DateTime ReleaseDate { get; set; } 
    }
}
