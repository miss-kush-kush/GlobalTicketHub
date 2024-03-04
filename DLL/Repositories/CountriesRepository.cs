using DLL.Entities;
using Domain.Abstractions;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL.Repositories
{
    public class CountriesRepository /*: ICountriesRepository*/
    {
        private readonly GlobaTicketHubDbContext _context;

        public CountriesRepository(GlobaTicketHubDbContext context)
        {
            _context = context;
        }

        //public async Task<List<Country>> Get()
        //{
        //    var countryEntities = await _context.Countries
        //        .AsNoTracking()
        //        .ToListAsync();
        //    var countries = countryEntities
        //        .Select(c => Country.Create(c.Id, c.CountryName).Country)
        //        .ToList();

        //    return countries;
        //}

        //public async Task<Guid> Create(Country country)
        //{
        //    var countryEntity = new CountryEntity
        //    {
        //        Id = country.Id,
        //        CountryName = country.CountryName,
        //    };

        //    await _context.Countries.AddAsync(countryEntity);
        //    await _context.SaveChangesAsync();

        //    return countryEntity.Id;
        //}

        //public async Task<Guid> Update(Guid id, string countryName)
        //{
        //    await _context.Countries
        //        .Where(c => c.Id == id)
        //        .ExecuteUpdateAsync(o => o
        //        .SetProperty(c => c.CountryName, c => countryName));

        //    return id;
        //}

        //public async Task<Guid> Delete(Guid id)
        //{
        //    await _context.Countries
        //        .Where(c => c.Id == id)
        //        .ExecuteDeleteAsync();

        //    return id;
        //}
    }
}
