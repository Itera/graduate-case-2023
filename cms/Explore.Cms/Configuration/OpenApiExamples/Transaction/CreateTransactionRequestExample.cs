using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Abstractions;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Resolvers;
using MongoDB.Bson;
using Newtonsoft.Json.Serialization;

namespace Explore.Cms.Configuration.OpenApiExamples.Transaction;

public class CreateTransactionRequestExample : OpenApiExample<CreateTransactionRequest>
{
    public override IOpenApiExample<CreateTransactionRequest> Build(NamingStrategy? namingStrategy = null)
    {
        Examples.Add(OpenApiExampleResolver.Resolve(
            "Create guest request",
            new CreateTransactionRequest()
            {
                Amount = new decimal(100.99),
                Description = "Example transaction",
                GuestId = Guid.NewGuid(),
                RoomId = Guid.NewGuid(),
            }, namingStrategy));
        return this;
    }
}

public class CreateTransactionRequest
{
    public decimal Amount { get; set; }
    public string Description { get; set; } = string.Empty;
    public Guid RoomId { get; init; } = Guid.Empty;
    public Guid GuestId { get; init; } = Guid.Empty;
    public DateTime TransactionDate { get; } = DateTime.Now;
}