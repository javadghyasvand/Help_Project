using Microsoft.AspNetCore.Mvc;

namespace Help.ViewComponents
{
    public class Contant_WhatsNew_DA : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
          
            return View("Contant_WhatsNew_DA");
        }
    }
}
