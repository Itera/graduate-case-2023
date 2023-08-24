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
using Explore.Cms.Configuration.OpenApiExamples.Booking;

namespace Explore.Cms.Trigger.Http;

public class BookingFunction
{
    private readonly IBookingService BookingService;

    public BookingFunction(IBookingService bookingService)
    {
        BookingService = bookingService;
    }

    [FunctionName("GetBooking")]
    [OpenApiOperation("GetTransaction", "Transactions", Summary = "Get one transaction", Description = "Get one transaction")]
    [OpenApiParameter("id", Description = "Id of the transaction", In = ParameterLocation.Path, Required = true,
        Type = typeof(Guid))]
    [OpenApiResponseWithBody(HttpStatusCode.OK, "application/json", typeof(GuestTransaction), Summary = "Ok response",
        Description = "This returns the response", Example = typeof(TransactionResponseExample))]
    [OpenApiResponseWithoutBody(HttpStatusCode.BadRequest, Summary = "Bad request response",
        Description = "Bad request response when the id is not a valid Guid")]
    [OpenApiResponseWithoutBody(HttpStatusCode.NotFound, Summary = "The not found response",
        Description = "The response when the transaction is not found")]
    public async Task<IActionResult> GetBooking(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "bookings/{id}")]
        HttpRequest req, string id)
    {
        var parseResult = Guid.TryParse(id, out var guid);
        if (!parseResult) return new BadRequestObjectResult("Invalid id");
        
        var transaction = await BookingService.FindOneByIdAsync(guid);

        return transaction.Id == Guid.Empty ? new NotFoundResult() : new OkObjectResult(transaction);
    }
    

    [FunctionName("CreateBooking")]
    [OpenApiOperation("CreateTransaction", "Transactions", Summary = "Create one transaction", Description = "Create one transaction")]
    [OpenApiRequestBody("application/json", typeof(Booking), Example = typeof(CreateBookingRequestExample))]
    [OpenApiResponseWithBody(HttpStatusCode.Created, "application/json", typeof(GuestTransaction), Summary = "Ok response",
        Description = "This returns the created transaction", Example = typeof(TransactionResponseExample))]
    [OpenApiResponseWithoutBody(HttpStatusCode.BadRequest, Summary = "Bad request response",
        Description = "Bad request response when the request is invalid")]
    [OpenApiResponseWithoutBody(HttpStatusCode.Conflict, Summary = "Conflict response",
        Description = "Conflict response when the transaction could not be created")]
    public async Task<IActionResult> CreateBooking(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "bookings")] HttpRequest req)
    {
        var booking = await HttpRequestHelpers.GetJsonBody<Booking>(req);

        try
        {
            await BookingService.AddOneAsync(booking);
        }
        catch (MongoWriteException e)
        {
            return new ConflictObjectResult($"Could not create booking. Reason: {e.WriteError.Category}");
        }
        
        var createdBooking = await BookingService.FindOneByIdAsync(booking.Id);
        if (createdBooking.Id == Guid.Empty) return new ConflictObjectResult("Could not create booking");

        return new CreatedResult($"guest/{createdBooking.Id}", createdBooking);
    }
}