using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NerdsoftLeadTrackerAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    [RoutePrefix("api/Dashboard")]
    public class DashboardController : ApiController
    {
        public DashboardController()
        { }

        [Authorize]
        public IHttpActionResult Get()
        {
            return Ok("Test");
        }
    }
}
