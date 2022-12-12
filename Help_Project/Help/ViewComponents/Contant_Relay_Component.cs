using Microsoft.AspNetCore.Mvc;

namespace Help.ViewComponents
{
    public class Contant_Relay:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
          
            return View("Contant_Relay");
        }
    }
}
