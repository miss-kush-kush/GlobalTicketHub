using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Location
    {
        public const int MAX_LOCATION_NAME_LENGTH = 250;
        public const int MAX_POSTAL_CODE_LENGTH = 20;
        public Guid Id { get; }
        public string LocationName { get; }
        public string PostalCode { get; }
        public Guid CountryId { get; }

        public virtual Country Country { get; }
        private readonly List<Station> _stations = new List<Station>();
        public virtual IReadOnlyCollection<Station> Stations => _stations.AsReadOnly();

        private Location(Guid id, string locationName, string postalCode, Guid countryId)
        {
            Id = id;
            LocationName = locationName;
            PostalCode = postalCode;
            CountryId = countryId;
        }

        public static (Location Location, string Error) Create(Guid id, string locationName, string postalCode, Guid countryId)
        {
            var error = string.Empty;
            if (string.IsNullOrEmpty(locationName) || locationName.Length > MAX_LOCATION_NAME_LENGTH)
            {
                error = "Location name cannot be empty or longer than 250 symbols.";
            }
            else if (string.IsNullOrEmpty(postalCode) || postalCode.Length > MAX_POSTAL_CODE_LENGTH)
            {
                error = "Postal code cannot be empty or longer than 20 symbols.";
            }

            var location = new Location(id, locationName, postalCode, countryId);
            return (location, error);
        }

        public void AddStation(Station station)
        {
            if (station != null)
            {
                _stations.Add(station);
            }
        }
    }
}
