using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL.Entities
{
    public class LocationEntity
    {
        public Guid Id { get; set; }
        public string LocationName { get; set; }
        public string PostalCode { get; set; }
        public Guid CountryId { get; set; } 

        public virtual CountryEntity Country { get; set; }

        public virtual ICollection<StationEntity> Stations { get; set; }
    }
}
