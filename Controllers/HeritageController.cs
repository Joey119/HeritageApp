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
    [ApiController]
    [Route("api/[controller]")]
    public class HeritageController: Controller
    {
        private readonly HeritageContext _context;

        //initiate database context
        public HeritageController(HeritageContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getAllHeritage")]
        public async Task<IEnumerable<Heritage>> GetAllHeritage()
        {
            //fetch all user records
            try
            {
                return  await _context.Heritages.ToListAsync();
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
            var item = _context.Heritages.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Heritage item)
        {
            //set bad reqeust if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }
            _context.Heritages.Add(new Heritage{
                Name = item.Name,
                RegistrationDistrict = item.RegistrationDistrict,
                RegistrationYear = item.RegistrationYear,
                Province = item.Province,
                TypeofProject = item.TypeofProject,
                BatchNo = item.BatchNo,
                Inheritors = item.Inheritors,
                ProjectOverview = item.ProjectOverview,
                History = item.History,
                CurrentStatus = item.CurrentStatus,
                PresentValue = item.PresentValue,
                EndangeredStatus = item.EndangeredStatus,
                Masterpiece = item.Masterpiece,
                TourismStatus = item.TourismStatus,
                TourismMarketCharacteristics = item.TourismMarketCharacteristics,
                TourismProduct = item.TourismProduct,
                TourismPrice = item.TourismPrice,
                TourismDevelopmentModel = item.TourismDevelopmentModel,
                TourismBenefit = item.TourismBenefit,
                CreatedBy = 1,
                CreatedOn = DateTime.Now,
                ModifiedBy = 1,
                ModifiedOn = DateTime.Now
            });
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Heritage item)
        {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }

            var heritage = _context.Heritages.FirstOrDefault(t => t.Id == id);
            if (heritage == null)
            {
                return NotFound();
            }
            heritage.Name = item.Name;
            heritage.RegistrationDistrict = item.RegistrationDistrict;
            heritage.RegistrationYear = item.RegistrationYear;
            heritage.Province = item.Province;
            heritage.TypeofProject = item.TypeofProject;
            heritage.BatchNo = item.BatchNo;
            heritage.Inheritors = item.Inheritors;
            heritage.ProjectOverview = item.ProjectOverview;
            heritage.History = item.History;
            heritage.CurrentStatus = item.CurrentStatus;
            heritage.PresentValue = item.PresentValue;
            heritage.EndangeredStatus = item.EndangeredStatus;
            heritage.Masterpiece = item.Masterpiece;
            heritage.TourismStatus = item.TourismStatus;
            heritage.TourismMarketCharacteristics = item.TourismMarketCharacteristics;
            heritage.TourismProduct = item.TourismProduct;
            heritage.TourismPrice = item.TourismPrice;
            heritage.TourismDevelopmentModel = item.TourismDevelopmentModel;
            heritage.TourismBenefit = item.TourismBenefit;
            heritage.ModifiedBy = 1;
            heritage.ModifiedOn = DateTime.Now;    
               
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var heritage = _context.Heritages.FirstOrDefault(t => t.Id == id);
            if (heritage == null)
            {
                return NotFound();
            }

            _context.Heritages.Remove(heritage);
            _context.SaveChanges();
            return Ok();
        }

    }
}