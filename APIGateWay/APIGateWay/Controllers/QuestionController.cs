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
    [Route("api/Questions")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionBusiness questionBusiness;
        private readonly IAnswerBusiness answerBusiness;

        public QuestionController(IQuestionBusiness QuestionBusiness, IAnswerBusiness AnswerBusiness)
        {
            questionBusiness = QuestionBusiness;
            answerBusiness = AnswerBusiness;
        }

        // GET: api/Questions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> GetAllQuestion()
        {
            var questions = await questionBusiness.GetAllQuestion();
            return Ok(questions);
        }

        // GET: api/Questions
        [HttpGet("user/{id}")]
        public async Task<ActionResult<IEnumerable<Question>>> GetUserQuestions(int id)
        {
            var questions = await questionBusiness.GetUserQuestions(id);
            return Ok(questions);
        }

        // GET api/Categories
        [HttpGet("Categories")]
        public async Task<ActionResult<Question>> GetAllCategories()
        {
            var categories = await questionBusiness.GetAllCategories();
            return Ok(categories);
        }

        // GET api/Questions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestionDetail(int id)
        {
            var question = await questionBusiness.GetQuestionDetail(id);
            return Ok(question);
        }

        // POST api/Questions
        [HttpPost]
        public async Task<ActionResult<Question>> CreateQuestion(Question question)
        {
            var newQuestion = await questionBusiness.CreateQuestion(question);
            return Ok(question);
        }

        // PUT api/Questions/5
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateQuestion(int id, Question question)
        {
            await questionBusiness.EditQuestion(id, question);
            return Ok();
        }

        // PUT api/Questions/rating
        [HttpPost("rating/{id}")]
        public async Task<ActionResult> RatingQuestion(int id, [FromBody] int rating)
        {
            await questionBusiness.RatingQuestion(id, rating);
            return Ok();
        }

        // PUT api/Questions/answer
        [HttpPost("answer")]
        public async Task<ActionResult> CreateAnswer(Answer answer)
        {
            await answerBusiness.CreateAnswer(answer);
            return Ok();
        }

        // PUT api/Questions/rating
        [HttpPost("answer/{id}")]
        public async Task<ActionResult> RatingAnswer(int id, [FromBody] int rating)
        {
            await answerBusiness.RatingAnswer(id, rating);
            return Ok();
        }

        // DELETE api/Questions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion(int id)
        {
            await questionBusiness.DeleteQuestion(id);
            return Ok();
        }


    }
}
