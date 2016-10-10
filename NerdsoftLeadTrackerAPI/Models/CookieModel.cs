using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;

namespace NerdsoftLeadTrackerAPI.Models
{
    public class CookieModel
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public bool Secure { get; set; }
        public bool Shareable { get; set; }
        public bool HttpOnly { get; set; }
        public string Domain { get; set; }
        public DateTime Expires { get; set; }
        public string Value { get; set; }
        public bool HasKeys { get; set; }
        public NameValueCollection Values { get; set; }
    }
}