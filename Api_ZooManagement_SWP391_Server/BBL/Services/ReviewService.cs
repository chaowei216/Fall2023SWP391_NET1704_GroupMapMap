﻿using BBL.Interfaces;
using DAL.Data;
using DAL.Entities;
using DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IGenericRepository<Review> _reviewRepository;
        private readonly DataContext _context;

        public ReviewService(IGenericRepository<Review> reviewRepository, DataContext context)
        {
            _reviewRepository = reviewRepository;
            _context = context;
        }

        public bool AddReview(Review review)
        {
            if (review != null)
            {
                return _reviewRepository.Add(review);
            }
            return false;
        }

        public ICollection<Review> GetAllReview()
        {
            return _reviewRepository.GetAll();
        }

        public Review GetReview(string id)
        {
            return _reviewRepository.GetById(id);
        }

        public bool ReviewExists(string id)
        {
            return _reviewRepository.GetById(id) != null ? true : false;
        }

    }
}
