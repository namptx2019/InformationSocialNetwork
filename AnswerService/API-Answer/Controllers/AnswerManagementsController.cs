using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Answer.Models;
using ApiService.Models;

namespace API_Answer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerManagementsController : ControllerBase
    {
        private readonly AnswerDbContext _context;

        public AnswerManagementsController(AnswerDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Answer>> GetAnswerById(int id)
        {
            var answerManagement = await _context.AnswerManagement.FindAsync(id);

            if (answerManagement == null)
            {
                return NotFound();
            }

            return answerManagement;
        }

        // GET: api/AnswerManagements/question/questionId
        [HttpGet("question/{questionId}")]
        public async Task<ActionResult<IEnumerable<Answer>>> GetQuestionAnswers(int questionId)
        {
            var answerManagement = await _context.AnswerManagement.Where(x => x.QuestionId == questionId).ToListAsync();

            if (answerManagement == null)
            {
                return NotFound();
            }
                
            return answerManagement;
        }

        // GET: api/AnswerManagements/user/userId
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<Answer>>> GetUserAllAnswer(int userId)
        {
            var answerManagement = await _context.AnswerManagement.Where(x => x.UserId == userId).ToListAsync();

            if (answerManagement == null)
            {
                return NotFound();
            }

            return answerManagement;
        }

        // PUT: api/AnswerManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> RatingAnswer(int? id, Answer answerManagement)
        {
            if (id != answerManagement.AnswerId)
            {
                return BadRequest();
            }

            _context.Entry(answerManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
               throw ex;
            }

            return NoContent();
        }

        // POST: api/AnswerManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> PostAnswerManagement(Answer answerManagement)
        {
            _context.AnswerManagement.Add(answerManagement);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/AnswerManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnswerManagement(int? id)
        {
            var answerManagement = await _context.AnswerManagement.FindAsync(id);
            if (answerManagement == null)
            {
                return NotFound();
            }

            _context.AnswerManagement.Remove(answerManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
