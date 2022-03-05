using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Constellation.Foundation.ModelMapping.FieldModels;
using Constellation.Foundation.ModelMapping.MappingAttributes;

namespace Feature.Tracking.Models
{
    public class TrackYourOrderViewModel
    {
        [RawValueOnly]
        public string Headline { get; set; }
        [RawValueOnly]
        public string Copy { get; set; }
        [RawValueOnly]
        public string TrackingNumberLabel { get; set; }
        [RawValueOnly]
        public string TrackingNumberPlaceholder { get; set; }

        #region Google Maps

        public ImageModel DeliveryPin { get; set; }
        public ImageModel HomePin { get; set; }
        public ImageModel RestaurantPin { get; set; }

        #endregion
    }
}
