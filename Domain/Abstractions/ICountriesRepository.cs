using Domain.Models;

namespace Domain.Abstractions
{
    public interface ICountriesRepository
    {
        Task<Guid> Create(Country country);
        Task<Guid> Delete(Guid id);
        Task<List<Country>> Get();
        Task<Guid> Update(Guid id, string countryName);
    }
}