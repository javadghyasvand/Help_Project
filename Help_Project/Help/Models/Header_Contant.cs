using System;

namespace Help.Models
{
    public class Header_Contant
    {
        public string btn_Close  { get; set; }
        public string Btn_Print { get; set; }
        public string Btn_Download { get; set; }
        public string Select_lang { get; set; }
        public string select_Categoury { get; set; }
        public string select_Sort { get; set; }

        public Header_Contant(string btnClose, string btnPrint, string btnDownload, string selectLang, string selectCategoury, string selectSort)
        {
            btn_Close = btnClose;
            Btn_Print = btnPrint;
            Btn_Download = btnDownload;
            Select_lang = selectLang;
            select_Categoury = selectCategoury;
            select_Sort = selectSort;
        }
    }
}
