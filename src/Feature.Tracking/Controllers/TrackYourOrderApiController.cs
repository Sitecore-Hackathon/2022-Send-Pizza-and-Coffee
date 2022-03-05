using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web.Mvc;
using Feature.Tracking.ApiModels.QuickType;
using Feature.Tracking.Repositories;
using Sitecore.Mvc.Controllers;

namespace Feature.Tracking.Controllers
{
    public class TrackYourOrderApiController : SitecoreController
    {
        private readonly ITrackingRepository _trackingRepository;
        public TrackYourOrderApiController(ITrackingRepository trackingRepository)
        {
            _trackingRepository = trackingRepository;
        }

        [HttpPost]
        public ActionResult Tracking(string trackingNumber)
        {
            return Json(_trackingRepository.GetTracking(trackingNumber), JsonRequestBehavior.AllowGet);
        }
    }
}
