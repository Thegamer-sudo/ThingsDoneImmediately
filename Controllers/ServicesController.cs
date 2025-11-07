using Microsoft.AspNetCore.Mvc;

namespace ThingsDoneImmediately.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult WebDevelopment()
        {
            return View();
        }

        public IActionResult Automation()
        {
            return View();
        }

        public IActionResult Branding()
        {
            return View();
        }
    }
}