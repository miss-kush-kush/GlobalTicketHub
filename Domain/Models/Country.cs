using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Country
    {
        public const int MAX_TITLE_LENGTH = 250;
        public Guid Id { get; }
        public string CountryName { get; }

        public Country(Guid id, string countryName)
        {
            Id = id;
            CountryName = countryName;
        }

        public static (Country Country, string Error) Create(Guid Id, string CountryName)
        {
            var error = string.Empty;
            if(string.IsNullOrEmpty(CountryName) || CountryName.Length > MAX_TITLE_LENGTH) 
            {
                error = "Name cannot be empty or longer than 250 symbols";
            }

            var country = new Country(Id, CountryName);
            return (country, error);    
        }
    }
}
