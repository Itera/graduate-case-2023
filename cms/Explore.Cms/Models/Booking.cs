using Explore.Cms.DAL;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Explore.Cms.Models;
[BsonCollection("booking")]
public class Booking : Document
{
    [BsonElement("guestId")] public Guid GuestId { get; set; } = Guid.Empty;
    [BsonElement("orderedAt")] public DateTime OrderedAt { get; set; } = DateTime.Now;
    [BsonElement("eventName")] public string EventName {get; set; } = string.Empty;
}