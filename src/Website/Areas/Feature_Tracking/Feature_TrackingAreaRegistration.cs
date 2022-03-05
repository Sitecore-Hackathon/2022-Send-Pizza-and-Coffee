using System.Web.Mvc;

namespace Website.Areas.Feature_Tracking
{
    public class Feature_TrackingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Feature_Tracking";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Feature_Tracking_default",
                "Feature_Tracking/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}