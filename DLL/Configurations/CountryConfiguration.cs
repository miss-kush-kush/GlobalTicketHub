using DLL.Entities;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL.Configurations
{
    public class CountryConfiguration : IEntityTypeConfiguration<CountryEntity>
    {
        public void Configure(EntityTypeBuilder<CountryEntity> builder)
        {
            builder.HasKey(c => c.Id);
            builder.Property(c => c.CountryName)
                .HasMaxLength(Country.MAX_TITLE_LENGTH)
                .IsRequired();
            builder.HasMany(c => c.Locations)
                .WithOne(l => l.Country)
                .HasForeignKey(l => l.CountryId);
        }
    }
}
