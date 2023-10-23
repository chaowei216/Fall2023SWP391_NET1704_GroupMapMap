using DAL.Entities;

namespace BBL.Interfaces
{
    public interface IReviewService
    {
        bool AddReview(Review review);
        bool UpdateReview(Review review);
        bool DeleteReview(string reviewId);
        Review GetReview(string id);
        ICollection<Review> GetAllReview();
        bool ReviewExists(string id);
    }
}
