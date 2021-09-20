using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuestionService.Models
{
    public class Question
    {
        [Key]
        public int QuestionId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }
        public string Tag { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        public int CreatorId { get; set; }
        public int CategoryId { get; set; }
        public bool isPublish { get; set; }
        public bool isActive { get; set; }
        public string QuestionPicUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdateAt { get; set; }
    }
}
