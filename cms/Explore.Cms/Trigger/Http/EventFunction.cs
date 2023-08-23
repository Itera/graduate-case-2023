using System.Net;
using System.Threading.Tasks;
using Explore.Cms.Configuration.OpenApiExamples.Transaction;
using Explore.Cms.Helpers.Http;
using Explore.Cms.Models;
using Explore.Cms.Services;
using Explore.Cms.Validation.TransactionValidators;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.OpenApi.Models;
using MongoDB.Driver;
using Explore.Cms.Configuration.OpenApiExamples.Event;

namespace Explore.Cms.Trigger.Http;

public class EventFunction
{
    private readonly IEventService _eventService;

    public EventFunction(IEventService eventService)
    {
        _eventService = eventService;
    }

    [FunctionName("GetEvent")]
    [OpenApiOperation("GetTransaction", "Transactions", Summary = "Get one transaction", Description = "Get one transaction")]
    [OpenApiParameter("id", Description = "Id of the transaction", In = ParameterLocation.Path, Required = true,
        Type = typeof(Guid))]
    [OpenApiResponseWithBody(HttpStatusCode.OK, "application/json", typeof(GuestTransaction), Summary = "Ok response",
        Description = "This returns the response", Example = typeof(TransactionResponseExample))]
    [OpenApiResponseWithoutBody(HttpStatusCode.BadRequest, Summary = "Bad request response",
        Description = "Bad request response when the id is not a valid Guid")]
    [OpenApiResponseWithoutBody(HttpStatusCode.NotFound, Summary = "The not found response",
        Description = "The response when the transaction is not found")]
    public async Task<IActionResult> GetEvent(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "events/{id}")]
        HttpRequest req, string id)
    {
        var parseResult = Guid.TryParse(id, out var guid);
        if (!parseResult) return new BadRequestObjectResult("Invalid id");
        
        var transaction = await _eventService.FindOneByIdAsync(guid);

        return transaction.Id == Guid.Empty ? new NotFoundResult() : new OkObjectResult(transaction);
    }
    

    [FunctionName("CreateEvent")]
    [OpenApiOperation("CreateTransaction", "Transactions", Summary = "Create one transaction", Description = "Create one transaction")]
    [OpenApiRequestBody("application/json", typeof(Event), Example = typeof(CreateEventRequestExample))]
    [OpenApiResponseWithBody(HttpStatusCode.Created, "application/json", typeof(GuestTransaction), Summary = "Ok response",
        Description = "This returns the created transaction", Example = typeof(TransactionResponseExample))]
    [OpenApiResponseWithoutBody(HttpStatusCode.BadRequest, Summary = "Bad request response",
        Description = "Bad request response when the request is invalid")]
    [OpenApiResponseWithoutBody(HttpStatusCode.Conflict, Summary = "Conflict response",
        Description = "Conflict response when the transaction could not be created")]
    public async Task<IActionResult> CreateEvent(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "events")] HttpRequest req)
    {
        var event_ = await HttpRequestHelpers.GetJsonBody<Event>(req);

        try
        {
            await _eventService.AddOneAsync(event_);
        }
        catch (MongoWriteException e)
        {
            return new ConflictObjectResult($"Could not create event. Reason: {e.WriteError.Category}");
        }
        
        var createdEvent = await _eventService.FindOneByIdAsync(event_.Id);
        if (createdEvent.Id == Guid.Empty) return new ConflictObjectResult("Could not create event");

        return new CreatedResult($"guest/{createdEvent.Id}", createdEvent);
    }
}