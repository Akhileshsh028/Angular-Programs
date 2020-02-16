using Angular_Session_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular_Session_2.Controllers
{
    public class HomeController : ApiController
    {
        [HttpPost]
        public bool ValidateLogin(AddLoginData addLoginData)
        {
            if(addLoginData.UserName=="Akhilesh")
            {
                return true;
            } else
            {
                return false;
            }
        }

    }
}
