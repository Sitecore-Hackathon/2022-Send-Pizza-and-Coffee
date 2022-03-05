namespace Feature.Tracking.ApiModels.QuickType
{
    using System;
    using System.Collections.Generic;

    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class TrackingResponse
    {
        [JsonProperty("trackingNumber")]
        public string trackingNumber { get; set; }

        [JsonProperty("status")]
        public string status { get; set; }

        [JsonProperty("estimationTime")]
        public DateTime estimationTime { get; set; }

        [JsonProperty("deliveryMan")]
        public DeliveryMan deliveryMan { get; set; }

        [JsonProperty("source")]
        public Destination source { get; set; }

        [JsonProperty("destination")]
        public Destination destination { get; set; }

        [JsonProperty("currentPosition")]
        public Location currentPosition { get; set; }
    }

    public partial class Location
    {
        [JsonProperty("latitude")]
        public double latitude { get; set; }

        [JsonProperty("longitude")]
        public double longitude { get; set; }
    }

    public partial class DeliveryMan
    {
        [JsonProperty("fullName")]
        public string fullName { get; set; }

        [JsonProperty("plate")]
        public string plate { get; set; }

        [JsonProperty("rating")]
        public double rating { get; set; }

        [JsonProperty("phone")]
        public string phone { get; set; }
    }

    public partial class Destination
    {
        [JsonProperty("name")]
        public string name { get; set; }

        [JsonProperty("address")]
        public string address { get; set; }

        [JsonProperty("zipCode")]
        public string zipCode { get; set; }

        [JsonProperty("location")]
        public Location location { get; set; }
    }
}