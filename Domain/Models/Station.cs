using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Station
    {
        public const int MAX_STATION_NAME_LENGTH = 250;
        public Guid Id { get; }
        public string StationName { get; }
        public Guid LocationId { get; }

        public virtual Location Location { get; }

        private Station(Guid id, string stationName, Guid locationId)
        {
            Id = id;
            StationName = stationName;
            LocationId = locationId;
        }

        public static (Station Station, string Error) Create(Guid id, string stationName, Guid locationId)
        {
            var error = string.Empty;
            if (string.IsNullOrEmpty(stationName) || stationName.Length > MAX_STATION_NAME_LENGTH)
            {
                error = "Station name cannot be empty or longer than 250 symbols.";
            }

            var station = new Station(id, stationName, locationId);
            return (station, error);
        }
    }
}
