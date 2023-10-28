using EmployeeAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Db
{
	public class ApplicationContext : DbContext
	{
		public DbSet<Employee> Employees { get; set; } = null!;

		public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{

		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration(new EmployeeConfiguration());
		}
	}
}