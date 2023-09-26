﻿// <auto-generated />
using System;
using DAL.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DAL.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230926044550_InitUpda")]
    partial class InitUpda
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.22")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DAL.Entities.Animal", b =>
                {
                    b.Property<string>("AnimalId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<DateTime>("Birthday")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EntryDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("HealthCheck")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Region")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<bool>("Sex")
                        .HasColumnType("bit");

                    b.Property<string>("SpeciesAnimalSpeciesId")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<bool>("Status")
                        .HasColumnType("bit");

                    b.HasKey("AnimalId");

                    b.HasIndex("SpeciesAnimalSpeciesId");

                    b.ToTable("Animals");
                });

            modelBuilder.Entity("DAL.Entities.AnimalCage", b =>
                {
                    b.Property<string>("AnimalId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("CageId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<DateTime>("EntryDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("OutDate")
                        .HasColumnType("datetime2");

                    b.HasKey("AnimalId", "CageId");

                    b.HasIndex("CageId");

                    b.ToTable("AnimalCages");
                });

            modelBuilder.Entity("DAL.Entities.AnimalFood", b =>
                {
                    b.Property<string>("AnimalId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("FoodId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<float>("Amount")
                        .HasColumnType("real");

                    b.HasKey("AnimalId", "FoodId");

                    b.HasIndex("FoodId");

                    b.ToTable("AnimalFoods");
                });

            modelBuilder.Entity("DAL.Entities.AnimalSchedule", b =>
                {
                    b.Property<string>("ScheduleId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("AnimalId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.HasKey("ScheduleId", "AnimalId");

                    b.HasIndex("AnimalId");

                    b.ToTable("AnimalSchedules");
                });

            modelBuilder.Entity("DAL.Entities.AnimalTrainer", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("AnimalId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<DateTime?>("EndDate")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("TrainingStatus")
                        .HasColumnType("bit");

                    b.HasKey("UserId", "AnimalId");

                    b.HasIndex("AnimalId");

                    b.ToTable("AnimalTrainers");
                });

            modelBuilder.Entity("DAL.Entities.Area", b =>
                {
                    b.Property<string>("AreaId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("AreaName")
                        .IsRequired()
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("AreaId");

                    b.ToTable("Areas");
                });

            modelBuilder.Entity("DAL.Entities.Cage", b =>
                {
                    b.Property<string>("CId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<int>("AnimalQuantity")
                        .HasColumnType("int");

                    b.Property<string>("AreaId")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<int>("MaxCapacity")
                        .HasColumnType("int");

                    b.HasKey("CId");

                    b.HasIndex("AreaId");

                    b.ToTable("Cages");
                });

            modelBuilder.Entity("DAL.Entities.ExperienceDetail", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("ExperienceId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("Company")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("nvarchar(60)");

                    b.Property<DateTime?>("EndDate")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("UserId", "ExperienceId");

                    b.HasIndex("ExperienceId");

                    b.ToTable("ExperienceDetails");
                });

            modelBuilder.Entity("DAL.Entities.Food", b =>
                {
                    b.Property<string>("FoodId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("CategoryId")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<DateTime>("ExpiredDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<DateTime>("ImportDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("FoodId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Foods");
                });

            modelBuilder.Entity("DAL.Entities.FoodCategory", b =>
                {
                    b.Property<string>("CategoryId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("CategoryId");

                    b.ToTable("FoodCategories");
                });

            modelBuilder.Entity("DAL.Entities.Guest", b =>
                {
                    b.Property<string>("Email")
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("Email");

                    b.ToTable("Guests");
                });

            modelBuilder.Entity("DAL.Entities.News", b =>
                {
                    b.Property<string>("NewsId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("AuthorName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("NewsCategoryCategoryId")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("NewsContent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NewsTitle")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<DateTime>("ReleaseDate")
                        .HasColumnType("datetime2");

                    b.HasKey("NewsId");

                    b.HasIndex("NewsCategoryCategoryId");

                    b.ToTable("News");
                });

            modelBuilder.Entity("DAL.Entities.NewsCategory", b =>
                {
                    b.Property<string>("CategoryId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("CategoryId");

                    b.ToTable("NewsCategories");
                });

            modelBuilder.Entity("DAL.Entities.Order", b =>
                {
                    b.Property<string>("OrderId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("GuestEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<double>("TotalPrice")
                        .HasColumnType("float");

                    b.HasKey("OrderId");

                    b.HasIndex("GuestEmail");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("DAL.Entities.OrderDetail", b =>
                {
                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("TicketId")
                        .HasColumnType("nvarchar(5)");

                    b.Property<DateTime>("BuyDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("EntryDate")
                        .HasColumnType("datetime2");

                    b.HasKey("OrderId", "TicketId");

                    b.HasIndex("TicketId");

                    b.ToTable("OrderDetails");
                });

            modelBuilder.Entity("DAL.Entities.Review", b =>
                {
                    b.Property<string>("ReviewId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("GuestEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<float>("Rating")
                        .HasColumnType("real");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("ReviewId");

                    b.HasIndex("GuestEmail");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("DAL.Entities.Schedule", b =>
                {
                    b.Property<string>("ScheduleId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("MealType")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("ScheduleId");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("DAL.Entities.SpeciesAnimal", b =>
                {
                    b.Property<string>("SpeciesId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<bool>("Rarity")
                        .HasColumnType("bit");

                    b.Property<string>("SpeciesName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("SpeciesId");

                    b.ToTable("SpeciesAnimals");
                });

            modelBuilder.Entity("DAL.Entities.Ticket", b =>
                {
                    b.Property<string>("TicketId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("TicketId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("DAL.Entities.User", b =>
                {
                    b.Property<string>("UserId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Firstname")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("RefreshToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ResetPassToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("ResetTokenExpires")
                        .HasColumnType("datetime2");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<bool>("Sex")
                        .HasColumnType("bit");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Status")
                        .HasColumnType("bit");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DAL.Entities.WorkExperience", b =>
                {
                    b.Property<string>("ExperienceId")
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("Position")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("ExperienceId");

                    b.ToTable("WorkExperiences");
                });

            modelBuilder.Entity("DAL.Entities.Animal", b =>
                {
                    b.HasOne("DAL.Entities.SpeciesAnimal", "SpeciesAnimal")
                        .WithMany("Animals")
                        .HasForeignKey("SpeciesAnimalSpeciesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("SpeciesAnimal");
                });

            modelBuilder.Entity("DAL.Entities.AnimalCage", b =>
                {
                    b.HasOne("DAL.Entities.Animal", "Animal")
                        .WithMany("AnimalCages")
                        .HasForeignKey("AnimalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.Cage", "Cage")
                        .WithMany("AnimalCages")
                        .HasForeignKey("CageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animal");

                    b.Navigation("Cage");
                });

            modelBuilder.Entity("DAL.Entities.AnimalFood", b =>
                {
                    b.HasOne("DAL.Entities.Animal", "Animal")
                        .WithMany("AnimalFoods")
                        .HasForeignKey("AnimalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.Food", "Food")
                        .WithMany("AnimalFoods")
                        .HasForeignKey("FoodId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animal");

                    b.Navigation("Food");
                });

            modelBuilder.Entity("DAL.Entities.AnimalSchedule", b =>
                {
                    b.HasOne("DAL.Entities.Animal", "Animal")
                        .WithMany("AnimalSchedules")
                        .HasForeignKey("AnimalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.Schedule", "Schedule")
                        .WithMany("AnimalSchedules")
                        .HasForeignKey("ScheduleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animal");

                    b.Navigation("Schedule");
                });

            modelBuilder.Entity("DAL.Entities.AnimalTrainer", b =>
                {
                    b.HasOne("DAL.Entities.Animal", "Animal")
                        .WithMany("AnimalTrainers")
                        .HasForeignKey("AnimalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.User", "User")
                        .WithMany("AnimalTrainers")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animal");

                    b.Navigation("User");
                });

            modelBuilder.Entity("DAL.Entities.Cage", b =>
                {
                    b.HasOne("DAL.Entities.Area", "Area")
                        .WithMany("Cages")
                        .HasForeignKey("AreaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Area");
                });

            modelBuilder.Entity("DAL.Entities.ExperienceDetail", b =>
                {
                    b.HasOne("DAL.Entities.WorkExperience", "WorkExperience")
                        .WithMany("ExperienceDetails")
                        .HasForeignKey("ExperienceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.User", "User")
                        .WithMany("ExperienceDetails")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");

                    b.Navigation("WorkExperience");
                });

            modelBuilder.Entity("DAL.Entities.Food", b =>
                {
                    b.HasOne("DAL.Entities.FoodCategory", "Category")
                        .WithMany("Foods")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("DAL.Entities.News", b =>
                {
                    b.HasOne("DAL.Entities.NewsCategory", "NewsCategory")
                        .WithMany("News")
                        .HasForeignKey("NewsCategoryCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("NewsCategory");
                });

            modelBuilder.Entity("DAL.Entities.Order", b =>
                {
                    b.HasOne("DAL.Entities.Guest", "Guest")
                        .WithMany("Orders")
                        .HasForeignKey("GuestEmail")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Guest");
                });

            modelBuilder.Entity("DAL.Entities.OrderDetail", b =>
                {
                    b.HasOne("DAL.Entities.Order", "Order")
                        .WithMany("OrderDetails")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.Ticket", "Ticket")
                        .WithMany("OrderDetails")
                        .HasForeignKey("TicketId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");

                    b.Navigation("Ticket");
                });

            modelBuilder.Entity("DAL.Entities.Review", b =>
                {
                    b.HasOne("DAL.Entities.Guest", "Guest")
                        .WithMany("Reviews")
                        .HasForeignKey("GuestEmail")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Guest");
                });

            modelBuilder.Entity("DAL.Entities.Animal", b =>
                {
                    b.Navigation("AnimalCages");

                    b.Navigation("AnimalFoods");

                    b.Navigation("AnimalSchedules");

                    b.Navigation("AnimalTrainers");
                });

            modelBuilder.Entity("DAL.Entities.Area", b =>
                {
                    b.Navigation("Cages");
                });

            modelBuilder.Entity("DAL.Entities.Cage", b =>
                {
                    b.Navigation("AnimalCages");
                });

            modelBuilder.Entity("DAL.Entities.Food", b =>
                {
                    b.Navigation("AnimalFoods");
                });

            modelBuilder.Entity("DAL.Entities.FoodCategory", b =>
                {
                    b.Navigation("Foods");
                });

            modelBuilder.Entity("DAL.Entities.Guest", b =>
                {
                    b.Navigation("Orders");

                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("DAL.Entities.NewsCategory", b =>
                {
                    b.Navigation("News");
                });

            modelBuilder.Entity("DAL.Entities.Order", b =>
                {
                    b.Navigation("OrderDetails");
                });

            modelBuilder.Entity("DAL.Entities.Schedule", b =>
                {
                    b.Navigation("AnimalSchedules");
                });

            modelBuilder.Entity("DAL.Entities.SpeciesAnimal", b =>
                {
                    b.Navigation("Animals");
                });

            modelBuilder.Entity("DAL.Entities.Ticket", b =>
                {
                    b.Navigation("OrderDetails");
                });

            modelBuilder.Entity("DAL.Entities.User", b =>
                {
                    b.Navigation("AnimalTrainers");

                    b.Navigation("ExperienceDetails");
                });

            modelBuilder.Entity("DAL.Entities.WorkExperience", b =>
                {
                    b.Navigation("ExperienceDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
