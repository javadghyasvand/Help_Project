using Microsoft.AspNetCore.Mvc;

namespace Help.ViewComponents
{
    public class Contant_Tester:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
          
            return View("Contant_Tester");
        }
    }
}
