using Microsoft.AspNetCore.Mvc;

namespace ThingsDoneImmediately.Controllers
{
    public class TestimonialsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}