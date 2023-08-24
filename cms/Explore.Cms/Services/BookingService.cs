using System.Collections.Generic;
using System.Threading.Tasks;
using Explore.Cms.Configuration;
using Explore.Cms.DAL;
using Explore.Cms.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Explore.Cms.Services;

public class BookingService : MongoRepository<Booking>, IBookingService
{
    private ILogger<BookingService> _logger;

    public BookingService(IOptions<MongoDbOptions> options, IMongoClient client, ILogger<BookingService> logger) : base(options, client)
    {
        _logger = logger;

    }
}
