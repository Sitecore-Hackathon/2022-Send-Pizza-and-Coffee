using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.ModelMapping.FieldModels;
using Constellation.Foundation.ModelMapping.MappingAttributes;

namespace Feature.Navigation.Models
{
    public class NavigationLinkModel
    {
        public GeneralLinkModel Link { get; set; }
        public ImageModel Image { get; set; }
    }
}
