using BBL.Interfaces;
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

        public bool DeleteReview(string reviewId)
        {
            var review = _reviewRepository.GetById(reviewId);
            if (review == null) return false;
            _context.Remove(review);
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
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

        public bool UpdateReview(Review reviewMap)
        {
            var review = _reviewRepository.GetById(reviewMap.ReviewId);
            if (review == null) return false;
            review.Title = reviewMap.Title;
            review.Description = reviewMap.Description;
            review.Rating = reviewMap.Rating;
            return _reviewRepository.Update(review);
        }


    }
}
