using APIGateWay.Business;
using APIGateWay.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIGateWay.Controllers
{
    [Route("api/Users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserBusiness userBusiness;

        public UserController(IUserBusiness UserBusiness)
        {
            userBusiness = UserBusiness;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUser()
        {
            var users = await userBusiness.GetUsers();
            return Ok(users);
        }

        // GET api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await userBusiness.GetUserById(id);
            return Ok(user);
        }

        // GET: api/Users/topRank
        [HttpGet("topRank")]
        public async Task<ActionResult<IEnumerable<User>>> GetTopRank()
        {
            var users = await userBusiness.GetTopRank();
            return Ok(users);
        }

        // GET: api/Users/login
        [HttpGet("login")]
        public async Task<ActionResult<User>> LogInUser([FromQuery] string email, [FromQuery] string password)
        {
            var user = await userBusiness.LogInUser(email, password);

            return user;
        }

        // POST api/Users
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            var newUser = await userBusiness.CreateUser(user);
            return Ok(newUser);
        }

        // PUT api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User user)
        {
            await userBusiness.UpdateUser(id, user);
            return Ok();
        }

        // DELETE api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await userBusiness.DeleteUser(id);
            return Ok();
        }
    }
}
