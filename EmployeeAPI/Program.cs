using EmployeeAPI.Db;
using EmployeeAPI.Services;
using EmployeeAPI.Services.Contracts;
using Microsoft.EntityFrameworkCore;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(
	builder.Configuration.GetConnectionString("myDbSql")));

builder.Services.AddScoped<IEmployeeService, EmployeeService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(opt => opt.AllowAnyHeader()
		.WithOrigins("http://localhost:4200")
		.AllowAnyMethod()
		.AllowCredentials()
		.Build());

app.MapControllers();

app.Run();
