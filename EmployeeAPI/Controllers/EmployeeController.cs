using EmployeeAPI.Models;
using EmployeeAPI.Models.Dto;
using EmployeeAPI.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
	[ApiController]
	[Route("api/employees")]
	public class EmployeeController : ControllerBase
	{

		private readonly IEmployeeService _employeeService;

		public EmployeeController(ILogger<EmployeeController> logger, IEmployeeService employeeService)
		{
			_employeeService = employeeService;
		}

		[ProducesResponseType(typeof(List<Employee>), 200)]
		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			List<Employee> employees = await _employeeService.GetAll();

			return Ok(employees);
		}


		[ProducesResponseType(typeof(Employee), 200)]
		[HttpPost]
		public async Task<IActionResult> Create([FromBody] EmployeeCreateDto dto)
		{
			Employee employee = await _employeeService.Create(dto);

			return Ok(employee);
		}


		[ProducesResponseType(typeof(Employee), 200)]
		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] EmployeeUpdateDto dto)
		{
			Employee employee = await _employeeService.Update(id, dto);

			return Ok(employee);
		}


		[ProducesResponseType(typeof(bool), 200)]
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			bool result = await _employeeService.Delete(id);

			return Ok(result);
		}
	}
}