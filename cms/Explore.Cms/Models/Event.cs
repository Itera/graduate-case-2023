using Explore.Cms.DAL;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Explore.Cms.Models;
[BsonCollection("events")]
public class Event : Document
{
    [BsonElement("eventName")] public string EventName { get; set; } = string.Empty;
    [BsonElement("packingList")] public IEnumerable<string> PackingList { get; set; } = new List<string>();
    [BsonElement("dateEvent")] public DateTime DateTime { get; set; } = DateTime.Now;
    [BsonElement("priceEvent")] public int PriceEvent {get; set; } = 0;
}