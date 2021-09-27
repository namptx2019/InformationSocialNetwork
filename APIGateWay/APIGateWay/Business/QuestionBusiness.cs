using APIGateWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace APIGateWay.Business
{
    public class QuestionBusiness: IQuestionBusiness
    {

        #region Properties
        private HttpClient questionClient = new HttpClient();
        private HttpClient userClient = new HttpClient();
        private string questionURL = "http://localhost:56713/";
        private IUserBusiness userBusiness;
        private IAnswerBusiness answerBusiness;
        #endregion

        #region Constructors
        public QuestionBusiness(IUserBusiness UserBusiness, IAnswerBusiness AnswerBusiness)
        {
            questionClient.BaseAddress = new Uri(questionURL);
            questionClient.DefaultRequestHeaders.Accept.Clear();
            questionClient.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            userBusiness = UserBusiness;
            answerBusiness = AnswerBusiness;
        }

        #endregion

        public async Task<IEnumerable<Question>> GetAllQuestion() {
            var url = $"{questionURL}api/Questions";
            var questions = new List<Question>();
            HttpResponseMessage response = await questionClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                questions = await response.Content.ReadAsAsync<List<Question>>();
            }

            var users = await userBusiness.GetUsers();

            foreach(var question in questions)
            {
                var user = users.Where(x => x.UserId == question.CreatorId).FirstOrDefault();
                if (user != null)
                {
                    question.CreatorName = user.UserName;
                    question.CreatorPic = user.UserPic;
                }
            }

            return questions;
        }

        public async Task<IEnumerable<Question>> GetUserQuestions(int userId)
        {
            var url = $"{questionURL}api/Questions/user/{userId}";
            var questions = new List<Question>();
            HttpResponseMessage response = await questionClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                questions = await response.Content.ReadAsAsync<List<Question>>();
            }

            return questions;
        }

        public async Task<Question> GetQuestionDetail(int id)
        {
            // TODO: get user creator of question
            var question = new Question();
            var url = $"{questionURL}api/Questions/{id}";
            HttpResponseMessage response = await questionClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                question = await response.Content.ReadAsAsync<Question>();
            }

            var user = await userBusiness.GetUserById(question.CreatorId);
            if (user != null)
            {
                question.CreatorName = user.UserName;
                question.CreatorPic = user.UserPic;
            }

            var answer = await answerBusiness.GetQuestionAnswers(id);

            question.Answers = answer.ToList();

            return question;
        }

        public async Task<Question> CreateQuestion(Question question)
        {
            var url = $"{questionURL}api/Questions";
            HttpResponseMessage response = await questionClient.PostAsJsonAsync(url, question);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                return await response.Content.ReadAsAsync<Question>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task EditQuestion(int id, Question question)
        {
            var url = $"{questionURL}api/Questions/{id}";
            HttpResponseMessage response = await questionClient.PutAsJsonAsync(url, question);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<Question>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task DeleteQuestion(int id)
        {
            var url = $"{questionURL}api/Questions/{id}";
            HttpResponseMessage response = await questionClient.DeleteAsync(url);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<Question>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            var url = $"{questionURL}api/Categories";
            var questions = new List<Category>();
            HttpResponseMessage response = await questionClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<List<Category>>();
            }

            return new List<Category>();
        }

        public async Task RatingQuestion(int questionId, int rating)
        {
            // TODO: get user creator of question
            var question = new Question();
            var url = $"{questionURL}api/Questions/{questionId}";
            HttpResponseMessage response = await questionClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                question = await response.Content.ReadAsAsync<Question>();
            }

            // Update user Rating
            var user = await userBusiness.GetUserById(question.CreatorId);
            user.Rating += rating;
            await userBusiness.UpdateUser(user.UserId, user);

            question.Rating = question.Rating + rating;
            await EditQuestion(questionId, question);
        }
    }
}
