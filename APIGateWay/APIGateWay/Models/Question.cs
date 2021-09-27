using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateWay.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Title { get; set; }
        public string Tag { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        public int CreatorId { get; set; }
        public string CreatorPic { get; set; }
        public string CreatorName { get; set; }
        public int CategoryId { get; set; }
        public bool isPublish { get; set; }
        public bool isActive { get; set; }
        public string QuestionPicUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdateAt { get; set; }

        public IList<Answer> Answers { get; set; }
    }
}
