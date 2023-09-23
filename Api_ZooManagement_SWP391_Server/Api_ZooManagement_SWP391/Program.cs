using Api_ZooManagement_SWP391.Data;
using Api_ZooManagement_SWP391.Profiles;
using Api_ZooManagement_SWP391.Repositories;
using Api_ZooManagement_SWP391.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Create Author
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();
});
//Create JWTBearer Require and AddAuthen
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();


builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddDbContext<DataContext>();

// add scope for repository
builder.Services.AddScoped<AnimalFoodRepository>();
builder.Services.AddScoped<AnimalRepository>();
builder.Services.AddScoped<AnimalScheduleRepository>();
builder.Services.AddScoped<AnimalTrainerRepository>();
builder.Services.AddScoped<FoodCategoryRepository>();
builder.Services.AddScoped<FoodRepository>();
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<WorkExperienceRepository>();
builder.Services.AddScoped<ExperienceDetailRepository>();
builder.Services.AddScoped<ScheduleRepository>();
builder.Services.AddScoped<SpeciesAnimalRepository>();
builder.Services.AddScoped<ReviewRepository>();
builder.Services.AddScoped<GuestRepository>();
builder.Services.AddScoped<OrderRepository>();
builder.Services.AddScoped<OrderDetailRepository>();
builder.Services.AddScoped<TicketRepository>();
builder.Services.AddScoped<NewRepository>();
builder.Services.AddScoped<NewCategoryRepository>();
builder.Services.AddScoped<AreaRepository>();
builder.Services.AddScoped<CageRepository>();
builder.Services.AddScoped<AnimalCageRepository>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x => x
             .AllowAnyMethod()
             .AllowAnyHeader()
             .SetIsOriginAllowed(origin => true) // allow any origin
             .AllowCredentials()); // allow credentials

app.UseHttpsRedirection();
//user Authen
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

