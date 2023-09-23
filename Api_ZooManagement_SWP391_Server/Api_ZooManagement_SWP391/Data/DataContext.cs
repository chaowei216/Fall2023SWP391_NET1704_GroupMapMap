﻿using Api_ZooManagement_SWP391.Entities;
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

        #region Entities
        public DbSet<ExperienceDetail> ExperienceDetails { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<AnimalFood> AnimalFoods { get; set; }
        public DbSet<AnimalSchedule> AnimalSchedules { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<NewsCategory> NewsCategories { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Area> Areas { get; set; }
        public DbSet<Cage> Cages { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<WorkExperience> WorkExperiences { get; set; }
        public DbSet<Animal> Animals { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<SpeciesAnimal> SpeciesAnimals { get; set; }
        public DbSet<AnimalCage> AnimalCages { get; set; }
        public DbSet<AnimalTrainer> AnimalTrainers { get; set; }
        public DbSet<FoodCategory> FoodCategories { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Constraint
            modelBuilder.Entity<Area>(entity =>
            {
                entity.HasKey(area => area.AreaId);
                entity.Property(area => area.AreaId).HasMaxLength(5);
                entity.Property(e => e.AreaName).HasMaxLength(5).IsRequired();
                entity.Property(e => e.Description).HasMaxLength(50);
            });

            modelBuilder.Entity<Cage>(entity =>
            {
                entity.HasKey(cage => cage.CId);
                entity.Property(cage => cage.CId).HasMaxLength(5);
                entity.Property(e => e.MaxCapacity).IsRequired();
                entity.Property(e => e.AnimalQuantity).IsRequired();
            });

            modelBuilder.Entity<Guest>(e =>
            {
                e.HasKey(guest => guest.Email);
                e.Property(a => a.Email).HasMaxLength(30);
                e.Property(a => a.FullName).HasMaxLength(50).IsRequired();
                e.Property(p => p.PhoneNumber).HasMaxLength(10).IsRequired();
            });

            modelBuilder.Entity<Order>(e =>
            {
                e.HasKey(order => order.OrderId);
                e.Property(c => c.OrderId).HasMaxLength(5);
                e.Property(c => c.Email).HasMaxLength(30);
                e.Property(c => c.FullName).HasMaxLength(50).IsRequired();
                e.Property(p => p.Phone).HasMaxLength(10);
                e.Property(d => d.BuyDate).IsRequired();
                e.Property(d => d.TotalPrice).IsRequired();
            });

            modelBuilder.Entity<Ticket>(e =>
            {
                e.HasKey(o => o.TicketId);
                e.Property(c => c.TicketId).HasMaxLength(5);
                e.Property(c => c.Type).HasMaxLength(30).IsRequired();
                e.Property(c => c.Price).IsRequired();
            });


            modelBuilder.Entity<WorkExperience>(entity =>
            {
                entity.HasKey(workExperience => workExperience.ExperienceId);
                entity.Property(e => e.ExperienceId).HasMaxLength(5);
                entity.Property(e => e.Position).HasMaxLength(30).IsRequired();
            });

            modelBuilder.Entity<Animal>(entity =>
            {
                entity.HasKey(animal => animal.AnimalId);
                entity.Property(e => e.AnimalId).HasMaxLength(5);
                entity.Property(e => e.Name).HasMaxLength(50).IsRequired();
                entity.Property(e => e.Description).HasMaxLength(50).IsRequired();
                entity.Property(e => e.Sex).IsRequired();
                entity.Property(e => e.EntryDate).IsRequired();
                entity.Property(e => e.Region).HasMaxLength(30).IsRequired();
                entity.Property(e => e.HealthCheck).IsRequired();
                entity.Property(e => e.Birthday).IsRequired();
                entity.Property(e => e.Status).IsRequired();
            });

            modelBuilder.Entity<Food>(entity =>
            {
                entity.HasKey(food => food.FoodId);
                entity.Property(f => f.FoodId).HasMaxLength(5);
                entity.Property(f => f.FName).HasMaxLength(30).IsRequired();
                entity.Property(f => f.Quantity).IsRequired();
                entity.Property(f => f.ImportDate).IsRequired();
                entity.Property(f => f.ExpiredDate).IsRequired();
            });

            modelBuilder.Entity<FoodCategory>(entity =>
            {
                entity.HasKey(foodCategory => foodCategory.CategoryId);
                entity.Property(fc => fc.CategoryId).HasMaxLength(5);
                entity.Property(fc => fc.CategoryName).HasMaxLength(30).IsRequired();
            });

            modelBuilder.Entity<SpeciesAnimal>(entity =>
            {
                entity.HasKey(speciesAnimals => speciesAnimals.SpeciesId);
                entity.Property(sa => sa.SpeciesId).HasMaxLength(5);
                entity.Property(sa => sa.SpeciesName).HasMaxLength(30).IsRequired();
                entity.Property(sa => sa.IsExtinct).IsRequired();
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.HasKey(e => e.ReviewId);
                entity.Property(e => e.ReviewId).HasMaxLength(5);
                entity.Property(e => e.Title).HasMaxLength(30).IsRequired();
                entity.Property(e => e.Description).HasMaxLength(100).IsRequired();
            });

            modelBuilder.Entity<News>(entity =>
            {
                entity.HasKey(e => e.NewsId);
                entity.Property(e => e.NewsId).HasMaxLength(5);
                entity.Property(e => e.AuthorName).HasMaxLength(30).IsRequired();
                entity.Property(e => e.ReleaseDate).IsRequired();
                entity.Property(e => e.NewsTitle).HasMaxLength(30).IsRequired();
                entity.Property(e => e.NewsContent).IsRequired();
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(u => u.UserId);
                entity.Property(u => u.UserId).HasMaxLength(5);
                entity.Property(u => u.Email).HasMaxLength(30).IsRequired();
                entity.Property(u => u.Password).HasMaxLength(20).IsRequired();
                entity.Property(u => u.Firstname).HasMaxLength(10).IsRequired();
                entity.Property(u => u.Lastname).HasMaxLength(10).IsRequired();
                entity.Property(u => u.Phone).HasMaxLength(10).IsRequired();
                entity.Property(u => u.Address).HasMaxLength(50).IsRequired();
                entity.Property(u => u.Sex).IsRequired();
                entity.Property(u => u.StartDate).IsRequired();
                entity.Property(u => u.Role).IsRequired();
                entity.Property(u => u.Status).IsRequired();

            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.HasKey(s => s.ScheduleId);
                entity.Property(s => s.ScheduleId).HasMaxLength(5);
                entity.Property(s => s.MealType).HasMaxLength(10).IsRequired();
            });

            modelBuilder.Entity<NewsCategory>(entity =>
            {
                entity.HasKey(nc => nc.CategoryId);
                entity.Property(nc => nc.CategoryId).HasMaxLength(5);
                entity.Property(nc => nc.CategoryName).HasMaxLength(30).IsRequired();
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.Property(od => od.EntryDate).IsRequired();
            });

            modelBuilder.Entity<ExperienceDetail>(entity =>
            {
                entity.Property(ed => ed.Company).HasMaxLength(30).IsRequired();
                entity.Property(ed => ed.StartDate).IsRequired();
                entity.Property(ed => ed.EndDate).IsRequired();
                entity.Property(ed => ed.Description).HasMaxLength(60).IsRequired();
            });

            modelBuilder.Entity<AnimalTrainer>(entity =>
            {
                entity.Property(at => at.StartDate).IsRequired();
                entity.Property(at => at.EndDate).IsRequired();
                entity.Property(at => at.TrainingStatus).IsRequired();
            });

            modelBuilder.Entity<AnimalSchedule>(entity =>
            {
                entity.Property(ash => ash.Time).IsRequired();
                entity.Property(ash => ash.Description).HasMaxLength(50).IsRequired();
            });

            modelBuilder.Entity<AnimalFood>(entity =>
            {
                entity.Property(af => af.Amount).IsRequired();
            });

            modelBuilder.Entity<AnimalCage>(entity =>
            {
                entity.Property(ac => ac.EntryDate).IsRequired();
            });
            #endregion

            #region M_to_M_Relationship
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

            modelBuilder.Entity<AnimalSchedule>()
                .HasKey(e => new { e.ScheduleId, e.AnimalId });
            modelBuilder.Entity<AnimalSchedule>()
                .HasOne(e => e.Animal)
                .WithMany(e => e.AnimalSchedules)
                .HasForeignKey(e => e.AnimalId);
            modelBuilder.Entity<AnimalSchedule>()
                .HasOne(e => e.Schedule)
                .WithMany(e => e.AnimalSchedules)
                .HasForeignKey(e => e.ScheduleId);

            modelBuilder.Entity<AnimalFood>()
                .HasKey(af => new { af.AnimalId, af.FoodId });
            modelBuilder.Entity<AnimalFood>()
                .HasOne(af => af.Animal)
                .WithMany(af => af.AnimalFoods)
                .HasForeignKey(af => af.AnimalId);
            modelBuilder.Entity<AnimalFood>()
                .HasOne(af => af.Food)
                .WithMany(af => af.AnimalFoods)
                .HasForeignKey(af => af.FoodId);

            modelBuilder.Entity<AnimalTrainer>()
                .HasKey(e => new { e.UserId, e.AnimalId });
            modelBuilder.Entity<AnimalTrainer>()
                .HasOne(e => e.Animal)
                .WithMany(e => e.AnimalTrainers)
                .HasForeignKey(e => e.AnimalId);
            modelBuilder.Entity<AnimalTrainer>()
                .HasOne(e => e.User)
                .WithMany(e => e.AnimalTrainers)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<ExperienceDetail>()
                .HasKey(e => new { e.UserId, e.ExperienceId });
            modelBuilder.Entity<ExperienceDetail>()
                .HasOne(e => e.User)
                .WithMany(e => e.ExperienceDetails)
                .HasForeignKey(e => e.UserId);
            modelBuilder.Entity<ExperienceDetail>()
                .HasOne(e => e.WorkExperience)
                .WithMany(e => e.ExperienceDetails)
                .HasForeignKey(e => e.ExperienceId);
            #endregion

        }
    }
}
