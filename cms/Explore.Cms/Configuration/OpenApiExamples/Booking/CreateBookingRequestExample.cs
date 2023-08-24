using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Abstractions;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Resolvers;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;

namespace Explore.Cms.Configuration.OpenApiExamples.Booking;

public class CreateBookingRequestExample : OpenApiExample<Explore.Cms.Models.Booking>
{
    public override IOpenApiExample<Explore.Cms.Models.Booking> Build(NamingStrategy? namingStrategy = null)
    {
        Examples.Add(OpenApiExampleResolver.Resolve(
            "Create Booking request",
            new Explore.Cms.Models.Booking()
            {
                GuestId = Guid.NewGuid(),
                OrderedAt = DateTime.Now.AddDays(7),
                EventName = "Dog sled"
            }, namingStrategy));
        return this;
    }
}

public class CreateBookingRequest
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}