using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Feature.Tracking.Controllers;
using Feature.Tracking.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;

namespace Feature.Tracking.IoC
{
    public class RegisterMockRepository : IServicesConfigurator
    {

        public void Configure(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<ITrackingRepository, MockTrackingRepository>();
            serviceCollection.AddTransient(typeof(TrackYourOrderApiController));
        }
    }
}
