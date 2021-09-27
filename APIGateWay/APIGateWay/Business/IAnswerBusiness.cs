using APIGateWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateWay.Business
{
    public interface IAnswerBusiness
    {
        public Task<IEnumerable<Answer>> GetQuestionAnswers(int questionId);
        public Task<IEnumerable<Answer>> GetUserAllAnswers(int userId);
        public Task<Answer> CreateAnswer(Answer answer);
        public Task EditAnswer(Answer answer);
        public Task DeleteAnswer(int id);

        public Task<Answer> GetAnswerById(int id);
        public Task RatingAnswer(int id, int rating);
    }
}
