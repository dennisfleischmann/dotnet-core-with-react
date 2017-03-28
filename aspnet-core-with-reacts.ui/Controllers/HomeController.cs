using Microsoft.AspNetCore.Mvc;

namespace aspnetcorewithreacts.ui.Controllers
{
    public class HomeController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
