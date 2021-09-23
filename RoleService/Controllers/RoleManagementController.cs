using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ApiService.Data;
using ApiService.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiService.Controllers
{
    [ApiController]
    [Route("api/role")]
    public class RoleManagementController: ControllerBase
    {
        private readonly ILogger<RoleManagementController> _logger;
        private readonly ApplicationDbContext _dbContext;

        public RoleManagementController(ILogger<RoleManagementController> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        // GET: api/role
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> GetAllRoles()
        {
            return await _dbContext.Roles.ToListAsync();
        }

        [HttpPost]
        [Route("save")]
        public Response<string> CreateOrEditRole(Role role)
        {
            var res = new Response<string>()
            {
                Message = "OK",
                Success = true,
            };
            if (role.RoleId == null)
            {
                try
                {
                    _dbContext.Roles.Add(role);
                    _dbContext.SaveChanges();
                }
                catch (Exception e)
                {
                    res.Message = e.Message;
                    res.Success = false;
                    return res;
                }
            }
            else
            {
                try
                {
                    var update = _dbContext.Roles.FirstOrDefault(e => e.RoleId == role.RoleId);
                    Role.Copy(ref role, ref update);
                    _dbContext.Roles.Update(update);
                    _dbContext.SaveChanges();
                }
                catch (Exception e)
                {
                    res.Message = e.Message;
                    res.Success = false;
                    return res;
                }
            }
            res.Message = "OK";
            res.Success = true;
            return res;
        }
    }
}
