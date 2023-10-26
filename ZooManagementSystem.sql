USE [ZooManagement]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 26/10/2023 8:33:38 CH ******/
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
/****** Object:  Table [dbo].[AnimalCages]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalCages](
	[AnimalId] [nvarchar](6) NOT NULL,
	[CageId] [nvarchar](5) NOT NULL,
	[EntryCageDate] [datetime2](7) NOT NULL,
	[OutCageDate] [datetime2](7) NULL,
 CONSTRAINT [PK_AnimalCages] PRIMARY KEY CLUSTERED 
(
	[AnimalId] ASC,
	[CageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalFoods]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalFoods](
	[AnimalId] [nvarchar](6) NOT NULL,
	[FoodId] [nvarchar](6) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Amount] [real] NOT NULL,
 CONSTRAINT [PK_AnimalFoods] PRIMARY KEY CLUSTERED 
(
	[AnimalId] ASC,
	[FoodId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Animals]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Animals](
	[AnimalId] [nvarchar](6) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Sex] [bit] NOT NULL,
	[Region] [nvarchar](30) NOT NULL,
	[HealthCheck] [nvarchar](max) NOT NULL,
	[Birthday] [datetime2](7) NOT NULL,
	[Status] [bit] NOT NULL,
	[Rarity] [bit] NOT NULL,
	[AnimalImage] [nvarchar](max) NULL,
	[SpeciesId] [nvarchar](6) NOT NULL,
 CONSTRAINT [PK_Animals] PRIMARY KEY CLUSTERED 
(
	[AnimalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalSchedules]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalSchedules](
	[AnimalId] [nvarchar](6) NOT NULL,
	[ScheduleId] [nvarchar](6) NOT NULL,
	[Time] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_AnimalSchedules] PRIMARY KEY CLUSTERED 
(
	[ScheduleId] ASC,
	[AnimalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalSpecies]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalSpecies](
	[SpeciesId] [nvarchar](6) NOT NULL,
	[SpeciesName] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_AnimalSpecies] PRIMARY KEY CLUSTERED 
(
	[SpeciesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnimalTrainers]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnimalTrainers](
	[UserId] [nvarchar](6) NOT NULL,
	[AnimalId] [nvarchar](6) NOT NULL,
	[StartTrainDate] [datetime2](7) NOT NULL,
	[EndTrainDate] [datetime2](7) NULL,
 CONSTRAINT [PK_AnimalTrainers] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[AnimalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Areas]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Areas](
	[AreaId] [nvarchar](6) NOT NULL,
	[AreaName] [nvarchar](1) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Areas] PRIMARY KEY CLUSTERED 
(
	[AreaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cages]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cages](
	[CId] [nvarchar](5) NOT NULL,
	[Name] [nvarchar](20) NOT NULL,
	[MaxCapacity] [int] NOT NULL,
	[AnimalQuantity] [int] NOT NULL,
	[AreaId] [nvarchar](6) NOT NULL,
 CONSTRAINT [PK_Cages] PRIMARY KEY CLUSTERED 
(
	[CId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExperienceDetails]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExperienceDetails](
	[UserId] [nvarchar](6) NOT NULL,
	[ExperienceId] [nvarchar](6) NOT NULL,
	[Company] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_ExperienceDetails] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[ExperienceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FoodCategories]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FoodCategories](
	[CategoryId] [nvarchar](6) NOT NULL,
	[CategoryName] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_FoodCategories] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Foods]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Foods](
	[FoodId] [nvarchar](6) NOT NULL,
	[FName] [nvarchar](30) NOT NULL,
	[Quantity] [int] NOT NULL,
	[ImportDate] [datetime2](7) NOT NULL,
	[ExpiredDate] [datetime2](7) NOT NULL,
	[CategoryId] [nvarchar](6) NOT NULL,
 CONSTRAINT [PK_Foods] PRIMARY KEY CLUSTERED 
(
	[FoodId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[News]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[NewsId] [nvarchar](6) NOT NULL,
	[ReleaseDate] [datetime2](7) NOT NULL,
	[NewsTitle] [nvarchar](30) NOT NULL,
	[NewsContent] [nvarchar](max) NOT NULL,
	[NewsImage] [nvarchar](max) NULL,
	[Checked] [bit] NOT NULL,
	[Status] [bit] NOT NULL,
	[UserId] [nvarchar](6) NOT NULL,
 CONSTRAINT [PK_News] PRIMARY KEY CLUSTERED 
(
	[NewsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [nvarchar](6) NOT NULL,
	[Email] [nvarchar](30) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[PhoneNumber] [nvarchar](10) NOT NULL,
	[TotalPrice] [float] NOT NULL,
	[TransactionId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderTickets]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderTickets](
	[OrderId] [nvarchar](6) NOT NULL,
	[TicketId] [nvarchar](6) NOT NULL,
	[TicketQuantity] [int] NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_OrderTickets] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[TicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reviews]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reviews](
	[ReviewId] [nvarchar](6) NOT NULL,
	[Email] [nvarchar](30) NOT NULL,
	[CompleteName] [nvarchar](30) NOT NULL,
	[Message] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Reviews] PRIMARY KEY CLUSTERED 
(
	[ReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedules]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedules](
	[ScheduleId] [nvarchar](6) NOT NULL,
	[ScheduleName] [nvarchar](30) NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_Schedules] PRIMARY KEY CLUSTERED 
(
	[ScheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tickets]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tickets](
	[TicketId] [nvarchar](6) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[Price] [float] NOT NULL,
 CONSTRAINT [PK_Tickets] PRIMARY KEY CLUSTERED 
(
	[TicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transactions]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transactions](
	[TransactionId] [nvarchar](450) NOT NULL,
	[PaymentMethod] [nvarchar](20) NOT NULL,
	[TransactionInfo] [nvarchar](50) NOT NULL,
	[TransactionDate] [datetime2](7) NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_Transactions] PRIMARY KEY CLUSTERED 
(
	[TransactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [nvarchar](6) NOT NULL,
	[Email] [nvarchar](30) NOT NULL,
	[PasswordHash] [varbinary](max) NOT NULL,
	[PasswordSalt] [varbinary](max) NOT NULL,
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
	[UserImage] [nvarchar](max) NULL,
	[CountAnimal] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WorkExperiences]    Script Date: 26/10/2023 8:33:38 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkExperiences](
	[ExperienceId] [nvarchar](6) NOT NULL,
	[Position] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_WorkExperiences] PRIMARY KEY CLUSTERED 
(
	[ExperienceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231025142511_InitDB', N'6.0.22')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231026121256_UpdateDB', N'6.0.22')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231026123022_Update', N'6.0.22')
GO
INSERT [dbo].[AnimalCages] ([AnimalId], [CageId], [EntryCageDate], [OutCageDate]) VALUES (N'AN0001', N'A0001', CAST(N'2023-10-26T20:22:20.4608708' AS DateTime2), NULL)
INSERT [dbo].[AnimalCages] ([AnimalId], [CageId], [EntryCageDate], [OutCageDate]) VALUES (N'AN0002', N'A0002', CAST(N'2023-10-26T20:26:48.0106960' AS DateTime2), NULL)
GO
INSERT [dbo].[AnimalFoods] ([AnimalId], [FoodId], [Description], [Amount]) VALUES (N'AN0001', N'FD0002', N'Eat from now - 12/10/2025', 5)
INSERT [dbo].[AnimalFoods] ([AnimalId], [FoodId], [Description], [Amount]) VALUES (N'AN0002', N'FD0002', N'Eat from now - 1-5-2025', 4)
GO
INSERT [dbo].[Animals] ([AnimalId], [Name], [Description], [Sex], [Region], [HealthCheck], [Birthday], [Status], [Rarity], [AnimalImage], [SpeciesId]) VALUES (N'AN0001', N'Africa Lion', N'a large wild animal of the cat family with yellowish-brown fur that lives in Africa', 1, N'Africa', N'Very good', CAST(N'2023-10-26T13:19:06.9880000' AS DateTime2), 1, 0, N'string', N'SA0002')
INSERT [dbo].[Animals] ([AnimalId], [Name], [Description], [Sex], [Region], [HealthCheck], [Birthday], [Status], [Rarity], [AnimalImage], [SpeciesId]) VALUES (N'AN0002', N'Asia Tiger', N'the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside', 1, N'Asia', N'Very good', CAST(N'2023-10-26T13:24:36.9940000' AS DateTime2), 1, 0, N'string', N'SA0004')
GO
INSERT [dbo].[AnimalSpecies] ([SpeciesId], [SpeciesName]) VALUES (N'SA0001', N'Snake')
INSERT [dbo].[AnimalSpecies] ([SpeciesId], [SpeciesName]) VALUES (N'SA0002', N'Lion')
INSERT [dbo].[AnimalSpecies] ([SpeciesId], [SpeciesName]) VALUES (N'SA0003', N'Bird')
INSERT [dbo].[AnimalSpecies] ([SpeciesId], [SpeciesName]) VALUES (N'SA0004', N'Tiger')
INSERT [dbo].[AnimalSpecies] ([SpeciesId], [SpeciesName]) VALUES (N'SA0005', N'Bear')
INSERT [dbo].[AnimalSpecies] ([SpeciesId], [SpeciesName]) VALUES (N'SA0006', N'Monkey')
GO
INSERT [dbo].[AnimalTrainers] ([UserId], [AnimalId], [StartTrainDate], [EndTrainDate]) VALUES (N'ZT0001', N'AN0001', CAST(N'2023-10-26T20:22:20.4508694' AS DateTime2), NULL)
INSERT [dbo].[AnimalTrainers] ([UserId], [AnimalId], [StartTrainDate], [EndTrainDate]) VALUES (N'ZT0002', N'AN0002', CAST(N'2023-10-26T20:26:47.9983104' AS DateTime2), NULL)
GO
INSERT [dbo].[Areas] ([AreaId], [AreaName], [Description]) VALUES (N'AE0001', N'A', N'This is area for most of carnivore animals')
INSERT [dbo].[Areas] ([AreaId], [AreaName], [Description]) VALUES (N'AE0002', N'B', N'This is area for most of graminivore, monkey')
INSERT [dbo].[Areas] ([AreaId], [AreaName], [Description]) VALUES (N'AE0003', N'C', N'This is area for most of insect animals')
INSERT [dbo].[Areas] ([AreaId], [AreaName], [Description]) VALUES (N'AE0004', N'D', N'This is area for most of flying animals')
INSERT [dbo].[Areas] ([AreaId], [AreaName], [Description]) VALUES (N'AE0005', N'E', N'This is area for most of reptilian animals')
GO
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'A0001', N'Lion', 3, 1, N'AE0001')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'A0002', N'Tiger', 2, 1, N'AE0001')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'A0003', N'Leopard', 2, 0, N'AE0001')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'A0004', N'Puma', 5, 0, N'AE0001')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'B0001', N'Goat', 20, 0, N'AE0002')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'B0002', N'Sheep', 20, 0, N'AE0002')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'B0003', N'Dear', 10, 0, N'AE0002')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'B0004', N'Monkey', 20, 0, N'AE0002')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'C0001', N'Butterfly', 20, 0, N'AE0003')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'D0001', N'Flamingo', 10, 0, N'AE0004')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'D0002', N'Hawk', 4, 0, N'AE0004')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'D0003', N'Peacock', 10, 0, N'AE0004')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'E0001', N'Alligator', 10, 0, N'AE0005')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'E0002', N'Iguana', 5, 0, N'AE0005')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'E0003', N'Python', 2, 0, N'AE0005')
INSERT [dbo].[Cages] ([CId], [Name], [MaxCapacity], [AnimalQuantity], [AreaId]) VALUES (N'E0004', N'Snake', 2, 0, N'AE0005')
GO
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ST0001', N'WE0001', N'F-Animal')
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ST0002', N'WE0001', N'F-Animal')
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ST0003', N'WE0001', N'F-Animal')
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ZT0001', N'WE0002', N'F-Animal')
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ZT0002', N'WE0002', N'F-Animal')
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ZT0003', N'WE0002', N'F-Animal')
INSERT [dbo].[ExperienceDetails] ([UserId], [ExperienceId], [Company]) VALUES (N'ZT0004', N'WE0002', N'F-Animal')
GO
INSERT [dbo].[FoodCategories] ([CategoryId], [CategoryName]) VALUES (N'FC0001', N'Fruit')
INSERT [dbo].[FoodCategories] ([CategoryId], [CategoryName]) VALUES (N'FC0002', N'Vegetable')
INSERT [dbo].[FoodCategories] ([CategoryId], [CategoryName]) VALUES (N'FC0003', N'Raw meet')
INSERT [dbo].[FoodCategories] ([CategoryId], [CategoryName]) VALUES (N'FC0004', N'Sea food')
GO
INSERT [dbo].[Foods] ([FoodId], [FName], [Quantity], [ImportDate], [ExpiredDate], [CategoryId]) VALUES (N'FD0001', N'Banana', 100, CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), N'FC0001')
INSERT [dbo].[Foods] ([FoodId], [FName], [Quantity], [ImportDate], [ExpiredDate], [CategoryId]) VALUES (N'FD0002', N'Pork', 100, CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), N'FC0003')
INSERT [dbo].[Foods] ([FoodId], [FName], [Quantity], [ImportDate], [ExpiredDate], [CategoryId]) VALUES (N'FD0003', N'Mutton', 100, CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), N'FC0003')
INSERT [dbo].[Foods] ([FoodId], [FName], [Quantity], [ImportDate], [ExpiredDate], [CategoryId]) VALUES (N'FD0004', N'Chicken', 100, CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), N'FC0003')
INSERT [dbo].[Foods] ([FoodId], [FName], [Quantity], [ImportDate], [ExpiredDate], [CategoryId]) VALUES (N'FD0005', N'Cruciferous vegetables', 100, CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), N'FC0002')
INSERT [dbo].[Foods] ([FoodId], [FName], [Quantity], [ImportDate], [ExpiredDate], [CategoryId]) VALUES (N'FD0006', N'Fish', 100, CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), CAST(N'2023-10-26T12:56:21.2480000' AS DateTime2), N'FC0004')
GO
INSERT [dbo].[Schedules] ([ScheduleId], [ScheduleName], [Status]) VALUES (N'SC0001', N'Breakfast', 1)
INSERT [dbo].[Schedules] ([ScheduleId], [ScheduleName], [Status]) VALUES (N'SC0002', N'Lunch', 1)
INSERT [dbo].[Schedules] ([ScheduleId], [ScheduleName], [Status]) VALUES (N'SC0003', N'Dinner', 1)
INSERT [dbo].[Schedules] ([ScheduleId], [ScheduleName], [Status]) VALUES (N'SC0004', N'Train', 1)
GO
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ST0001', N'hunglvse171595@fpt.edu.vn', 0x743F8AC47BAB4E66A925A5BC72F28809EE512D5200164D64D9C6133F3EA3D602AD669F3460540C52732EB6EE9892DA80E970EDA689279B0727D6A3F1A66846C7, 0xD33D2C2AA8538C0816A3DD3365A6485B58548CE69966F24C9A5F9D7A8E7F38BE8D20AEA80EAE8A53DEA7E8120C7AB9EBA3B5700B680D8B555BA28782C6DB69223D427EFB208DDFFF6A25D84B0204043F860606DD9A013275EAF2C59B0B9EB22D1D9AD1068A98B1706534BF2CC95858AD286DD01E1B0205ADD2FE5C1383D43BB7, N'Le', N'Hung', N'Quan 9, Viet Nam', N'0919225433', 1, CAST(N'2023-10-26T19:51:59.0822356' AS DateTime2), NULL, 1, NULL, NULL, NULL, 2, N'string', 0)
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ST0002', N'viltse171600@fpt.edu.vn', 0xEC0EE87EE4F72AE5240E2CA499DE520143F3192B0D7D1E61E2C564FEAFCEA91C6A17BDD77EF2E1F6A8CF11FAB3C69BB25302C9BF17A6E3A0DD32C7ADB6277F0D, 0x664BBD4AE25E2CD74C084770EA6297EF00508DFD9F0CCCA91A6279C01B639214C187BFBB8F37D2E605CF0CCF53A5082B3DB8250584EF8F19C9C92F2AED72DCBCF120534E2B4C0F66401CC835AF71E8158F21B7F0A2B66EE5CE77820BB742443CF50630799EA7CAC6CDFE7976680B139CA3D1608F63DDE9386933AAC8C50228F0, N'Luu', N'Vi', N'Quan 12, Viet Nam', N'0919225423', 1, CAST(N'2023-10-26T19:52:33.9140016' AS DateTime2), NULL, 1, NULL, NULL, NULL, 2, N'string', 0)
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ST0003', N'namnpse171595@fpt.edu.vn', 0x95C8CDCACA3DAEB5167B85695E4A934E1E9496BAA8A8F4C793EE0F5789CC135C345881EAF262AB451BEF1A1F02DE1992DF95A08B16D61E4C877EE50D6E05EA0E, 0xFC554D6704A173CB2CDA88A3AA86A366B90A5C585B1FBC5CB72E441C039ADAF724E219234E5007CEB6B8D03A5E6B511FD4A62A47868379EFF4A8D81D55C12BA56244DB27B89DCEDB589841DF0A8218DC63AA5995FCDAC8DB6646332DB215786DD357B004F080C1619236799A84D590CC87392CCCEF347D8881AA0FFDE86CD841, N'Nguyen', N'Nam', N'Binh Duong, Viet Nam', N'0919235423', 1, CAST(N'2023-10-26T19:53:01.8473079' AS DateTime2), NULL, 1, NULL, NULL, NULL, 2, N'string', 0)
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ZT0001', N'trinhse171609@fpt.edu.vn', 0x2EAF71F0D22488DBB0C65BEDFA14BDD4AA68746EAE674B921945777247D6169505D935788D8C21DE060CF510E59E267D245FD1A92CB535B0DFF2BE4A4C2D049B, 0xFB204F61371EADAFB34DEC39F39A35543F82CCBE717893581FF5C481AC72230570CC75189F61809000653A76C9DFD6167B805EEA006084343D6F1C2A4A73DA54D36EC8EA0B831F79A27E342A7B7389DD508D93ED13D123939E7FDCD5859D132053DDC8FDCB14E05B6F072341AA9877F8D0FD4A3E9A7F1A6CD712211895093972, N'Nguyen', N'Tri', N'Quan 12, Viet Nam', N'0919222333', 1, CAST(N'2023-10-26T19:51:29.9037707' AS DateTime2), NULL, 1, NULL, NULL, NULL, 3, N'string', 1)
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ZT0002', N'leviethung220703@gmail.com', 0x8ABD375BBBF047AD451A6AAF0B90ED1B04E872446EE7B9CE18C3780599AF8D8FCD4B8DB7E5EA60ABF18CAE833B5C23896147FB0A0217D20D77D30B440E606C3C, 0x789E52C6574D558D1F59BA0D4E7704E2A32CA788B7716C61FCF469E7CCC4A48607A69E0B1ED41ADB87A2A4CCA9737F93251A5FBA36AF9935712FCDA18DDBB27862DE01740D8A797612EE337A0F1CD7A94B1148274D017B8C3E2DF89228E40AE58A1644923D332F829E847557AC053D2F1E6796569890C07210FC1903BF06879E, N'Le', N'Hung', N'Quan 9, Viet Nam', N'0919235523', 1, CAST(N'2023-10-26T19:53:51.1151908' AS DateTime2), NULL, 1, NULL, NULL, NULL, 3, N'string', 1)
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ZT0003', N'luutrieuvi2003@gmail.com', 0xF0737CB3E5905C98D2F1813D61BF2993C4A7BBDF4DF51CC2AACC24C45FB45815C60A74BEDFA00C7EAF21D2B37F033538B0C4799D27817C522B118A2FC8B39861, 0x69E3F5B818F70A5F4E0D9225DC49878D06CC566FDB7361E6356663D8EF54C07AEFB0538E940EB6C73FE6E2A6514DB1683D5E9E16D4AEF9BC9B5E2D02646E6328BA0A1A32BDBEFE4FA919C8D102C264A2E3D8FE39F71197A5253559DDAF1CEB7596601658A60B3A65BF5798BFDDD579FA796D4284BFBCAEECE3E2A4D798A5E1A0, N'Luu', N'Vi', N'Quan 12, Viet Nam', N'0919235563', 1, CAST(N'2023-10-26T19:54:24.8544756' AS DateTime2), NULL, 1, NULL, NULL, NULL, 3, N'string', 0)
INSERT [dbo].[Users] ([UserId], [Email], [PasswordHash], [PasswordSalt], [Firstname], [Lastname], [Address], [Phone], [Sex], [StartDate], [EndDate], [Status], [RefreshToken], [ResetPassToken], [ResetTokenExpires], [Role], [UserImage], [CountAnimal]) VALUES (N'ZT0004', N'npnam03@gmail.com', 0xF086AB6322AD9AF3D4D3A5195431A99FC76283BAB10C63D5C4F8FAB6E8F7C49056B2A5821A477CCB50FA591F0055FCD959BA1AE02BFBBF5AFE3F1ED7081BF36F, 0x667FE1EB33A1D8ECCBF8B0F64DBD018FCC8CF21342FC46AB10DEC1B55B9D820F7B1DB01626EB40E37F31740F9245475CA54CD883D05578389D651E2853689C21CC4D06B55D843F072D79D60ECA85AF1C2468EF062E3C99E114268F72AACC966AC6CFD6898BB12F619BBCC6B9405BF9AD72A367E8588DF183587ADC53B4E92EFC, N'Nguyen', N'Nam', N'Binh Duong, Viet Nam', N'0919235565', 1, CAST(N'2023-10-26T19:54:47.5935383' AS DateTime2), NULL, 1, NULL, NULL, NULL, 3, N'string', 0)
GO
INSERT [dbo].[WorkExperiences] ([ExperienceId], [Position]) VALUES (N'WE0001', N'Staff')
INSERT [dbo].[WorkExperiences] ([ExperienceId], [Position]) VALUES (N'WE0002', N'Trainer')
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [CountAnimal]
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
ALTER TABLE [dbo].[Animals]  WITH CHECK ADD  CONSTRAINT [FK_Animals_AnimalSpecies_SpeciesId] FOREIGN KEY([SpeciesId])
REFERENCES [dbo].[AnimalSpecies] ([SpeciesId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Animals] CHECK CONSTRAINT [FK_Animals_AnimalSpecies_SpeciesId]
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
ALTER TABLE [dbo].[Foods]  WITH CHECK ADD  CONSTRAINT [FK_Foods_FoodCategories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[FoodCategories] ([CategoryId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Foods] CHECK CONSTRAINT [FK_Foods_FoodCategories_CategoryId]
GO
ALTER TABLE [dbo].[News]  WITH CHECK ADD  CONSTRAINT [FK_News_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[News] CHECK CONSTRAINT [FK_News_Users_UserId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Transactions_TransactionId] FOREIGN KEY([TransactionId])
REFERENCES [dbo].[Transactions] ([TransactionId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Transactions_TransactionId]
GO
ALTER TABLE [dbo].[OrderTickets]  WITH CHECK ADD  CONSTRAINT [FK_OrderTickets_Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([OrderId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderTickets] CHECK CONSTRAINT [FK_OrderTickets_Orders_OrderId]
GO
ALTER TABLE [dbo].[OrderTickets]  WITH CHECK ADD  CONSTRAINT [FK_OrderTickets_Tickets_TicketId] FOREIGN KEY([TicketId])
REFERENCES [dbo].[Tickets] ([TicketId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderTickets] CHECK CONSTRAINT [FK_OrderTickets_Tickets_TicketId]
GO
