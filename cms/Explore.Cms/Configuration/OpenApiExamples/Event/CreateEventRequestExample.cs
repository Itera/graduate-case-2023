using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Abstractions;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Resolvers;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;

namespace Explore.Cms.Configuration.OpenApiExamples.Event;

public class CreateEventRequestExample : OpenApiExample<Explore.Cms.Models.Event>
{
    public override IOpenApiExample<Explore.Cms.Models.Event> Build(NamingStrategy? namingStrategy = null)
    {
        Examples.Add(OpenApiExampleResolver.Resolve(
            "Create Event request",
            new Explore.Cms.Models.Event()
            {
                EventName = "John",
                PackingList = new List<string>(){"Socks", "Shoes", "Jacket"},
                DateTime = DateTime.Now.AddDays(7),
                PriceEvent = 3200,
                CreatedAt = DateTime.Now.AddDays(7)
            }, namingStrategy));
        return this;
    }
}

public class CreateEventRequest
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}