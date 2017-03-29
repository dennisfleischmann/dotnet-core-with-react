using Microsoft.AspNetCore.Mvc;

namespace aspnetcorewithreacts.ui.Controllers
{
    public class HomeController: Controller
    {
        public IActionResult Index(bool useServerSideRendering)
        {
            //if (useServerSideRendering)
               // return View("Index_ServerRendered.html");

            return View();
        }
    }
}
