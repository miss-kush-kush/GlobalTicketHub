using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLL.Entities
{
    public class UserEntity : IdentityUser
    {
        [StringLength(100)]
        [MaxLength(100)]
        [Required]
        public string? FirstName { get; set; }
        public string? LastName { get; set; }    
    }
}
