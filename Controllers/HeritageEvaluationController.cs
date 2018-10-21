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
    public class HeritageEvaluationController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public HeritageEvaluationController(HeritageContext context,
                                         IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getAllHeritageEvaluation")]
        public async Task<IEnumerable<HeritageEvaluationDto>> GetAllHeritageEvaluation()
        {
            //fetch all user records
            try
            {
                var task = await _context.HeritageEvaluations
                .Include(heritageEvaluation => heritageEvaluation.CreatedUser)
                .Include(heritageEvaluation => heritageEvaluation.ModifiedUser)
                .ToListAsync();
                
                return new List<HeritageEvaluationDto>(
                    _mapper.Map<List<HeritageEvaluationDto>>(task)
                );
            }
            catch
            {
                throw;
            }            
        }

        [HttpGet]
        [Route("getHeritageEvaluation/{id:int}")]
        public async Task<IEnumerable<HeritageEvaluationDto>> GetHeritageEvaluation(long id)
        {
            //fetch all user records
            try
            {
                var task =  await _context.HeritageEvaluations
                .Where(evaluation => evaluation.HeritageId == id)
                .Include(evaluation => evaluation.CreatedUser)
                .Include(evaluation => evaluation.ModifiedUser)
                .ToListAsync();

                return new List<HeritageEvaluationDto>(
                    _mapper.Map<List<HeritageEvaluationDto>>(task)
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
            var item = _context.HeritageEvaluations            
            .FirstOrDefault(t => t.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            var itemDto = _mapper.Map<HeritageEvaluationDto>(item);

            return new ObjectResult(itemDto);
        }

        [HttpPost]
        public IActionResult Add([FromBody] HeritageEvaluationDto item)
        {
            //set bad reqeust if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }

            CalculateRoutes(item);

            var heritageEvaluation = _mapper.Map<HeritageEvaluation>(item);
            heritageEvaluation.CreatedOn = DateTime.Now;
            heritageEvaluation.ModifiedOn = DateTime.Now;
            _context.HeritageEvaluations.Add(heritageEvaluation);
            _context.SaveChanges();
            item = _mapper.Map<HeritageEvaluationDto>(heritageEvaluation);
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] HeritageEvaluationDto item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }

            CalculateRoutes(item);

            var evaluation = _mapper.Map<HeritageEvaluation>(item);

            var heritageEvaluation = _context.HeritageEvaluations.FirstOrDefault(t => t.Id == id);
            if (heritageEvaluation == null)
            {
                return NotFound();
            }

            heritageEvaluation.HeritageId = evaluation.HeritageId;
            heritageEvaluation.EvaluatorTypeId = evaluation.EvaluatorTypeId;
            heritageEvaluation.EvaluationValue = evaluation.EvaluationValue;
            heritageEvaluation.AgreementFactor = evaluation.AgreementFactor;
            heritageEvaluation.CognitionFactor = evaluation.CognitionFactor;
            heritageEvaluation.ProjectValueFactor = evaluation.ProjectValueFactor;
            heritageEvaluation.ProjectBasicInfoFactor = evaluation.ProjectBasicInfoFactor;
            heritageEvaluation.ProjectConditionStatusFactor = evaluation.ProjectConditionStatusFactor;
            heritageEvaluation.ImportanceValue = evaluation.ImportanceValue;
            heritageEvaluation.NationalPrideValue = evaluation.NationalPrideValue;
            heritageEvaluation.GovProtectionValue = evaluation.GovProtectionValue;
            heritageEvaluation.ResourceCharacteristicsValue = evaluation.ResourceCharacteristicsValue;
            heritageEvaluation.SkillScopeValue = evaluation.SkillScopeValue;
            heritageEvaluation.SkillInheritanceMethodValue = evaluation.SkillInheritanceMethodValue;
            heritageEvaluation.SkillInheritanceDifficultyValue = evaluation.SkillInheritanceDifficultyValue;
            heritageEvaluation.ArtValue = evaluation.ArtValue;
            heritageEvaluation.CultureValue = evaluation.CultureValue;
            heritageEvaluation.EconomyValue = evaluation.EconomyValue;
            heritageEvaluation.HistoryValue = evaluation.HistoryValue;
            heritageEvaluation.EducationValue = evaluation.EducationValue;
            heritageEvaluation.SocietyValue = evaluation.SocietyValue;
            heritageEvaluation.ScienceValue = evaluation.ScienceValue;
            heritageEvaluation.EcologicalEnvironmentValue = evaluation.EcologicalEnvironmentValue;
            heritageEvaluation.QualityValue = evaluation.QualityValue;
            heritageEvaluation.RarenessValue = evaluation.RarenessValue;
            heritageEvaluation.EcologyValue = evaluation.EcologyValue;
            heritageEvaluation.PopularValue = evaluation.PopularValue;
            heritageEvaluation.PersonalityValue = evaluation.PersonalityValue;
            heritageEvaluation.TimeSpanValue = evaluation.TimeSpanValue;
            heritageEvaluation.NationalEcomonicValue = evaluation.NationalEcomonicValue;
            heritageEvaluation.MarketStatusValue = evaluation.MarketStatusValue;
            heritageEvaluation.BasicResourceDevelopmentValue = evaluation.BasicResourceDevelopmentValue;
            heritageEvaluation.BasicResourceValue = evaluation.BasicResourceValue;
            heritageEvaluation.IntroductionProbabilityValue = evaluation.IntroductionProbabilityValue;           

            heritageEvaluation.ModifiedUserId = evaluation.ModifiedUserId;
            heritageEvaluation.ModifiedOn = DateTime.Now;
               
            _context.SaveChanges();
            item = _mapper.Map<HeritageEvaluationDto>(heritageEvaluation);
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var evaluation = _context.HeritageEvaluations.FirstOrDefault(t => t.Id == id);
            if (evaluation == null)
            {
                return NotFound();
            }

            _context.HeritageEvaluations.Remove(evaluation);
            _context.SaveChanges();
            return Ok();
        }

        private void CalculateRoutes(HeritageEvaluationDto evaluation)
        {

        }
    }
}