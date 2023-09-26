using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BBL.Interfaces
{
    public interface IReviewService
    {
        bool AddReview(string guestEmail, Review review);
        bool UpdatReview(Review review);
        Review GetReview(string id);
        ICollection<Review> GetAllReview();
        bool ReviewExists(string id);
    }
}
