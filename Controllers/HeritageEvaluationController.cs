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
    public class HeritageEvaluationController : Controller {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public HeritageEvaluationController (HeritageContext context,
            IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route ("getAllHeritageEvaluation")]
        public async Task<IEnumerable<HeritageEvaluationDto>> GetAllHeritageEvaluation () {
            //fetch all user records
            try {
                var task = await _context.HeritageEvaluations
                    .Include (heritageEvaluation => heritageEvaluation.CreatedUser)
                    .Include (heritageEvaluation => heritageEvaluation.ModifiedUser)
                    .ToListAsync ();

                return new List<HeritageEvaluationDto> (
                    _mapper.Map<List<HeritageEvaluationDto>> (task)
                );
            } catch {
                throw;
            }
        }

        [HttpGet]
        [Route ("getHeritageEvaluation/{id:int}")]
        public async Task<IEnumerable<HeritageEvaluationDto>> GetHeritageEvaluation (long id) {
            //fetch all user records
            try {
                var task = await _context.HeritageEvaluations
                    .Where (evaluation => evaluation.HeritageId == id)
                    .Include (evaluation => evaluation.CreatedUser)
                    .Include (evaluation => evaluation.ModifiedUser)
                    .ToListAsync ();

                return new List<HeritageEvaluationDto> (
                    _mapper.Map<List<HeritageEvaluationDto>> (task)
                );
            } catch {
                throw;
            }
        }

        [HttpGet]
        [Route ("evaluateHeritage/{id:int}")]
        public IActionResult EvaluateHeritage (long id) {
            //filter contact records by contact id
            var heritage = _context.Heritages
                .Where(item => item.Id == id)
                .Include(item => item.HeritageEvaluations)
                .FirstOrDefault();

            if (heritage == null) {
                return NotFound ();
            }

            var evaluations = heritage.HeritageEvaluations;
            double factor1 = 0.2;
            double factor2 = 0.2;
            double factor3 = 0.2;
            double factor4 = 0.2;
            double factor5 = 0.2;

            heritage.EvaluationValue = evaluations.Where(evaluation => evaluation.EvaluatorTypeId == 5).Select(evaluation => evaluation.EvaluationValue).DefaultIfEmpty(0).Average() * factor1
                                     + evaluations.Where(evaluation => evaluation.EvaluatorTypeId == 4).Select(evaluation => evaluation.EvaluationValue).DefaultIfEmpty(0).Average() * factor2
                                     + evaluations.Where(evaluation => evaluation.EvaluatorTypeId == 3).Select(evaluation => evaluation.EvaluationValue).DefaultIfEmpty(0).Average() * factor3
                                     + evaluations.Where(evaluation => evaluation.EvaluatorTypeId == 2).Select(evaluation => evaluation.EvaluationValue).DefaultIfEmpty(0).Average() * factor4
                                     + evaluations.Where(evaluation => evaluation.EvaluatorTypeId == 1).Select(evaluation => evaluation.EvaluationValue).DefaultIfEmpty(0).Average() * factor5;

            /* 
            var activationModes = _context.ActivationModes
                                .Where(actMode => actMode.UpperBound > heritage.EvaluationValue && actMode.LowerBound < heritage.EvaluationValue)
                                .ToList();
                                */

            _context.SaveChanges ();

            var itemDto = _mapper.Map<HeritageDto>(heritage);

            return new ObjectResult (itemDto);
        }

        [HttpGet ("{id}")]
        public IActionResult GetbyId (long id) {
            //filter contact records by contact id
            var item = _context.HeritageEvaluations
                .FirstOrDefault (t => t.Id == id);

            if (item == null) {
                return NotFound ();
            }

            var itemDto = _mapper.Map<HeritageEvaluationDto> (item);

            return new ObjectResult (itemDto);
        }

        [HttpPost]
        public IActionResult Add ([FromBody] HeritageEvaluationDto item) {
            //set bad reqeust if contact data is not provided in body
            if (item == null) {
                return BadRequest ();
            }

            Evaluate (item);

            var heritageEvaluation = _mapper.Map<HeritageEvaluation> (item);
            heritageEvaluation.CreatedOn = DateTime.Now;
            heritageEvaluation.ModifiedOn = DateTime.Now;
            _context.HeritageEvaluations.Add (heritageEvaluation);
            _context.SaveChanges ();
            item = _mapper.Map<HeritageEvaluationDto> (heritageEvaluation);
            return Ok (item);
        }

        [HttpPut ("{id}")]
        public IActionResult Update (long id, [FromBody] HeritageEvaluationDto item) {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0) {
                return BadRequest ();
            }

            Evaluate (item);

            var evaluation = _mapper.Map<HeritageEvaluation> (item);

            var heritageEvaluation = _context.HeritageEvaluations.FirstOrDefault (t => t.Id == id);
            if (heritageEvaluation == null) {
                return NotFound ();
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

            _context.SaveChanges ();
            item = _mapper.Map<HeritageEvaluationDto> (heritageEvaluation);
            return Ok (item);
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete (long id) {
            var evaluation = _context.HeritageEvaluations.FirstOrDefault (t => t.Id == id);
            if (evaluation == null) {
                return NotFound ();
            }

            _context.HeritageEvaluations.Remove (evaluation);
            _context.SaveChanges ();
            return Ok ();
        }

        private void Evaluate (HeritageEvaluationDto evaluation) {
            evaluation.EvaluationValue = evaluation.AgreementFactor * (evaluation.ImportanceValue + evaluation.NationalPrideValue + evaluation.GovProtectionValue) / 3 +
                evaluation.CognitionFactor * (evaluation.ResourceCharacteristicsValue + evaluation.SkillScopeValue + evaluation.SkillInheritanceMethodValue + evaluation.SkillInheritanceDifficultyValue) / 4 +
                evaluation.ProjectValueFactor * (evaluation.ArtValue + evaluation.CultureValue + evaluation.EconomyValue + evaluation.HistoryValue + evaluation.EducationValue + evaluation.SocietyValue + evaluation.ScienceValue + evaluation.EcologicalEnvironmentValue) / 8 +
                evaluation.ProjectBasicInfoFactor * (evaluation.QualityValue + evaluation.RarenessValue + evaluation.EcologyValue + evaluation.PopularValue + evaluation.PersonalityValue + evaluation.TimeSpanValue) / 6 +
                evaluation.ProjectConditionStatusFactor * (evaluation.NationalEcomonicValue + evaluation.MarketStatusValue + evaluation.BasicResourceDevelopmentValue + evaluation.BasicResourceValue + evaluation.IntroductionProbabilityValue) / 5;
        }
    }
}