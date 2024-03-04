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
    public class StationConfiguration : IEntityTypeConfiguration<StationEntity>
    {
        public void Configure(EntityTypeBuilder<StationEntity> builder)
        {
            builder.HasKey(s => s.Id); 

            builder.Property(s => s.StationName)
                   .IsRequired() 
                   .HasMaxLength(Station.MAX_STATION_NAME_LENGTH); 

            builder.HasOne(s => s.Location) 
                   .WithMany(l => l.Stations) 
                   .HasForeignKey(s => s.LocationId) 
                   .OnDelete(DeleteBehavior.Cascade); 

            
        }
    }
}
