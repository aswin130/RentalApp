// using Microsoft.AspNetCore.Mvc;
// using Microsoft.IdentityModel.Tokens;
// using System.IdentityModel.Tokens.Jwt;
// using System.Security.Claims;
// using System.Text;

// namespace JwtInDotnetCore.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class UserController : ControllerBase
//     {
//         private IConfiguration _config;
//         public UserController(IConfiguration config) 
//         {
//             _config = config;
//         }

//         [HttpPost]
//         public IActionResult Post([FromBody] User loginRequest)
//         {
            

//             var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
//             var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

//             var claims = new[]            
//             {new Claim(ClaimTypes.Name, $"{loginRequest.FirstName} {loginRequest.LastName}"),                
//             new Claim(ClaimTypes.Role, loginRequest.Role),    
//             };
//             var Sectoken = new JwtSecurityToken(_config["Jwt:Issuer"],
//               _config["Jwt:Issuer"],
//               claims,
//               expires: DateTime.Now.AddMinutes(120),
//               signingCredentials: credentials);

//             var token =  new JwtSecurityTokenHandler().WriteToken(Sectoken);

//             return Ok(token);
//         }
//     }
// }