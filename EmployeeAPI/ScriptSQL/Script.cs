using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Collections.Generic;

namespace EmployeeAPI.ScriptSQL
{
	public class Script
	{
		/*
		 * 
		 *		Выборка всех сотрудников
		 * 
					SELECT*
					FROM dbo.employees;

				Выборка всех сотрудников у кого зп больше 10000

					SELECT*
					FROM dbo.employees
					WHERE salary > 10000;

				Удалить всех сотрудников с возростом больше 70 лет

					DELETE
					FROM dbo.employees
					WHERE DATEDIFF(yy, birthday, GETDATE()) > 70
				
				Обновить зп всем сотрудникам до 15000, у кого она меньше
					
					UPDATE dbo.employees
					SET salary = 15000
					WHERE salary < 15000;

		*/
	}
}
