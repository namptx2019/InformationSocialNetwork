using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserService.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }

        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    //Adds configurations for Student from separate class
        //    modelBuilder.Configurations.Add(new UserConfigurations());

        //    modelBuilder.Entity<User>()
        //        .ToTable("Users");

        //    //modelBuilder.Entity<Teacher>()
        //    //    .MapToStoredProcedures();
        //}
    }
}
