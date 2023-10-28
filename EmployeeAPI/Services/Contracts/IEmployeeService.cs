using EmployeeAPI.Models;
using EmployeeAPI.Models.Dto;

namespace EmployeeAPI.Services.Contracts
{
	public interface IEmployeeService
	{
		Task<List<Employee>> GetAll();
		Task<Employee> Create(EmployeeCreateDto dto);
		Task<Employee> Update(int id, EmployeeUpdateDto dto);
		Task<bool> Delete(int id);

	}
}
