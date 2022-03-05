using System.Web.Mvc;

namespace Website.Areas.SendPizza
{
    public class SendPizzaAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SendPizza";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            // Not needed by Sitecore

            //context.MapRoute(
            //    "ZodiacManual_default",
            //    "ZodiacManual/{controller}/{action}/{id}",
            //    new { action = "Index", id = UrlParameter.Optional }
            //);
        }
    }
}