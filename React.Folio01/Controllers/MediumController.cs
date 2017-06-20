using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Xml;
using Newtonsoft.Json;
using React.Folio01.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace React.Folio01.Controllers
{
    [Route("api/medium")]
    public class MediumController : Controller
    {
        // GET: api/medium
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var token = "2edc30d0dbb4cbd4272c9d16968c300c4876ffae0375e0f804dd699a7a40ddee2";
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("https://medium.com/feed/@angelmurchison09");
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var response = await client.GetAsync(client.BaseAddress);
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();
                    XmlDocument XMLResult = new XmlDocument();
                    XMLResult.LoadXml(stringResult);
              
                    
                    return Ok(XMLResult.InnerXml);
                }

                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting blogs from Medium: {httpRequestException.Message}");
                }
            }
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
    }
}
