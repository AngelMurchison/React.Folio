using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.Folio01.Models
{
    public class BlogPost
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public string ImgUrl { get; set; }
        public string SourceUrl { get; set; }
        public DateTime PostDate { get; set; }
    }
}
