namespace EmployeeAPI.Models.Dto
{
	public class EmployeeUpdateDto
	{
		public string? Department { get; set; }
		public string? FirstName { get; set; }
		public string? LastName { get; set; }
		public string? Patronomyc { get; set; }
		public DateTime Birthday { get; set; }
		public DateTime DateOfEmployment { get; set; }
		public int Salary { get; set; }
	}
}
