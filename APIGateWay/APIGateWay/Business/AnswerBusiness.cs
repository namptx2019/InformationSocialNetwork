using APIGateWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace APIGateWay.Business
{
    public class AnswerBusiness: IAnswerBusiness
    {
        #region Properties
        private HttpClient answerClient = new HttpClient();
        private string answerUrl = "http://localhost:28757/";
        private IUserBusiness userBusiness;
        #endregion

        #region Constructors
        public AnswerBusiness(IUserBusiness UserBusiness)
        {
            answerClient.BaseAddress = new Uri(answerUrl);
            answerClient.DefaultRequestHeaders.Accept.Clear();
            answerClient.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
            userBusiness = UserBusiness;
        }
        #endregion

        public async Task<Answer> GetAnswerById(int id)
        {
            var url = $"{answerUrl}api/AnswerManagements/{id}";
            HttpResponseMessage response = await answerClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<Answer>();
            }

            return new Answer();
        }

        public async Task<IEnumerable<Answer>> GetQuestionAnswers(int questionId) {
            var answers = new List<Answer>();
            var url = $"{answerUrl}api/AnswerManagements/question/{questionId}";
            HttpResponseMessage response = await answerClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                answers = await response.Content.ReadAsAsync<List<Answer>>();
            }

            foreach(var answer in answers)
            {
                var user = await userBusiness.GetUserById(answer.UserId);
                answer.User = user; 
            }

            return answers;
        }

        public async Task<IEnumerable<Answer>> GetUserAllAnswers(int userId) {
            var url = $"{answerUrl}api/AnswerManagements/user/{userId}";
            HttpResponseMessage response = await answerClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<List<Answer>>();
            }

            return new List<Answer>();
        }

        public async Task<Answer> CreateAnswer(Answer answer) {
            var url = $"{answerUrl}api/AnswerManagements";
            HttpResponseMessage response = await answerClient.PostAsJsonAsync(url, answer);
            response.EnsureSuccessStatusCode();
            // Deserialize the updated product from the response body.
            try
            {
                return await response.Content.ReadAsAsync<Answer>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task EditAnswer(Answer answer) {
            var url = $"{answerUrl}api/AnswerManagements";
            HttpResponseMessage response = await answerClient.PutAsJsonAsync(url, answer);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<Answer>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task RatingAnswer(int id, int rating)
        {
            var answer = await GetAnswerById(id);
            answer.Rating += rating;

            var url = $"{answerUrl}api/AnswerManagements/{id}";
            HttpResponseMessage response = await answerClient.PutAsJsonAsync(url, answer);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<Answer>();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            // Update user Rating
            var user = await userBusiness.GetUserById(answer.UserId);
            user.Rating += rating;
            await userBusiness.UpdateUser(user.UserId, user);
        }

        public async Task DeleteAnswer(int id) {
            var url = $"{answerUrl}api/AnswerManagements/{id}";
            HttpResponseMessage response = await answerClient.DeleteAsync(url);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<Answer>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
