using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Feature.Tracking.ApiModels.QuickType;

namespace Feature.Tracking.Repositories
{
    public class MockTrackingRepository : ITrackingRepository
    {
        public TrackingResponse GetTracking(string trackingNumber)
        {
            return new TrackingResponse()
            {
                trackingNumber = trackingNumber,
                status = "On Your Way",
                estimationTime = DateTime.Now,
                currentPosition = new Location
                {
                    latitude = -0.175896,
                    longitude = -78.483381
                },
                deliveryMan = new DeliveryMan
                {
                    fullName = "Joe Doe",
                    phone = "(529) 943-2234",
                    plate = "AX-004",
                    rating = 4.5
                },
                destination = new Destination
                {
                    address = "Street 1",
                    location = new Location
                    {
                        latitude = -0.17573,
                        longitude = -78.4885905
                    },
                    name = "Home Address",
                    zipCode = "170517"
                },
                source = new Destination
                {
                    address = "Street 2",
                    location = new Location
                    {
                        latitude = -0.1757,
                        longitude = -78.4885905
                    },
                    name = "Pizza Hut",
                    zipCode = "170517"
                }
            };
        }
    }
}
