namespace NerdsoftLeadTrackerAPI.Migrations
{
    using Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Utilities;
    internal sealed class Configuration : DbMigrationsConfiguration<NerdsoftLeadTrackerAPI.Context.AuthContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(NerdsoftLeadTrackerAPI.Context.AuthContext context)
        {
            if (context.Clients.Count() > 0)
            {
                return;
            }

            context.Clients.AddRange(BuildClientsList());
            context.SaveChanges();
        }

        private static List<Client> BuildClientsList()
        {

            List<Client> ClientsList = new List<Client>
            {
                new Client
                { Id = "nerdsoftLeadTracker",
                    Secret= Helper.GetHash("NSs3cr3t"),
                    Name="Nerdsoft Lead Tracker Web",
                    ApplicationType =  Models.ApplicationTypes.JavaScript,
                    Active = true,
                    RefreshTokenLifeTime = 7200,
                    AllowedOrigin = "*"
                },
                new Client
                { Id = "consoleApp",
                    Secret=Helper.GetHash("NSs3cr3tConsole"),
                    Name="Nerdsoft Native Application",
                    ApplicationType =Models.ApplicationTypes.NativeConfidential,
                    Active = true,
                    RefreshTokenLifeTime = 14400,
                    AllowedOrigin = "*"
                }
            };

            return ClientsList;
        }
    }
}
