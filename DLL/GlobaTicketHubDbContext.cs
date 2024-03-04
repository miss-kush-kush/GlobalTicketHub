using DLL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL
{
    public class GlobaTicketHubDbContext: IdentityDbContext<UserEntity>
    {
        public GlobaTicketHubDbContext(DbContextOptions<GlobaTicketHubDbContext> options) : base(options)
        {
        
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        //public DbSet<CountryEntity> Countries { get; set; }
        //public DbSet<LocationEntity> Locations { get; set; }
        //public DbSet<StationEntity> Stations { get; set; }
    }
}
