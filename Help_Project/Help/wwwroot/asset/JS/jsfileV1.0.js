//Menu List Open Cloase  
$('#tabfigure .sub-menu > a').click(function () {
    var last = $('.sub-menu.open', $('#sidebar'));
    last.removeClass("open");
    $('.arrow', last).removeClass("open");
    $('.sub', last).slideUp(200);
    var sub = $(this).next();
    if (sub.is(":visible")) {
        $('.arrow', $(this)).removeClass("open");
        $(this).parent().removeClass("open");
        var chiled_list = $(this).children()
        $(chiled_list[0]).attr("src", "asset/Image/Close_Book.png");
        sub.slideUp(200);
    } else {
        $('.arrow', $(this)).addClass("open");
        $(this).parent().addClass("open");
        var chiled_list = $(this).children()
        $(chiled_list[0]).attr("src", "asset/Image/Open_Book.png");
        sub.slideDown(200);
    }
});
$("#Btn-Col-Sidebar").click(function (e) {
    Sidbar_Steate();
});
// sidbar show/hide
function Sidbar_Steate() {
    var width_screen = window.screen.width
    if (!$(".panel-left").hasClass("none-display") == true) {
        if (width_screen <= "750") {
            $(".panel-left").css("width", "100%");
        }
        $(".panel-left").addClass("none-display");
        $(".splitter").addClass("none-display");
        switch ($("#lang_Help option:selected").val()) {
            case "English":
                $("#txt_sh-hi").text("Show");
                break;
            case "German":
                $("#txt_sh-hi").text("zeigen");
                break;
            case "Spanish":
                $("#txt_sh-hi").text("MOSTRAR");
                break;
            case "French":
                $("#txt_sh-hi").text("montrer");
                break;
            case "Arabic":
                $("#txt_sh-hi").text("عرض");
                break;
            case "Persian":
                $("#txt_sh-hi").text("نمایش");
                break;
        }
    } else {
        if (width_screen <= "750") {

            $(".panel-left").css("width", "100%");
        }
        $(".panel-left").removeClass("none-display");
        $(".splitter").removeClass("none-display");
        switch ($("#lang_Help option:selected").val()) {
            case "English":
                $("#txt_sh-hi").text("Hide");
                break;
            case "German":
                $("#txt_sh-hi").text("Verstecken");
                break;
            case "Spanish":
                $("#txt_sh-hi").text("Esconder");
                break;
            case "French":
                $("#txt_sh-hi").text("cacher");
                break;
            case "Arabic":
                $("#txt_sh-hi").text("أخفى");
                break;
            case "Persian":
                $("#txt_sh-hi").text("مخفی");
                break;
        }
    }
}

$(document).ready(function () {
    $('.newpage').click(function (e) {
        var url = $(this).attr("name");
        var Pages = url.search("WhatsNew_VR");
        var width_screen = window.screen.width
        if (width_screen <= "750") {
            Sidbar_Steate();
        }
        if ($("#searchbox").val() == "" || $("#searchbox").val() == null || $("#searchbox").val() == "") {
            if ($("a.newpage").hasClass("li_select") == true) {
                $("a.newpage").removeClass("li_select");
                $("a.newpage").removeClass("li_select");
            }
        }
        $(this).addClass("li_select");
        if (Pages != "-1") {
            url = $(this).attr("name") + '.htm';
            hrefurl = url.replace(/ /g, "%20");
            var splitlocation = window.location.href.split("?page")[0].replace("#", "")
            var findId = $(this).attr("findId").trim();
            $("#curentpage").remove();
            $('<div id="curentpage" name=' + splitlocation + "?page=" + hrefurl + "#" + findId + ' class="curentpage"></div>').appendTo('body');
            document.getElementById("content").innerHTML = '<iframe id="printarea" src="' + url + '"  style="width: 100%;height: 100%; padding-left:0%;padding-right:0%;margin-left:0%;"></iframe>';
            var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + "?page=" + hrefurl
            window.history.pushState({ path: refresh }, '', refresh);
        } else {
            url = $(this).attr("name") + '.htm';
            hrefurl = url.replace(/ /g, "%20");
            var splitlocation = window.location.href.split("?page")[0].replace("#", "")
            $("#curentpage").remove();
            $('<div id="curentpage" name=' + splitlocation + "?page=" + hrefurl + ' class="curentpage"></div>').appendTo('body');

            document.getElementById("content").innerHTML = '<iframe id="printarea" src="' + url + '" style="width: 100%;height: 100%; padding-left:0%;padding-right:0%;margin-left:0%;"></iframe >';
            var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + "?page=" + hrefurl
            window.history.pushState({ path: refresh }, '', refresh);


        }
    });
});