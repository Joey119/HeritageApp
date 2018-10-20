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
    [ApiController]
    [Route("api/[controller]")]
    public class HeritageGameAnalysisController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public HeritageGameAnalysisController(HeritageContext context,
                                         IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getAllHeritageGameAnalysis")]
        public async Task<IEnumerable<HeritageGameAnalysisDto>> GetAllHeritageGameAnalysis()
        {
            //fetch all user records
            try
            {
                var task = await _context.HeritageGameAnalyses
                .Include(heritageGameAnalysis => heritageGameAnalysis.CreatedUser)
                .Include(heritageGameAnalysis => heritageGameAnalysis.ModifiedUser)
                .ToListAsync();
                
                return new List<HeritageGameAnalysisDto>(
                    _mapper.Map<List<HeritageGameAnalysisDto>>(task)
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
            var item = _context.HeritageGameAnalyses            
            .FirstOrDefault(t => t.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            var itemDto = _mapper.Map<HeritageGameAnalysisDto>(item);

            return new ObjectResult(itemDto);
        }

        [HttpPost]
        public IActionResult Add([FromBody] HeritageGameAnalysisDto item)
        {
            //set bad reqeust if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }

            CalculateRoutes(item);

            var heritageGameAnalysis = _mapper.Map<HeritageGameAnalysis>(item);
            heritageGameAnalysis.CreatedOn = DateTime.Now;
            heritageGameAnalysis.ModifiedOn = DateTime.Now;
            _context.HeritageGameAnalyses.Add(heritageGameAnalysis);
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] HeritageGameAnalysisDto item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }

            CalculateRoutes(item);

            var gameAnalysis = _mapper.Map<HeritageGameAnalysis>(item);

            var heritageGameAnalysis = _context.HeritageGameAnalyses.FirstOrDefault(t => t.Id == id);
            if (heritageGameAnalysis == null)
            {
                return NotFound();
            }

            heritageGameAnalysis.HeritageId = gameAnalysis.HeritageId;
            heritageGameAnalysis.CiA = gameAnalysis.CiA;
            heritageGameAnalysis.CiB = gameAnalysis.CiB;
            heritageGameAnalysis.Ii = gameAnalysis.Ii;
            heritageGameAnalysis.PiA = gameAnalysis.PiA;
            heritageGameAnalysis.PiB = gameAnalysis.PiB;
            heritageGameAnalysis.Vi5A = gameAnalysis.Vi5A;
            heritageGameAnalysis.Vi5B = gameAnalysis.Vi5B;
            heritageGameAnalysis.Vi4A = gameAnalysis.Vi4A;
            heritageGameAnalysis.Vi4B = gameAnalysis.Vi4B;
            heritageGameAnalysis.Vi3A = gameAnalysis.Vi3A;
            heritageGameAnalysis.Vi3B = gameAnalysis.Vi3B;
            heritageGameAnalysis.Vi1 = gameAnalysis.Vi1;
            heritageGameAnalysis.Ai4 = gameAnalysis.Ai4;
            heritageGameAnalysis.Ai3 = gameAnalysis.Ai3;
            heritageGameAnalysis.Ai2 = gameAnalysis.Ai2;
            heritageGameAnalysis.Aij = gameAnalysis.Aij;
            heritageGameAnalysis.Ai1 = gameAnalysis.Ai1;

            heritageGameAnalysis.Route1 = gameAnalysis.Route1;
            heritageGameAnalysis.Route2 = gameAnalysis.Route2;
            heritageGameAnalysis.Route3 = gameAnalysis.Route3;
            heritageGameAnalysis.Route4 = gameAnalysis.Route4;
            heritageGameAnalysis.Route5 = gameAnalysis.Route5;
            heritageGameAnalysis.Route6 = gameAnalysis.Route6;
            heritageGameAnalysis.Route7 = gameAnalysis.Route7;
            heritageGameAnalysis.Route8 = gameAnalysis.Route8;
            heritageGameAnalysis.Route9 = gameAnalysis.Route9;
            heritageGameAnalysis.Route10 = gameAnalysis.Route10;
            heritageGameAnalysis.Route11 = gameAnalysis.Route11;
            heritageGameAnalysis.Route12 = gameAnalysis.Route12;
            heritageGameAnalysis.Route13 = gameAnalysis.Route13;
            heritageGameAnalysis.Route14 = gameAnalysis.Route14;
            heritageGameAnalysis.Route15 = gameAnalysis.Route15;
            heritageGameAnalysis.Route16 = gameAnalysis.Route16;
            heritageGameAnalysis.Route17 = gameAnalysis.Route17;
            heritageGameAnalysis.Route18 = gameAnalysis.Route18;
            heritageGameAnalysis.Route19 = gameAnalysis.Route19;
            heritageGameAnalysis.Route20 = gameAnalysis.Route20;
            heritageGameAnalysis.Route21 = gameAnalysis.Route21;
            heritageGameAnalysis.Route22 = gameAnalysis.Route22;
            heritageGameAnalysis.Route23 = gameAnalysis.Route23;
            heritageGameAnalysis.Route24 = gameAnalysis.Route24;

            heritageGameAnalysis.ModifiedUserId = gameAnalysis.ModifiedUserId;
            heritageGameAnalysis.ModifiedOn = DateTime.Now;
               
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var gameAnalysis = _context.HeritageGameAnalyses.FirstOrDefault(t => t.Id == id);
            if (gameAnalysis == null)
            {
                return NotFound();
            }

            _context.HeritageGameAnalyses.Remove(gameAnalysis);
            _context.SaveChanges();
            return Ok();
        }

        private void CalculateRoutes(HeritageGameAnalysisDto gameAnalysis)
        {

        }
        
    }
}