using DAL.Data;
using DAL.Repositories;
using BBL.Services;
using BBL.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;
using Microsoft.EntityFrameworkCore;
using DAL.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Create Authorization
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
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ZooManagement"));
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
builder.Services.AddScoped<ICageService, CageService>();
builder.Services.AddScoped<IAreaService, AreaService>();
builder.Services.AddScoped<ISpeciesAnimalsService, SpeciesAnimalsService>();
builder.Services.AddScoped<IFoodService, FoodService>();
// add scope for repository
builder.Services.AddScoped<IGenericRepository<User>, GenericRepository<User>>();
builder.Services.AddScoped<IGenericRepository<Cage>, GenericRepository<Cage>>();
builder.Services.AddScoped<IGenericRepository<Area>, GenericRepository<Area>>();
builder.Services.AddScoped<IGenericRepository<SpeciesAnimal>, GenericRepository<SpeciesAnimal>>();
builder.Services.AddScoped<IGenericRepository<Food>, GenericRepository<Food>>();

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

