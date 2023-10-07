USE [ZooManagement]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalCages]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalCages](
	[AnimalId] [nvarchar](5) NOT NULL,
	[CageId] [nvarchar](5) NOT NULL,
	[EntryDate] [datetime2](7) NOT NULL,
	[OutDate] [datetime2](7) NULL,
 CONSTRAINT [PK_AnimalCages] PRIMARY KEY CLUSTERED 
(
	[AnimalId] ASC,
	[CageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalFoods]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalFoods](
	[AnimalId] [nvarchar](5) NOT NULL,
	[FoodId] [nvarchar](5) NOT NULL,
	[Amount] [real] NOT NULL,
 CONSTRAINT [PK_AnimalFoods] PRIMARY KEY CLUSTERED 
(
	[AnimalId] ASC,
	[FoodId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Animals]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Animals](
	[AnimalId] [nvarchar](5) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Sex] [bit] NOT NULL,
	[EntryDate] [datetime2](7) NOT NULL,
	[Region] [nvarchar](30) NOT NULL,
	[HealthCheck] [nvarchar](max) NOT NULL,
	[Birthday] [datetime2](7) NOT NULL,
	[Status] [bit] NOT NULL,
	[SpeciesAnimalId] [nvarchar](5) NULL,
 CONSTRAINT [PK_Animals] PRIMARY KEY CLUSTERED 
(
	[AnimalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalSchedules]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalSchedules](
	[AnimalId] [nvarchar](5) NOT NULL,
	[ScheduleId] [nvarchar](5) NOT NULL,
	[Time] [datetime2](7) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_AnimalSchedules] PRIMARY KEY CLUSTERED 
(
	[ScheduleId] ASC,
	[AnimalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalTrainers]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalTrainers](
	[UserId] [nvarchar](5) NOT NULL,
	[AnimalId] [nvarchar](5) NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[TrainingStatus] [bit] NOT NULL,
 CONSTRAINT [PK_AnimalTrainers] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[AnimalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Areas]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Areas](
	[AreaId] [nvarchar](5) NOT NULL,
	[AreaName] [nvarchar](5) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Areas] PRIMARY KEY CLUSTERED 
(
	[AreaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cages]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cages](
	[CId] [nvarchar](5) NOT NULL,
	[MaxCapacity] [int] NOT NULL,
	[AnimalQuantity] [int] NOT NULL,
	[AreaId] [nvarchar](5) NOT NULL,
 CONSTRAINT [PK_Cages] PRIMARY KEY CLUSTERED 
(
	[CId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExperienceDetails]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExperienceDetails](
	[UserId] [nvarchar](5) NOT NULL,
	[ExperienceId] [nvarchar](5) NOT NULL,
	[Company] [nvarchar](30) NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Description] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_ExperienceDetails] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[ExperienceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Foods]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Foods](
	[FoodId] [nvarchar](5) NOT NULL,
	[FName] [nvarchar](30) NOT NULL,
	[Quantity] [int] NOT NULL,
	[ImportDate] [datetime2](7) NOT NULL,
	[ExpiredDate] [datetime2](7) NOT NULL,
	[Category] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Foods] PRIMARY KEY CLUSTERED 
(
	[FoodId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Guests]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Guests](
	[Email] [nvarchar](30) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[PhoneNumber] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_Guests] PRIMARY KEY CLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[News]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[NewsId] [nvarchar](5) NOT NULL,
	[AuthorName] [nvarchar](30) NOT NULL,
	[ReleaseDate] [datetime2](7) NOT NULL,
	[NewsTitle] [nvarchar](30) NOT NULL,
	[NewsContent] [nvarchar](max) NOT NULL,
	[NewsCategoryId] [nvarchar](5) NULL,
 CONSTRAINT [PK_News] PRIMARY KEY CLUSTERED 
(
	[NewsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NewsCategories]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NewsCategories](
	[Id] [nvarchar](5) NOT NULL,
	[CategoryName] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_NewsCategories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[OrderId] [nvarchar](5) NOT NULL,
	[TicketId] [nvarchar](5) NOT NULL,
	[EntryDate] [datetime2](7) NOT NULL,
	[BuyDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_OrderDetails] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[TicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [nvarchar](5) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[Phone] [nvarchar](10) NOT NULL,
	[TotalPrice] [float] NOT NULL,
	[GuestEmail] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reviews]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reviews](
	[ReviewId] [nvarchar](5) NOT NULL,
	[Title] [nvarchar](30) NOT NULL,
	[Description] [nvarchar](100) NOT NULL,
	[Rating] [real] NOT NULL,
	[GuestEmail] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_Reviews] PRIMARY KEY CLUSTERED 
(
	[ReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedules]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedules](
	[ScheduleId] [nvarchar](5) NOT NULL,
	[MealType] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_Schedules] PRIMARY KEY CLUSTERED 
(
	[ScheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SpeciesAnimals]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SpeciesAnimals](
	[Id] [nvarchar](5) NOT NULL,
	[SpeciesName] [nvarchar](30) NOT NULL,
	[Rarity] [bit] NOT NULL,
 CONSTRAINT [PK_SpeciesAnimals] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tickets]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tickets](
	[TicketId] [nvarchar](5) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[Price] [float] NOT NULL,
 CONSTRAINT [PK_Tickets] PRIMARY KEY CLUSTERED 
(
	[TicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [nvarchar](5) NOT NULL,
	[Email] [nvarchar](30) NOT NULL,
	[Password] [nvarchar](20) NOT NULL,
	[Firstname] [nvarchar](10) NOT NULL,
	[Lastname] [nvarchar](10) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[Phone] [nvarchar](10) NOT NULL,
	[Sex] [bit] NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NULL,
	[Status] [bit] NOT NULL,
	[RefreshToken] [nvarchar](max) NULL,
	[ResetPassToken] [nvarchar](max) NULL,
	[ResetTokenExpires] [datetime2](7) NULL,
	[Role] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WorkExperiences]    Script Date: 30/09/2023 10:09:58 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkExperiences](
	[ExperienceId] [nvarchar](5) NOT NULL,
	[Position] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_WorkExperiences] PRIMARY KEY CLUSTERED 
(
	[ExperienceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Foods] ADD  DEFAULT (N'') FOR [Category]
GO
ALTER TABLE [dbo].[OrderDetails] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [BuyDate]
GO
ALTER TABLE [dbo].[AnimalCages]  WITH CHECK ADD  CONSTRAINT [FK_AnimalCages_Animals_AnimalId] FOREIGN KEY([AnimalId])
REFERENCES [dbo].[Animals] ([AnimalId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalCages] CHECK CONSTRAINT [FK_AnimalCages_Animals_AnimalId]
GO
ALTER TABLE [dbo].[AnimalCages]  WITH CHECK ADD  CONSTRAINT [FK_AnimalCages_Cages_CageId] FOREIGN KEY([CageId])
REFERENCES [dbo].[Cages] ([CId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalCages] CHECK CONSTRAINT [FK_AnimalCages_Cages_CageId]
GO
ALTER TABLE [dbo].[AnimalFoods]  WITH CHECK ADD  CONSTRAINT [FK_AnimalFoods_Animals_AnimalId] FOREIGN KEY([AnimalId])
REFERENCES [dbo].[Animals] ([AnimalId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalFoods] CHECK CONSTRAINT [FK_AnimalFoods_Animals_AnimalId]
GO
ALTER TABLE [dbo].[AnimalFoods]  WITH CHECK ADD  CONSTRAINT [FK_AnimalFoods_Foods_FoodId] FOREIGN KEY([FoodId])
REFERENCES [dbo].[Foods] ([FoodId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalFoods] CHECK CONSTRAINT [FK_AnimalFoods_Foods_FoodId]
GO
ALTER TABLE [dbo].[Animals]  WITH CHECK ADD  CONSTRAINT [FK_Animals_SpeciesAnimals_SpeciesAnimalId] FOREIGN KEY([SpeciesAnimalId])
REFERENCES [dbo].[SpeciesAnimals] ([Id])
GO
ALTER TABLE [dbo].[Animals] CHECK CONSTRAINT [FK_Animals_SpeciesAnimals_SpeciesAnimalId]
GO
ALTER TABLE [dbo].[AnimalSchedules]  WITH CHECK ADD  CONSTRAINT [FK_AnimalSchedules_Animals_AnimalId] FOREIGN KEY([AnimalId])
REFERENCES [dbo].[Animals] ([AnimalId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalSchedules] CHECK CONSTRAINT [FK_AnimalSchedules_Animals_AnimalId]
GO
ALTER TABLE [dbo].[AnimalSchedules]  WITH CHECK ADD  CONSTRAINT [FK_AnimalSchedules_Schedules_ScheduleId] FOREIGN KEY([ScheduleId])
REFERENCES [dbo].[Schedules] ([ScheduleId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalSchedules] CHECK CONSTRAINT [FK_AnimalSchedules_Schedules_ScheduleId]
GO
ALTER TABLE [dbo].[AnimalTrainers]  WITH CHECK ADD  CONSTRAINT [FK_AnimalTrainers_Animals_AnimalId] FOREIGN KEY([AnimalId])
REFERENCES [dbo].[Animals] ([AnimalId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalTrainers] CHECK CONSTRAINT [FK_AnimalTrainers_Animals_AnimalId]
GO
ALTER TABLE [dbo].[AnimalTrainers]  WITH CHECK ADD  CONSTRAINT [FK_AnimalTrainers_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnimalTrainers] CHECK CONSTRAINT [FK_AnimalTrainers_Users_UserId]
GO
ALTER TABLE [dbo].[Cages]  WITH CHECK ADD  CONSTRAINT [FK_Cages_Areas_AreaId] FOREIGN KEY([AreaId])
REFERENCES [dbo].[Areas] ([AreaId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Cages] CHECK CONSTRAINT [FK_Cages_Areas_AreaId]
GO
ALTER TABLE [dbo].[ExperienceDetails]  WITH CHECK ADD  CONSTRAINT [FK_ExperienceDetails_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ExperienceDetails] CHECK CONSTRAINT [FK_ExperienceDetails_Users_UserId]
GO
ALTER TABLE [dbo].[ExperienceDetails]  WITH CHECK ADD  CONSTRAINT [FK_ExperienceDetails_WorkExperiences_ExperienceId] FOREIGN KEY([ExperienceId])
REFERENCES [dbo].[WorkExperiences] ([ExperienceId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ExperienceDetails] CHECK CONSTRAINT [FK_ExperienceDetails_WorkExperiences_ExperienceId]
GO
ALTER TABLE [dbo].[News]  WITH CHECK ADD  CONSTRAINT [FK_News_NewsCategories_NewsCategoryId] FOREIGN KEY([NewsCategoryId])
REFERENCES [dbo].[NewsCategories] ([Id])
GO
ALTER TABLE [dbo].[News] CHECK CONSTRAINT [FK_News_NewsCategories_NewsCategoryId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([OrderId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Orders_OrderId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Tickets_TicketId] FOREIGN KEY([TicketId])
REFERENCES [dbo].[Tickets] ([TicketId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Tickets_TicketId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Guests_GuestEmail] FOREIGN KEY([GuestEmail])
REFERENCES [dbo].[Guests] ([Email])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Guests_GuestEmail]
GO
ALTER TABLE [dbo].[Reviews]  WITH CHECK ADD  CONSTRAINT [FK_Reviews_Guests_GuestEmail] FOREIGN KEY([GuestEmail])
REFERENCES [dbo].[Guests] ([Email])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Reviews] CHECK CONSTRAINT [FK_Reviews_Guests_GuestEmail]
GO
