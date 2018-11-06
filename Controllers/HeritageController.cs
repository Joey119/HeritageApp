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
    public class HeritageController : Controller {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public HeritageController (HeritageContext context,
            IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route ("getAllHeritage")]
        public async Task<IEnumerable<HeritageDto>> GetAllHeritage () {
            //fetch all user records
            try {
                var task = await _context.Heritages
                    .Include (heritage => heritage.CreatedUser)
                    .Include (heritage => heritage.ModifiedUser)
                    .ToListAsync ();

                return new List<HeritageDto> (
                    _mapper.Map<List<HeritageDto>> (task)
                );
            } catch {
                throw;
            }
        }

        [HttpGet ("{id}")]
        public IActionResult GetbyId (long id) {
            //filter contact records by contact id
            var item = _context.Heritages
                .FirstOrDefault (t => t.Id == id);
            if (item == null) {
                return NotFound ();
            }

            var itemDto = _mapper.Map<HeritageDto> (item);
            return new ObjectResult (itemDto);
        }

        [HttpPost]
        public IActionResult Create ([FromBody] HeritageDto item) {
            //set bad reqeust if contact data is not provided in body
            if (item == null) {
                return BadRequest ();
            }

            var heritage = _mapper.Map<Heritage> (item);
            heritage.CreatedOn = DateTime.Now;
            heritage.ModifiedOn = DateTime.Now;

            _context.Heritages.Add (heritage);
            _context.SaveChanges ();
            item = _mapper.Map<HeritageDto> (heritage);
            return Ok (item);
        }

        [HttpPut ("{id}")]
        public IActionResult Update (long id, [FromBody] HeritageDto item) {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0) {
                return BadRequest ();
            }

            var itemDto = _mapper.Map<Heritage> (item);

            var heritage = _context.Heritages.FirstOrDefault (t => t.Id == id);
            if (heritage == null) {
                return NotFound ();
            }

            heritage.Name = itemDto.Name;
            heritage.RegistrationDistrict = itemDto.RegistrationDistrict;
            heritage.RegistrationYear = itemDto.RegistrationYear;
            heritage.Province = itemDto.Province;
            heritage.TypeofProject = itemDto.TypeofProject;
            heritage.BatchNo = itemDto.BatchNo;
            heritage.Inheritors = itemDto.Inheritors;
            heritage.ProjectOverview = itemDto.ProjectOverview;
            heritage.History = itemDto.History;
            heritage.CurrentStatus = itemDto.CurrentStatus;
            heritage.PresentValue = itemDto.PresentValue;
            heritage.EndangeredStatus = itemDto.EndangeredStatus;
            heritage.Masterpiece = itemDto.Masterpiece;
            heritage.TourismStatus = itemDto.TourismStatus;
            heritage.TourismMarketCharacteristics = itemDto.TourismMarketCharacteristics;
            heritage.TourismProduct = itemDto.TourismProduct;
            heritage.TourismPrice = itemDto.TourismPrice;
            heritage.TourismDevelopmentModel = itemDto.TourismDevelopmentModel;
            heritage.TourismBenefit = itemDto.TourismBenefit;
            heritage.EvaluationValue = itemDto.EvaluationValue;
            heritage.HeritageGameAnalysisId = itemDto.HeritageGameAnalysisId;
            heritage.ModifiedUserId = itemDto.ModifiedUserId;
            heritage.ModifiedOn = DateTime.Now;

            _context.SaveChanges ();
            item = _mapper.Map<HeritageDto> (heritage);
            return Ok (item);
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete (long id) {
            var heritage = _context.Heritages.FirstOrDefault (t => t.Id == id);
            if (heritage == null) {
                return NotFound ();
            }

            _context.Heritages.Remove (heritage);
            _context.SaveChanges ();
            return Ok ();
        }

    }
}