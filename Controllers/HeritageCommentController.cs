using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using HeritageApp.Models.Database;
using HeritageApp.Helpers;


namespace HeritageApp.Controllers
{
    //set route attribte to make request as 'api/contact'
    [Authorize]
    [Route("api/[controller]")]
    public class HeritageCommentController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public HeritageCommentController(HeritageContext context,
                                         IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getAllHeritageComment")]
        public async Task<IEnumerable<HeritageCommentDto>> GetAllHeritageComment()
        {
            //fetch all user records
            try
            {
                var task = await _context.HeritageComments
                .Include(comment => comment.CommentUser)
                .ToListAsync();
                
                return new List<HeritageCommentDto>(
                    _mapper.Map<List<HeritageCommentDto>>(task)
                );
            }
            catch
            {
                throw;
            }            
        }

        [HttpGet]
        [Route("getHeritageComment/{id:int}")]
        public async Task<IEnumerable<HeritageCommentDto>> GetHeritageComment(long id)
        {
            //fetch all user records
            try
            {
                var task =  await _context.HeritageComments
                .Where(comment => comment.HeritageId == id)
                .Include(comment => comment.CommentUser)
                .ToListAsync();

                return new List<HeritageCommentDto>(
                    _mapper.Map<List<HeritageCommentDto>>(task)
                );
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
            var item = _context.HeritageComments            
            .FirstOrDefault(t => t.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            var itemDto = _mapper.Map<HeritageCommentDto>(item);

            return new ObjectResult(itemDto);
        }

        [HttpPost]
        public IActionResult Add([FromBody] HeritageCommentDto item)
        {
            //set bad reqeust if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }

            var comment = _mapper.Map<HeritageComment>(item);
            comment.CommentDate = DateTime.Now;
            _context.HeritageComments.Add(comment);
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] HeritageCommentDto item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }
            var comment = _mapper.Map<HeritageComment>(item);

            var heritageComment = _context.HeritageComments.FirstOrDefault(t => t.Id == id);
            if (heritageComment == null)
            {
                return NotFound();
            }
            heritageComment.HeritageId = comment.HeritageId;
            heritageComment.CommentUserId = comment.CommentUserId;
            heritageComment.CommentText = comment.CommentText;
            heritageComment.CommentDate = DateTime.Now;
            heritageComment.UpVoteCount = comment.UpVoteCount;
            heritageComment.DownVoteCount = comment.DownVoteCount;
               
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut]
        [Route("updateVote/{id:int}")]
        public IActionResult UpdateVote(long id, [FromBody] HeritageCommentDto item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }
             var comment = _mapper.Map<HeritageComment>(item);

            var heritageComment = _context.HeritageComments.FirstOrDefault(t => t.Id == id);
            if (heritageComment == null)
            {
                return NotFound();
            }
            heritageComment.UpVoteCount = comment.UpVoteCount;
            heritageComment.DownVoteCount = comment.DownVoteCount;
               
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