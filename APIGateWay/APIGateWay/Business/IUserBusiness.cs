using APIGateWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateWay.Business
{
    public interface IUserBusiness
    {
        public Task<IEnumerable<User>> GetUsers();
        public Task<User> GetUserById(int id);
        public Task<User> LogInUser(string email, string password);
        public Task<IEnumerable<User>> GetTopRank();
        public Task UpdateUser(int id, User user);
        public Task<User> CreateUser(User user);
        public Task DeleteUser(int id);

    }
}
