using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.ModelMapping;
using Constellation.Foundation.Mvc;
using Constellation.Foundation.Mvc.Patterns.Controllers;
using Feature.Navigation.Models;

namespace Feature.Navigation.Controllers
{
    public class SendPizzaFooterController : DatasourceRenderingController<SendPizzaFooterModel>
    {
        public SendPizzaFooterController(IViewPathResolver viewPathResolver, IModelMapper modelMapper) : base(viewPathResolver, modelMapper)
        {
        }
    }
}
