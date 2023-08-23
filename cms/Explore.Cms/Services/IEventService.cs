using Explore.Cms.DAL;
using Explore.Cms.Models;

namespace Explore.Cms.Services;

public interface IEventService : IMongoRepository<Event>
{
}