﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestPostAngular.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int Salary { get; set; }
        public bool IsPermanent { get; set; }

    }
}