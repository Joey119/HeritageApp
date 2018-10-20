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
    public class ActivationModeController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public ActivationModeController(HeritageContext context,
                                         IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getAllActMode")]
        public async Task<IEnumerable<ActivationModeDto>> GetAllActivationMode()
        {
            //fetch all user records
            try
            {
                var task = await _context.ActivationModes
                .Include(actMode => actMode.CreatedUser)
                .Include(actMode => actMode.ModifiedUser)
                .ToListAsync();
                
                return new List<ActivationModeDto>(
                    _mapper.Map<List<ActivationModeDto>>(task)
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
            var item = _context.ActivationModes            
            .FirstOrDefault(t => t.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            var itemDto = _mapper.Map<ActivationModeDto>(item);

            return new ObjectResult(itemDto);
        }

        [HttpPost]
        public IActionResult Add([FromBody] ActivationModeDto item)
        {
            //set bad reqeust if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }

            var actMode = _mapper.Map<ActivationMode>(item);
            actMode.CreatedOn = DateTime.Now;
            actMode.ModifiedOn = DateTime.Now;
            _context.ActivationModes.Add(actMode);
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] ActivationModeDto item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }
            var actMode = _mapper.Map<ActivationMode>(item);

            var activationMode = _context.ActivationModes.FirstOrDefault(t => t.Id == id);
            if (activationMode == null)
            {
                return NotFound();
            }
            activationMode.ActivationModeName = actMode.ActivationModeName;
            activationMode.ActivationModeDescription = actMode.ActivationModeDescription;
            activationMode.UpperBound = actMode.UpperBound;
            activationMode.LowerBound = actMode.LowerBound;
            activationMode.ModifiedOn = DateTime.Now;
            activationMode.ModifiedUserId = actMode.ModifiedUserId;
               
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var actMode = _context.ActivationModes.FirstOrDefault(t => t.Id == id);
            if (actMode == null)
            {
                return NotFound();
            }

            _context.ActivationModes.Remove(actMode);
            _context.SaveChanges();
            return Ok();
        }

    }

}