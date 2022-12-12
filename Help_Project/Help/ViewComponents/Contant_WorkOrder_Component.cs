using Microsoft.AspNetCore.Mvc;

namespace Help.ViewComponents
{
    public class Contant_WorkOrder_Component : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
          
            return View("Contant_WorkOrder");
        }
    }
}
