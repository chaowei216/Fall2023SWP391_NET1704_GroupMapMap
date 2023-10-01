using DAL.Entities;


namespace BBL.Interfaces
{
    public interface ICageService
    {
        bool AddCage(Cage cage);
        bool UpdateCage(Cage cage);
        ICollection<Cage> GetAll();
        Cage GetByCageId(string id);

        bool CageExists(string id);

    }
}
