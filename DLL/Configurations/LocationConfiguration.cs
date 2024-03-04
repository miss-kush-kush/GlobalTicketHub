using DLL.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace DLL.Configurations
{
    public class LocationConfiguration : IEntityTypeConfiguration<LocationEntity>
    {
        public void Configure(EntityTypeBuilder<LocationEntity> builder)
        {
            builder.HasKey(l => l.Id);

            builder.Property(l => l.LocationName)
                   .IsRequired() 
                   .HasMaxLength(Location.MAX_LOCATION_NAME_LENGTH); 

            builder.Property(l => l.PostalCode)
                   .IsRequired() 
                   .HasMaxLength(Location.MAX_POSTAL_CODE_LENGTH); 

            builder.HasOne(l => l.Country) 
                   .WithMany(c => c.Locations) 
                   .HasForeignKey(l => l.CountryId); 

            builder.HasMany(l => l.Stations)
                   .WithOne(s => s.Location) 
                   .HasForeignKey(s => s.LocationId);

        }
    }
}
