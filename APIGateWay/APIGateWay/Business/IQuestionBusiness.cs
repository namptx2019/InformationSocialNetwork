using APIGateWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateWay.Business
{
    public interface IQuestionBusiness
    {
        public Task<IEnumerable<Question>> GetAllQuestion();
        public Task<Question> GetQuestionDetail(int id);
        public Task EditQuestion(int id, Question question);
        public Task<Question> CreateQuestion(Question question);
        public Task DeleteQuestion(int id);
        public Task<IEnumerable<Category>> GetAllCategories();
        public Task RatingQuestion(int questionId, int rating);
        public Task<IEnumerable<Question>> GetUserQuestions(int userId);
    }
}
