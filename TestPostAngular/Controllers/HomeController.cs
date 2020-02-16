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
