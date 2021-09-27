using APIGateWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace APIGateWay.Business
{
    public class UserBusiness: IUserBusiness
    {
        #region Properties
        private HttpClient client = new HttpClient();
        private string userURL = "http://localhost:55845/";
        #endregion

        #region Constructors
        public UserBusiness()
        {
            client.BaseAddress = new Uri(userURL);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
        }

        #endregion

        #region Methods
        public async Task<IEnumerable<User>> GetUsers()
        {
            var userList = new List<User>();
            var url = $"{userURL}api/Users";
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<List<User>>();
            }

            return userList;
        }

        public async Task<User> GetUserById(int id)
        {
            var user = new User();
            var url = $"{userURL}api/Users/{id}";
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<User>();
            }

            return user;
        }

        public async Task<User> LogInUser(string email, string password)
        {
            var user = new User();
            var url = $"{userURL}api/Users/login?email={email}&password={password}";

            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<User>();
            }

            return user;
        }

        public async Task<IEnumerable<User>> GetTopRank()
        {
            var url = $"{userURL}api/Users/topRank";
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<List<User>>();
            }

            return new List<User>();
        }

        public async Task UpdateUser(int id, User user)
        {
            var url = $"{userURL}api/Users/{id}";
            HttpResponseMessage response = await client.PutAsJsonAsync(url, user);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<User>();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<User> CreateUser(User user)
        {
            var url = userURL + "api/Users";
            HttpResponseMessage response = await client.PostAsJsonAsync(url, user);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                return await response.Content.ReadAsAsync<User>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task DeleteUser(int id)
        {
            var url = userURL + $"api/Users/{id}";
            HttpResponseMessage response = await client.DeleteAsync(url);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            try
            {
                await response.Content.ReadAsAsync<User>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
