using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Models
{
	public class Employee
	{
		public int EmployeeId { get; set; }
		public string? Department { get; set; }
		public string? FirstName { get; set; }
		public string? LastName { get; set; }
		public string? Patronomyc { get; set; }
		public DateTime Birthday { get; set; }
		public DateTime DateOfEmployment { get; set; }
		public int Salary { get; set; }
	}
	public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
	{
		public void Configure(EntityTypeBuilder<Employee> builder)
		{
			builder.ToTable("employees");
			builder.HasKey(p => p.EmployeeId);
			builder.Property(p => p.EmployeeId).HasColumnName("employee_id");
			builder.Property(p => p.Department).HasColumnName("department");
			builder.Property(p => p.FirstName).HasColumnName("first_name");
			builder.Property(p => p.LastName).HasColumnName("last_name");
			builder.Property(p => p.Patronomyc).HasColumnName("patronomyc");
			builder.Property(p => p.Birthday).HasColumnName("birthday");
			builder.Property(p => p.DateOfEmployment).HasColumnName("date_of_employment");
			builder.Property(p => p.Salary).HasColumnName("salary");

		}
	}
}
