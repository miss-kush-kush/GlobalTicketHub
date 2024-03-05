using DLL;
using DLL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("GlobalTicketHubConnection") ?? throw new InvalidCastException (nameof(builder));

builder.Services.AddDbContext<GlobaTicketHubDbContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<UserEntity>()
    .AddEntityFrameworkStores<GlobaTicketHubDbContext>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.MapIdentityApi<UserEntity>();
app.MapPost("/logout", async (SignInManager<UserEntity> signInManager) =>
{
    await signInManager.SignOutAsync();
    return Results.Ok();
}
).RequireAuthorization();

app.MapGet("/pingauth", (ClaimsPrincipal user) =>
{
    var email = user.FindFirstValue(ClaimTypes.Email);
    return Results.Json(new { Email = email }); ;
}).RequireAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
