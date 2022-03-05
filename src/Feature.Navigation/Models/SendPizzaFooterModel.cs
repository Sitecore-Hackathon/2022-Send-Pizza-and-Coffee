using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.ModelMapping.MappingAttributes;

namespace Feature.Navigation.Models
{
    public class SendPizzaFooterModel
    {
        [RawValueOnly]
        public string Copyright { get; set; }
        public IEnumerable<NavigationLinkModel> FooterLinks { get; set; }
    }
}
