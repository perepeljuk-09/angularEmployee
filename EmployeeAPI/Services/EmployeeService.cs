using EmployeeAPI.Db;
using EmployeeAPI.Models;
using EmployeeAPI.Models.Dto;
using EmployeeAPI.Services.Contracts;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Services
{
	public class EmployeeService : IEmployeeService
	{
		private readonly ApplicationContext _dbContext;
		public EmployeeService(ApplicationContext dbContext)
		{
			_dbContext = dbContext;
		}

		public async Task<List<Employee>> GetAll()
		{
			List<Employee> employees = await _dbContext.Employees.ToListAsync();

			return employees;
		}
		public async Task<Employee> Create(EmployeeCreateDto dto)
		{
			Employee newEmp = new Employee();

			newEmp.Department = dto.Department;
			newEmp.FirstName = dto.FirstName;
			newEmp.LastName = dto.LastName;
			newEmp.Patronomyc = dto.Patronomyc;
			newEmp.Birthday = dto.Birthday;
			newEmp.DateOfEmployment = dto.DateOfEmployment;
			newEmp.Salary = dto.Salary;

			await _dbContext.Employees.AddAsync(newEmp);
			await _dbContext.SaveChangesAsync();

			return newEmp;

		}
		public async Task<Employee> Update(int id, EmployeeUpdateDto dto)
		{

			Employee? empToUpdate = await _dbContext.Employees.FirstOrDefaultAsync(x => x.EmployeeId == id);

			if (empToUpdate == null)
				throw new Exception("emp not found");


			empToUpdate.Department = dto.Department;
			empToUpdate.FirstName = dto.FirstName;
			empToUpdate.LastName = dto.LastName;
			empToUpdate.Patronomyc = dto.Patronomyc;
			empToUpdate.Birthday = dto.Birthday;
			empToUpdate.DateOfEmployment = dto.DateOfEmployment;
			empToUpdate.Salary = dto.Salary;

			_dbContext.Employees.Update(empToUpdate);
			await _dbContext.SaveChangesAsync();

			return empToUpdate;
		}
		public async Task<bool> Delete(int id)
		{

			Employee? empToDelete = await _dbContext.Employees.FirstOrDefaultAsync(x => x.EmployeeId == id);

			if (empToDelete == null)
				throw new Exception("emp not found");

			_dbContext.Employees.Remove(empToDelete);
			await _dbContext.SaveChangesAsync();

			return true;
		}
	}
}
