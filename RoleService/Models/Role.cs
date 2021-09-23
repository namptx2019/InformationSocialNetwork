using System;
using System.Text.Json;
using System.Linq;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiService.Models
{
    public class Role
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RoleId { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string RoleName { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }

        public static void Copy(ref Role model, ref Role copy)
        {
            model.RoleName = copy.RoleName;
            model.createDate = copy.createDate;
            model.updateDate = copy.updateDate;
        }
    }
}
