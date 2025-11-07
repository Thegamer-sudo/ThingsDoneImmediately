using Microsoft.AspNetCore.Mvc;

namespace ThingsDoneImmediately.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}