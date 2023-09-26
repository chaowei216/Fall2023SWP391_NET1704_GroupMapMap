using BBL.Interfaces;
using DAL.Entities;
using DAL.Repositories;
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

        public ReviewService(IGenericRepository<Review> reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public bool AddReview(string guestEmail, Review review)
        {
            throw new NotImplementedException();
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

        public bool UpdatReview(Review review)
        {
            throw new NotImplementedException();
        }
    }
}
