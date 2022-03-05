using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.ModelMapping;
using Constellation.Foundation.Mvc;
using Constellation.Foundation.Mvc.Patterns.Controllers;
using Feature.Tracking.Models;
using Foundation.Mvc.Patterns.Filters;

namespace Feature.Tracking.Controllers
{
    [RequireDatasource]
    public class TrackYourOrderController : DatasourceRenderingController<TrackYourOrderViewModel>
    {
        public TrackYourOrderController(IViewPathResolver viewPathResolver, IModelMapper modelMapper) : base(viewPathResolver, modelMapper)
        {
        }
    }
}
