using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using HeritageApp.Helpers;
using HeritageApp.Models.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HeritageApp.Controllers {
    //set route attribte to make request as 'api/contact'
    [Authorize]
    [ApiController]
    [Route ("api/[controller]")]
    public class EvaluationParameterController : Controller {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public EvaluationParameterController (HeritageContext context,
            IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet ("{id}")]
        public IActionResult GetbyId (long id) {
            //filter contact records by contact id
            var item = _context.EvaluationParameters
                .FirstOrDefault (t => t.Id == id);

            if (item == null) {
                return NotFound ();
            }

            var itemDto = _mapper.Map<EvaluationParameterDto> (item);

            return new ObjectResult (itemDto);
        }

        [HttpPut ("{id}")]
        public IActionResult Update (long id, [FromBody] EvaluationParameterDto item) {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0) {
                return BadRequest ();
            }

            var evaluationParameter = _mapper.Map<EvaluationParameter> (item);

            var evalParameter = _context.EvaluationParameters.FirstOrDefault (t => t.Id == id);
            if (evalParameter == null) {
                return NotFound ();
            }

            evalParameter.ParameterValue = evaluationParameter.ParameterValue;

            _context.SaveChanges ();
            item = _mapper.Map<EvaluationParameterDto> (evalParameter);
            return Ok (item);
        }
    }
}