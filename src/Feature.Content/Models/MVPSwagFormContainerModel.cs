using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.ModelMapping.MappingAttributes;

namespace Feature.Content.Models
{
    public class MVPSwagFormContainerModel
    {
        [RawValueOnly]
        public string Title { get; set; }
        [RawValueOnly]
        public string Description { get; set; }
    }
}
