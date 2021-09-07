using System;
using System.Collections.Generic;
using System.Text;

namespace UserService.Domain
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string RoleId { get; set; }
        public int Rating { get; set; }
        public bool isActive { get; set; }
    }
}
