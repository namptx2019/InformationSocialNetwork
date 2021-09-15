using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserService.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Password { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string UserName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string PhoneNumber { get; set; }
        public int Rating { get; set; }
        public bool isActive { get; set; }
        public bool isAdmin { get; set; }
        public string UserPic { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdateAt { get; set; }
    }
}
