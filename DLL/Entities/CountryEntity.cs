using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL.Entities
{
    public class CountryEntity
    {
        public Guid Id { get; set; } 
        public string CountryName { get; set; }

        public virtual ICollection<LocationEntity> Locations { get; set; }
    }
}
