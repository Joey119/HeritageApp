using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HeritageApp.Models.Database;


namespace HeritageApp.Controllers
{
    //set route attribte to make request as 'api/contact'
    [Authorize]
    [Route("api/[controller]")]
    public class HeritageCommentController: Controller
    {
        private readonly HeritageContext _context;

        //initiate database context
        public HeritageCommentController(HeritageContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getAllHeritageComment")]
        public async Task<IEnumerable<HeritageComment>> GetAllHeritageComment()
        {
            //fetch all user records
            try
            {
                return  await _context.HeritageComments.ToListAsync();
            }
            catch
            {
                throw;
            }            
        }

        [HttpGet]
        [Route("getHeritageComment/{id:int}")]
        public async Task<IEnumerable<HeritageComment>> GetHeritageComment(long id)
        {
            //fetch all user records
            try
            {
                return  await _context.HeritageComments.Where(comment => comment.HeritageId == id).ToListAsync();
            }
            catch
            {
                throw;
            }            
        }

        [HttpGet("{id}")]
        public IActionResult GetbyId(long id)
        {
            //filter contact records by contact id
            var item = _context.HeritageComments.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Add([FromBody] HeritageComment item)
        {
            //set bad reqeust if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }
            _context.HeritageComments.Add(new HeritageComment{
            HeritageId = item.HeritageId,
            UserId = item.UserId,
            CommentText = item.CommentText,
            CommentDate = DateTime.Now,
            UpVoteCount = 0,
            DownVoteCount = 0
            });
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] HeritageComment item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }

            var heritageComment = _context.HeritageComments.FirstOrDefault(t => t.Id == id);
            if (heritageComment == null)
            {
                return NotFound();
            }
            heritageComment.HeritageId = item.HeritageId;
            heritageComment.UserId = item.UserId;
            heritageComment.CommentText = item.CommentText;
            heritageComment.CommentDate = DateTime.Now;
            heritageComment.UpVoteCount = item.UpVoteCount;
            heritageComment.DownVoteCount = item.DownVoteCount;
               
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut]
        [Route("updateVote/{id:int}")]
        public IActionResult UpdateVote(long id, [FromBody] HeritageComment item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }

            var heritageComment = _context.HeritageComments.FirstOrDefault(t => t.Id == id);
            if (heritageComment == null)
            {
                return NotFound();
            }
            heritageComment.UpVoteCount = item.UpVoteCount;
            heritageComment.DownVoteCount = item.DownVoteCount;
               
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var heritageComment = _context.HeritageComments.FirstOrDefault(t => t.Id == id);
            if (heritageComment == null)
            {
                return NotFound();
            }

            _context.HeritageComments.Remove(heritageComment);
            _context.SaveChanges();
            return Ok();
        }

         
    }
}