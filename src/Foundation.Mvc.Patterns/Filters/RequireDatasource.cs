using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Foundation.Mvc.Patterns.Filters
{
    public class RequireDatasource : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (RenderingContext.CurrentOrNull != null &&
                (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource) || RenderingContext.Current.Rendering.Item == null))
            {
                // Check Experience Editor
                if (Sitecore.Context.PageMode.IsExperienceEditorEditing)
                {
                    filterContext.Result = new ContentResult() { Content = @"<p class=""rmc-select-datasource"">[Module: " + RenderingContext.Current.Rendering.RenderingItem.Name + " (" + filterContext.ActionDescriptor.ActionName + "): No Datasource Found, Please select Datasource Item]</p>", ContentType = "text/html" };

                }
                else
                {
                    filterContext.Result = new EmptyResult();
                }
            }
        }
    }
}
