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
    public class EvaluationOptionController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public EvaluationOptionController(HeritageContext context,
                                         IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getAllEvaluationOption")]
        public async Task<IEnumerable<EvaluationOptionDto>> GetAllEvaluationOption()
        {
            //fetch all user records
            try
            {
                var task = await _context.EvaluationOptions
                .ToListAsync();
                
                return new List<EvaluationOptionDto>(
                    _mapper.Map<List<EvaluationOptionDto>>(task)
                );
            }
            catch
            {
                throw;
            }            
        }

    }
}