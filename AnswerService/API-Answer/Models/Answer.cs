using System;
using System.Text.Json;
using System.Linq;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiService.Models
{
    public class Answer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AnswerId { get; set; }
        [Column(TypeName = "varchar(500)")]
        public string AnswerContent { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string ImageUrl { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string RefUrl { get; set; }
        public int Rating { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}