using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL.Entities
{
    public class StationEntity
    {
        public Guid Id { get; set; } 
        public string StationName { get; set; }
        public Guid LocationId { get; set; } 

        public virtual LocationEntity Location { get; set; }
    }
}
