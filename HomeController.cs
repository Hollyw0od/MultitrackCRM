using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace NerdsoftLeadTrackerAPI.Controllers
{
    [RoutePrefix("api/Home")]
    public class HomeController : ApiController
    {
        [HttpPost]
        [Route("TestSuccessRequest")]
        public IHttpActionResult TestSuccessRequest()
        {
            return Ok();
        }

        [HttpPost]
        [Route("TestFailRequest")]
        public IHttpActionResult TestFailRequest()
        {
            return BadRequest("This broke!");
        }
    }
}
