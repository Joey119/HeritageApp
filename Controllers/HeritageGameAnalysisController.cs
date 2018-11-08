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
    [Route ("api/[controller]")]
    public class HeritageGameAnalysisController : Controller {
        private readonly HeritageContext _context;
        private IMapper _mapper;

        //initiate database context
        public HeritageGameAnalysisController (HeritageContext context,
            IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route ("getAllHeritageGameAnalysis")]
        public async Task<IEnumerable<HeritageGameAnalysisDto>> GetAllHeritageGameAnalysis () {
            //fetch all user records
            try {
                var task = await _context.HeritageGameAnalyses
                    .Include (heritageGameAnalysis => heritageGameAnalysis.CreatedUser)
                    .Include (heritageGameAnalysis => heritageGameAnalysis.ModifiedUser)
                    .ToListAsync ();

                return new List<HeritageGameAnalysisDto> (
                    _mapper.Map<List<HeritageGameAnalysisDto>> (task)
                );
            } catch {
                throw;
            }
        }

        [HttpGet ("{id}")]
        public IActionResult GetbyId (long id) {
            //filter contact records by contact id
            var item = _context.HeritageGameAnalyses
                .FirstOrDefault (t => t.Id == id);

            if (item == null) {
                return NotFound ();
            }

            var itemDto = _mapper.Map<HeritageGameAnalysisDto> (item);

            return new ObjectResult (itemDto);
        }

        [HttpGet]
        [Route ("getHeritageAnalysisBestRoute/{id:int}")]
        public IActionResult GetHeritageAnalysisBestRoute (long id) {
            //filter contact records by contact id
            var item = _context.HeritageGameAnalyses
                .FirstOrDefault (t => t.Id == id);

            if (item == null) {
                return NotFound ();
            }

            var itemDto = _mapper.Map<HeritageGameAnalysisDto> (item);

            RoutePath bestRoute = CalculateBestRoute (itemDto);

            return Ok (bestRoute);
        }

        [HttpPost]
        public IActionResult Add ([FromBody] HeritageGameAnalysisDto item) {
            //set bad reqeust if contact data is not provided in body
            if (item == null) {
                return BadRequest ();
            }

            CalculateRouteValues (item);

            var heritageGameAnalysis = _mapper.Map<HeritageGameAnalysis> (item);
            heritageGameAnalysis.CreatedOn = DateTime.Now;
            heritageGameAnalysis.ModifiedOn = DateTime.Now;
            _context.HeritageGameAnalyses.Add (heritageGameAnalysis);
            _context.SaveChanges ();
            item = _mapper.Map<HeritageGameAnalysisDto> (heritageGameAnalysis);
            return Ok (item);
        }

        [HttpPut ("{id}")]
        public IActionResult Update (long id, [FromBody] HeritageGameAnalysisDto item) {
            //set bad reqeust if  contact data is not provided in body
            if (item == null || id == 0) {
                return BadRequest ();
            }

            CalculateRouteValues (item);

            var gameAnalysis = _mapper.Map<HeritageGameAnalysis> (item);

            var heritageGameAnalysis = _context.HeritageGameAnalyses.FirstOrDefault (t => t.Id == id);
            if (heritageGameAnalysis == null) {
                return NotFound ();
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

            _context.SaveChanges ();
            item = _mapper.Map<HeritageGameAnalysisDto> (heritageGameAnalysis);
            return Ok (item);
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete (long id) {
            var gameAnalysis = _context.HeritageGameAnalyses.FirstOrDefault (t => t.Id == id);
            if (gameAnalysis == null) {
                return NotFound ();
            }

            _context.HeritageGameAnalyses.Remove (gameAnalysis);
            _context.SaveChanges ();
            return Ok ();
        }

        private void CalculateRouteValues (HeritageGameAnalysisDto gameAnalysis) {
            gameAnalysis.Route1 = (gameAnalysis.Vi1 + gameAnalysis.PiA - (1 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.CiA).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3A - gameAnalysis.Ai3 * gameAnalysis.CiA).ToString () + ", " +
                (gameAnalysis.Vi4A - gameAnalysis.Ai4 * gameAnalysis.CiA).ToString () + ", " +
                (gameAnalysis.Vi5A - gameAnalysis.PiA).ToString ();

            gameAnalysis.Route2 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.CiA).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3A - gameAnalysis.Ai3 * gameAnalysis.CiA).ToString () + ", " +
                (gameAnalysis.Vi4A - gameAnalysis.Ai4 * gameAnalysis.CiA).ToString () + ", " +
                "0";

            gameAnalysis.Route3 = (gameAnalysis.Vi1 + gameAnalysis.PiA - (1 - gameAnalysis.Ai3) * gameAnalysis.CiA).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3A - gameAnalysis.Ai3 * gameAnalysis.CiA).ToString () + ", " +
                gameAnalysis.Vi4A.ToString () + ", " +
                (gameAnalysis.Vi5B - gameAnalysis.PiA).ToString ();

            gameAnalysis.Route4 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai3) * gameAnalysis.CiA).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3A - gameAnalysis.Ai3 * gameAnalysis.CiA).ToString () + ", " +
                gameAnalysis.Vi4A.ToString () + ", " +
                "0";

            gameAnalysis.Route5 = (gameAnalysis.Vi1 + gameAnalysis.PiA - (1 - gameAnalysis.Ai4) * gameAnalysis.CiA).ToString () +
                ", 0, " +
                gameAnalysis.Vi3A.ToString () + ", " +
                (gameAnalysis.Vi4B - gameAnalysis.Ai4 * gameAnalysis.CiA).ToString () + ", " +
                (gameAnalysis.Vi5A - gameAnalysis.PiA).ToString ();

            gameAnalysis.Route6 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai4) * gameAnalysis.CiA).ToString () +
                ", 0, " +
                gameAnalysis.Vi3A.ToString () + ", " +
                (gameAnalysis.Vi4B - gameAnalysis.Ai4 * gameAnalysis.CiA).ToString () + ", " +
                "0";

            gameAnalysis.Route7 = (gameAnalysis.Vi1 + gameAnalysis.PiA - 1 * gameAnalysis.CiA).ToString () +
                ", 0, " +
                gameAnalysis.Vi3A.ToString () + ", " +
                gameAnalysis.Vi4B.ToString () + ", " +
                (gameAnalysis.Vi5B - gameAnalysis.PiA).ToString ();

            gameAnalysis.Route8 = (gameAnalysis.Vi1 - 1 * gameAnalysis.CiA).ToString () +
                ", 0, " +
                gameAnalysis.Vi3A.ToString () + ", " +
                gameAnalysis.Vi4B.ToString () + ", " +
                "0";

            gameAnalysis.Route9 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai2 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.PiB - (1 - gameAnalysis.Ai2 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Ai2 * gameAnalysis.PiB - gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                (gameAnalysis.Vi3B + gameAnalysis.Ai3 * gameAnalysis.PiB - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi4A + gameAnalysis.Ai4 * gameAnalysis.PiB - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi5A - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route10 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai2 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () + ", " +
                (-1 * gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                (gameAnalysis.Vi3B - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi4A - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                "0";

            gameAnalysis.Route11 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai2 - gameAnalysis.Ai3) * gameAnalysis.PiB - (1 - gameAnalysis.Ai2 - gameAnalysis.Ai3) * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Ai2 * gameAnalysis.PiB - gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                (gameAnalysis.Vi3B + gameAnalysis.Ai3 * gameAnalysis.PiB - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                gameAnalysis.Vi4A.ToString () + ", " +
                (gameAnalysis.Vi5B - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route12 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai2 - gameAnalysis.Ai3) * gameAnalysis.CiB).ToString () + ", " +
                (-1 * gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                (gameAnalysis.Vi3B - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                gameAnalysis.Vi4A.ToString () + ", " +
                "0";

            gameAnalysis.Route13 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai2 - gameAnalysis.Ai4) * gameAnalysis.PiB - (1 - gameAnalysis.Ai2 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Ai2 * gameAnalysis.PiB - gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                gameAnalysis.Vi3B.ToString () + ", " +
                (gameAnalysis.Vi4B + gameAnalysis.Ai4 * gameAnalysis.PiB - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi5A - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route14 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai2 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () + ", " +
                (-1 * gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                gameAnalysis.Vi3B.ToString () + ", " +
                (gameAnalysis.Vi4B - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                "0";

            gameAnalysis.Route15 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai2) * gameAnalysis.PiB - (1 - gameAnalysis.Ai2) * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Ai2 * gameAnalysis.PiB - gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                gameAnalysis.Vi3B.ToString () + ", " +
                gameAnalysis.Vi4B.ToString () + ", " +
                (gameAnalysis.Vi5B - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route16 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai2) * gameAnalysis.CiB).ToString () + ", " +
                (-1 * gameAnalysis.Ai2 * gameAnalysis.CiB + gameAnalysis.Ii).ToString () + ", " +
                gameAnalysis.Vi3B.ToString () + ", " +
                gameAnalysis.Vi4B.ToString () + ", " +
                "0";

            gameAnalysis.Route17 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.PiB - (1 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3B + gameAnalysis.Ai3 * gameAnalysis.PiB - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi4A + gameAnalysis.Ai4 * gameAnalysis.PiB - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi5A - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route18 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai3 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3B - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi4A - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                "0";

            gameAnalysis.Route19 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai3) * gameAnalysis.PiB - (1 - gameAnalysis.Ai3) * gameAnalysis.CiB).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3B + gameAnalysis.Ai3 * gameAnalysis.PiB - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                gameAnalysis.Vi4A.ToString () + ", " +
                (gameAnalysis.Vi5B - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route20 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai3) * gameAnalysis.CiB).ToString () +
                ", 0, " +
                (gameAnalysis.Vi3B - gameAnalysis.Ai3 * gameAnalysis.CiB).ToString () + ", " +
                gameAnalysis.Vi4A.ToString () + ", " +
                "0";

            gameAnalysis.Route21 = (gameAnalysis.Vi1 + (1 - gameAnalysis.Ai4) * gameAnalysis.PiB - (1 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () +
                ", 0, " +
                gameAnalysis.Vi3B.ToString () + ", " +
                (gameAnalysis.Vi4B + gameAnalysis.Ai4 * gameAnalysis.PiB - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                (gameAnalysis.Vi5A - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route22 = (gameAnalysis.Vi1 - (1 - gameAnalysis.Ai4) * gameAnalysis.CiB).ToString () +
                ", 0, " +
                gameAnalysis.Vi3B.ToString () + ", " +
                (gameAnalysis.Vi4B - gameAnalysis.Ai4 * gameAnalysis.CiB).ToString () + ", " +
                "0";

            gameAnalysis.Route23 = (gameAnalysis.Vi1 + 1 * gameAnalysis.PiB - 1 * gameAnalysis.CiB).ToString () +
                ", 0, " +
                gameAnalysis.Vi3B.ToString () + ", " +
                gameAnalysis.Vi4B.ToString () + ", " +
                (gameAnalysis.Vi5B - gameAnalysis.PiB).ToString ();

            gameAnalysis.Route24 = (gameAnalysis.Vi1 - 1 * gameAnalysis.CiB).ToString () +
                ", 0, " +
                gameAnalysis.Vi3B.ToString () + ", " +
                gameAnalysis.Vi4B.ToString () + ", " +
                "0";

        }

        public RoutePath CalculateBestRoute (HeritageGameAnalysisDto gameAnalysis) {
            RoutePath result = new RoutePath ();

            List<RoutePath> routesLevel5 = new List<RoutePath> ();
            List<RoutePath> routesLevel4 = new List<RoutePath> ();
            List<RoutePath> routesLevel3 = new List<RoutePath> ();
            List<RoutePath> routesLevel2 = new List<RoutePath> ();
            List<RoutePath> routesLevel1 = new List<RoutePath> ();

            routesLevel5.Add (new RoutePath (1, gameAnalysis.Route1));
            routesLevel5.Add (new RoutePath (2, gameAnalysis.Route2));
            routesLevel5.Add (new RoutePath (3, gameAnalysis.Route3));
            routesLevel5.Add (new RoutePath (4, gameAnalysis.Route4));
            routesLevel5.Add (new RoutePath (5, gameAnalysis.Route5));
            routesLevel5.Add (new RoutePath (6, gameAnalysis.Route6));
            routesLevel5.Add (new RoutePath (7, gameAnalysis.Route7));
            routesLevel5.Add (new RoutePath (8, gameAnalysis.Route8));
            routesLevel5.Add (new RoutePath (9, gameAnalysis.Route9));
            routesLevel5.Add (new RoutePath (10, gameAnalysis.Route10));
            routesLevel5.Add (new RoutePath (11, gameAnalysis.Route11));
            routesLevel5.Add (new RoutePath (12, gameAnalysis.Route12));
            routesLevel5.Add (new RoutePath (13, gameAnalysis.Route13));
            routesLevel5.Add (new RoutePath (14, gameAnalysis.Route14));
            routesLevel5.Add (new RoutePath (15, gameAnalysis.Route15));
            routesLevel5.Add (new RoutePath (16, gameAnalysis.Route16));
            routesLevel5.Add (new RoutePath (17, gameAnalysis.Route17));
            routesLevel5.Add (new RoutePath (18, gameAnalysis.Route18));
            routesLevel5.Add (new RoutePath (19, gameAnalysis.Route19));
            routesLevel5.Add (new RoutePath (20, gameAnalysis.Route20));
            routesLevel5.Add (new RoutePath (21, gameAnalysis.Route21));
            routesLevel5.Add (new RoutePath (22, gameAnalysis.Route22));
            routesLevel5.Add (new RoutePath (23, gameAnalysis.Route23));
            routesLevel5.Add (new RoutePath (24, gameAnalysis.Route24));

            for (int l = 5 - 1; l >= 0; l--) {
                switch (l) {
                    case 4:
                        for (int i = 0; i < 24; i += 2) {
                            routesLevel4.Add (CompareRoutes (routesLevel5[i], routesLevel5[i + 1], l));
                        }
                        break;
                    case 3:
                        for (int i = 0; i < 12; i += 2) {
                            routesLevel3.Add (CompareRoutes (routesLevel4[i], routesLevel4[i + 1], l));
                        }
                        routesLevel4.Clear ();
                        break;
                    case 2:
                        for (int i = 0; i < 6; i += 2) {
                            routesLevel2.Add (CompareRoutes (routesLevel3[i], routesLevel3[i + 1], l));
                        }
                        routesLevel3.Clear ();
                        break;
                    case 1:
                        int k = 0;
                        routesLevel1.Add (CompareRoutes (routesLevel2[k], routesLevel2[k + 1], l));
                        routesLevel1.Add (routesLevel2[k + 2]);
                        routesLevel2.Clear ();
                        break;
                    case 0:
                        int m = 0;
                        result = CompareRoutes (routesLevel1[m], routesLevel1[m + 1], l);
                        break;
                    default:
                        break;
                }

            }

            return result;
        }

        public RoutePath CompareRoutes (RoutePath path1, RoutePath path2, int compareLevel) {
            double valuePath1, valuePath2;
            Double.TryParse (path1.routeValue.Split (',') [compareLevel], out valuePath1);
            Double.TryParse (path2.routeValue.Split (',') [compareLevel], out valuePath2);

            if (valuePath1 > valuePath2) {
                return path1;
            } else {
                return path2;
            }

        }

        public struct RoutePath {
            public int id;
            public string routeValue;

            public RoutePath (int routeId, string pathValue) {
                id = routeId;
                routeValue = pathValue;
            }
        }

    }
}