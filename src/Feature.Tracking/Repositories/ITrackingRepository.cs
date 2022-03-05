using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Feature.Tracking.ApiModels.QuickType;

namespace Feature.Tracking.Repositories
{
    public interface ITrackingRepository
    {
        TrackingResponse GetTracking(string trackingNumber);
    }
}
