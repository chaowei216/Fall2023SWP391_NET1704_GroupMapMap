using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.Dtos
{
    public class TokenDto
    {
        public string Email { get; set; }
        public string FullName { get; set; }
        public Role Role { get; set; }
    }
}
