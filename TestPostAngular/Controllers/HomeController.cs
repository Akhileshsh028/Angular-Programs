using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestPostAngular.Models;

namespace TestPostAngular.Controllers
{
    public class HomeController : ApiController
    {

        public List<Employee> GetEmployees()
        {
            return new List<Employee>
            {
                new Employee{Id=101, Name="Akhilesh Kumar", Location="Indore" , Salary=99465 , IsPermanent= true },
                new Employee{Id=102, Name="Saurabh Tiwari", Location="Mumbai" , Salary=57465 ,IsPermanent= false},
                new Employee{Id=103, Name="Ashok Verma", Location="Noida" , Salary=58465 ,IsPermanent= true},
                new Employee{Id=104, Name="Shubham Mannewar", Location="Chennai" , Salary=65465 ,IsPermanent= false},
                new Employee{Id=101, Name="Allwin Charles", Location="Jabalpur" , Salary=90765 ,IsPermanent= true}
            };
        }
        
        [HttpPost]
        public bool ValidateLogin(loginModel _loginModel)
        {
            if(_loginModel.username=="Akhilesh" && _loginModel.password == "Akhilesh@123")
            {
                return true;    
            } else
            {
                return false;
            }
        }
    }
}
