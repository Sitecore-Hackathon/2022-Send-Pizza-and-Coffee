using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.Labels;
using Constellation.Foundation.ModelMapping.MappingAttributes;

namespace Feature.Tracking.Models
{
    [Label("{FBC75554-0CEF-4657-9EEB-6D853AF6C84E}")]
    public class TrackYourOrderLabels
    {
        [RawValueOnly]
        public string TrackOrder { get; set; }

        [RawValueOnly]
        public string Status { get; set; }
        [RawValueOnly]
        public string ArrivedTime { get; set; }
        [RawValueOnly]
        public string Delivery { get; set; }
        [RawValueOnly]
        public string Plate { get; set; }
    }
}
