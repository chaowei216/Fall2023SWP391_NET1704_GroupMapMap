using Api_ZooManagement_SWP391.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api_ZooManagement_SWP391.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> option) : base(option)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(GetConnectionString());
            }
        }

        private string GetConnectionString()
        {
            IConfiguration config = new ConfigurationBuilder()
             .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", true, true)
            .Build();
            var strConn = config["ConnectionStrings:ZooManagement"];
            return strConn;
        }

        #region
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<ZooTrainer> ZooTrainers { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Area> Areas { get; set; }
        public DbSet<Cage> Cages { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Ticket> TicketDetails { get; set; }
        public DbSet<WorkExperience> WorkExperiences { get; set; }
        public DbSet<TrainerExperience> TrainerExperiences { get; set; }
        public DbSet<Animal> Animals { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<FeedSchedule> FeedSchedules { get; set; }
        public DbSet<SpeciesAnimal> speciesAnimals { get; set; }
        public DbSet<AnimalCage> AnimalCages { get; set; }
        public DbSet<AnimalTrainer> AnimalTrainers { get; set; }
        public DbSet<FoodCategory> FoodCategories { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region
            modelBuilder.Entity<Staff>()
               .HasKey(staff => staff.SId);

            modelBuilder.Entity<Admin>()
                .HasKey(admin => admin.AdminId);

            modelBuilder.Entity<Account>()
                .HasKey(account => account.Email);

            modelBuilder.Entity<Area>()
                .HasKey(area => area.AreaId);

            modelBuilder.Entity<Cage>()
                .HasKey(cage => cage.CId);

            modelBuilder.Entity<Guest>()
                .HasKey(guest => guest.Email);

            modelBuilder.Entity<Order>()
                .HasKey(order => order.OrderId);

            modelBuilder.Entity<Ticket>()
                .HasKey(ticket => ticket.TicketId);

            modelBuilder.Entity<ZooTrainer>()
                .HasKey(zooTrainer => zooTrainer.Id);

            modelBuilder.Entity<WorkExperience>()
                .HasKey(workExperience => workExperience.Type);

            modelBuilder.Entity<Animal>()
                .HasKey(animal => animal.AnimalID);

            modelBuilder.Entity<Food>()
                .HasKey(food => food.FoodId);

            modelBuilder.Entity<FoodCategory>()
                .HasKey(foodCategory => foodCategory.CategoryId);

            modelBuilder.Entity<SpeciesAnimal>()
                .HasKey(speciesAnimals => speciesAnimals.SpeciesId);

            modelBuilder.Entity<Account>()
                .HasOne(a => a.Admin)
                .WithOne(b => b.Account)
                .HasForeignKey<Admin>(c => c.Email)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Account>()
                .HasOne(a => a.Staff)
                .WithOne(b => b.Account)
                .HasForeignKey<Staff>(c => c.Email)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Account>()
                .HasOne(a => a.ZooTrainer)
                .WithOne(b => b.Account)
                .HasForeignKey<ZooTrainer>(c => c.Email)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Staff>()
                .HasOne(a => a.Area)
                .WithOne(b => b.Staff)
                .HasForeignKey<Area>(c => c.AreaId)
                .OnDelete(DeleteBehavior.NoAction);


            #endregion

            modelBuilder.Entity<OrderDetail>()
                .HasKey(od => new { od.OrderId, od.TicketId });
            modelBuilder.Entity<OrderDetail>()
                .HasOne(od => od.Ticket)
                .WithMany(t => t.OrderDetails)
                .HasForeignKey(od => od.TicketId);
            modelBuilder.Entity<OrderDetail>()
                .HasOne(od => od.Order)
                .WithMany(o => o.OrderDetails)
                .HasForeignKey(od => od.OrderId);

            modelBuilder.Entity<TrainerExperience>()
                .HasKey(te => new { te.TrainerId, te.WorkType });
            modelBuilder.Entity<TrainerExperience>()
                .HasOne(te => te.ZooTrainer)
                .WithMany(t => t.TrainerExperiences)
                .HasForeignKey(te => te.TrainerId);
            modelBuilder.Entity<TrainerExperience>()
                .HasOne(te => te.WorkExperience)
                .WithMany(w => w.TrainerExperiences)
                .HasForeignKey(te => te.WorkType);

            modelBuilder.Entity<AnimalTrainer>()
                .HasKey(at => new { at.AnimalId, at.TrainerId });
            modelBuilder.Entity<AnimalTrainer>()
                .HasOne(at => at.Animal)
                .WithMany(a => a.AnimalTrainers)
                .HasForeignKey(at => at.AnimalId);
            modelBuilder.Entity<AnimalTrainer>()
                .HasOne(at => at.ZooTrainer)
                .WithMany(zt => zt.AnimalTrainers)
                .HasForeignKey(at => at.TrainerId);

            modelBuilder.Entity<FeedSchedule>()
                .HasKey(fs => new { fs.AnimalID, fs.FoodId });
            modelBuilder.Entity<FeedSchedule>()
                .HasOne(fs => fs.Animal)
                .WithMany(a => a.FeedSchedules)
                .HasForeignKey(fs => fs.AnimalID);
            modelBuilder.Entity<FeedSchedule>()
                .HasOne(fs => fs.Food)
                .WithMany(f => f.FeedSchedules)
                .HasForeignKey(fs => fs.FoodId);

            modelBuilder.Entity<AnimalCage>()
                .HasKey(ac => new { ac.AnimalId, ac.CageId });
            modelBuilder.Entity<AnimalCage>()
                .HasOne(ac => ac.Animal)
                .WithMany(a => a.AnimalCages)
                .HasForeignKey(ac => ac.AnimalId);
            modelBuilder.Entity<AnimalCage>()
                .HasOne(ac => ac.Cage)
                .WithMany(c => c.AnimalCages)
                .HasForeignKey(ac => ac.CageId);



        }
    }
}