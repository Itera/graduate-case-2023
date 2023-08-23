using System.Collections.Generic;
using System.Threading.Tasks;
using Explore.Cms.Configuration;
using Explore.Cms.DAL;
using Explore.Cms.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Explore.Cms.Services;

public class EventService : MongoRepository<Event>, IEventService
{
    private ILogger<EventService> _logger;

    public EventService(IOptions<MongoDbOptions> options, IMongoClient client, ILogger<EventService> logger) : base(options, client)
    {
        _logger = logger;

    }
}
