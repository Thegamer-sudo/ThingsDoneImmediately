using Microsoft.AspNetCore.Mvc;

namespace ThingsDoneImmediately.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}