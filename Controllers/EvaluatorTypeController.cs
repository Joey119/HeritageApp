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
    public class EvaluatorTypeController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public EvaluatorTypeController(HeritageContext context,
                                         IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getAllEvaluatorType")]
        public async Task<IEnumerable<EvaluatorTypeDto>> GetAllEvaluatorType()
        {
            //fetch all user records
            try
            {
                var task = await _context.EvaluatorTypes
                .ToListAsync();
                
                return new List<EvaluatorTypeDto>(
                    _mapper.Map<List<EvaluatorTypeDto>>(task)
                );
            }
            catch
            {
                throw;
            }            
        }
    }
}