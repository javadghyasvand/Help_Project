 //Menu List Open Cloase  
$('#tabfigure .sub-menu > a').click(function() {
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
 //content list show hide
$('#Tab_selection').change(function() {
    switch ($(this).val()) {
        case "Tester":
            dispalyContanet("Tester");
            break;
        case "Relay":
            dispalyContanet("Relay");
            break;
        case "WorkOrder":
            dispalyContanet("WorkOrder");
            break;
        case "WhatsNew":
            $("#wathsnew_dropdown").removeAttr("disabled");
            switch ($("#wathsnew_dropdown").val()) {
                case "Title":
                    dispalyContanet("WhatsNew_DA");
                    break;
                case "Version":
                    dispalyContanet("WhatsNew_VR");
                    break;
                case "BugOptions":
                    dispalyContanet("WhatsNew_BO");
                    break;
            }
            break;
    }
});
 //whats new sort
$("#wathsnew_dropdown").change(function(e) {
    $("#contant-Tester").addClass("none-display");
    $("#contant-Relay").addClass("none-display");
    $("#contant-workorder").addClass("none-display");
    $("#contant-WhatsNew_DA").addClass("none-display");
    $("#contant-WhatsNew_VR").addClass("none-display");
    $("#contant-WhatsNew_BO").addClass("none-display");
    switch ($("#wathsnew_dropdown").val()) {
        case "Title":
            $("#contant-WhatsNew_DA").removeClass("none-display");
            break;
        case "Version":
            $("#contant-WhatsNew_VR").removeClass("none-display");
            break;
        case "BugOptions":
            $("#contant-WhatsNew_BO").removeClass("none-display");
            break;
    }
});
 //colapse sidbar
$("#Btn-Col-Sidebar").click(function(e) {
    Sidbar_Steate();
});
 //Download Manual
function downloadFile_AMT_Manual() {
    var src = document.getElementById("download-tester").getAttribute("src");
    var link = document.createElement('a');
    var querytest = link.baseURI;
    if (querytest.search("vebko.org") > "-1") {
        link.href = "";
        link.href = src;
        document.body.appendChild(link);
        link.download = '';
        link.click();
    } else if (querytest.search("http://192.168.0.2/") > "-1") {
        link.href = "";
        link.href = src;
        document.body.appendChild(link);
        link.download = '';
        link.click();
    } else {
        var hreftest = link.href
        var indexresult = hreftest.indexOf(".html");
        console.log(indexresult)
        link.href = "https://vebko.org/" + src
        document.body.appendChild(link);
        link.target = 'blanck';
        link.download = '';
        link.click();
    }
}

function downloadFile_Relay_Manual() {
    var src = document.getElementById("download-relay").getAttribute("src");
    var link = document.createElement('a');
    var querytest = link.baseURI;
    if (querytest.search("vebko.org") > "-1") {
        link.href = "";
        link.href = src;
        document.body.appendChild(link);
        link.download = '';
        link.click();
    } else if (querytest.search("http://192.168.0.2/") > "-1") {
        link.href = "";
        link.href = src;
        document.body.appendChild(link);
        link.download = '';
        link.click();
    } else {
        var hreftest = link.href
        var indexresult = hreftest.indexOf(".html");
        console.log(indexresult)
        link.href = "https://vebko.org/" + src
        document.body.appendChild(link);
        link.target = 'blanck';
        link.download = '';
        link.click();
    }
}

function downloadFile_Work_Order() {
    var src = document.getElementById("download-workorder").getAttribute("src");
    var link = document.createElement('a');
    var querytest = link.baseURI;
    if (querytest.search("vebko.org") > "-1") {
        link.href = "";
        link.href = src;
        document.body.appendChild(link);
        link.download = '';
        link.click();
    } else if (querytest.search("http://192.168.0.2/") > "-1") {
        link.href = "";
        link.href = src;
        document.body.appendChild(link);
        link.download = '';
        link.click();
    } else {
        var hreftest = link.href
        var indexresult = hreftest.indexOf(".html");
        console.log(indexresult)
        link.href = "https://vebko.org/" + src
        document.body.appendChild(link);
        link.target = 'blanck';
        link.download = '';
        link.click();
    }
}
 //select languge
$("#lang_Help").change(function(e) {
    let FullLocation = $("#curentpage").attr("name");
    if (FullLocation.search("page") <= 0) {
        switch ($("#lang_Help").val()) {
            case "English":
                window.location.href = "index.html";
                break;
            case "Persian":
                window.location.href = "index_fa.html";
                break;
            case "German":
                window.location.href = "index_ge.html";
                break;
            case "Spanish":
                window.location.href = "index_sp.html";
                break;
            case "French":
                window.location.href = "index_fr.html";
                break;
            case "Arabic":
                window.location.href = "index_ar.html";
                break;
        }
    } else {
        switch ($("#lang_Help").val()) {
            case "English":
                var cheang_to = "EN"
                var FullLocation_arry = FullLocation.split("page=");
                var lng_select = FullLocation_arry[1].split("\\");
                var Dirctory_edit_Name = select_lng_replace(FullLocation, lng_select[2], cheang_to);
                window.location.href = Dirctory_edit_Name;
                break;
            case "Persian":
                var cheang_to = "FA"
                var FullLocation_arry = FullLocation.split("page=");
                var lng_select = FullLocation_arry[1].split("\\");
                var Dirctory_edit_Name = select_lng_replace(FullLocation, lng_select[2], cheang_to);
                window.location.href = Dirctory_edit_Name;
                break;
            case "German":
                var cheang_to = "GE"
                var FullLocation_arry = FullLocation.split("page=");
                var lng_select = FullLocation_arry[1].split("\\");
                var Dirctory_edit_Name = select_lng_replace(FullLocation, lng_select[2], cheang_to);
                window.location.href = Dirctory_edit_Name;
                break;
            case "Spanish":
                var cheang_to = "ES"
                var FullLocation_arry = FullLocation.split("page=");
                var lng_select = FullLocation_arry[1].split("\\");
                var Dirctory_edit_Name = select_lng_replace(FullLocation, lng_select[2], cheang_to);
                window.location.href = Dirctory_edit_Name;
                break;
            case "French":
                var cheang_to = "FR"
                var FullLocation_arry = FullLocation.split("page=");
                var lng_select = FullLocation_arry[1].split("\\");
                var Dirctory_edit_Name = select_lng_replace(FullLocation, lng_select[2], cheang_to);
                window.location.href = Dirctory_edit_Name;
                break;
            case "Arabic":
                var cheang_to = "AR"
                var FullLocation_arry = FullLocation.split("page=");
                var lng_select = FullLocation_arry[1].split("\\");
                var Dirctory_edit_Name = select_lng_replace(FullLocation, lng_select[2], cheang_to);
                window.location.href = Dirctory_edit_Name;
                break;
        }
    }
});
 //Search
function SearchFunction() {
    var searchString = $("#searchbox").val();
    if ($("#searchbox").val() == "" || searchString == null || searchString == "") {
        $('li.sub-menu').removeClass("open");
        $('ul.sub').css("display", "none");
        $('img[src="asset/Image/Open_Book.png"]').attr("src", "asset/Image/Close_Book.png");
        $('li.sub-menu>a').css("display", "block");
        $("li > a.newpage").each(function(index, value) {
            currentName = $(value).text()
            currentName.trim()
            $("a.newpage").removeClass("li_select");
            if (currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
                $(value).show();
            } else {
                $(value).hide();
            }
        });
        $("li.sub-menu").each(function(index, value) {
            currentName = $(value).text()
            currentName.trim();
            if (currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
                $(value).show();
            } else {
                $(value).hide();
            }
        });
    } else {
        if (searchString.length > 2) {

            switch ($("#Tab_selection").val()) {
                case "Tester":
                    search_value("Search_Tester", searchString);
                    test(searchString);
                    break;
                case "Relay":
                    search_value("Search_Relay", searchString);
                    break;
                case "WorkOrder":
                    search_value("Search_WorkOrder", searchString);
                    break;
                case "WhatsNew":
                    switch ($("#wathsnew_dropdown").val()) {
                        case "Title":
                            search_value("Search_WhatsNew_DA", searchString);
                            break;
                        case "Version":
                            search_value("Search_WhatsNew_VR", searchString);
                            break;
                        case "BugOptions":
                            search_value("Search_WhatsNew_BO", searchString);
                            break;
                    }
                    break;
            }
        }
    }
}
 //sidbar show/hide
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
 //query string replace 
function select_lng_replace(FullLocation, lng_select, cheang_to) {
    switch (cheang_to) {
        case "EN":
            var dir_arry = FullLocation.split("page=");
            dir_arry[0] = dir_arry[0].replace("_" + lng_select.toLowerCase(), "");
            dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
            Dirctory_edit_Name = dir_arry[0] + "page=" + dir_arry[1];
            return Dirctory_edit_Name
        case "FA":
            var dir_arry = FullLocation.split("page=");
            if (lng_select.toLowerCase() == "en") {
                var Dir_en_arry = dir_arry[0].split("index");
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = Dir_en_arry[0] + "index_" + cheang_to.toLowerCase() + Dir_en_arry[1] + "page=" + dir_arry[1];
            } else {
                dir_arry[0] = dir_arry[0].replace(lng_select.toLowerCase(), cheang_to.toLowerCase());
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = dir_arry[0] + "page=" + dir_arry[1];
            }
            return Dirctory_edit_Name
        case "GE":
            var dir_arry = FullLocation.split("page=");
            if (lng_select.toLowerCase() == "en") {
                var Dir_en_arry = dir_arry[0].split("index");
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = Dir_en_arry[0] + "index_" + cheang_to.toLowerCase() + Dir_en_arry[1] + "page=" + dir_arry[1];
            } else {
                dir_arry[0] = dir_arry[0].replace(lng_select.toLowerCase(), cheang_to.toLowerCase());
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = dir_arry[0] + "page=" + dir_arry[1];
            }
            return Dirctory_edit_Name
        case "ES":
            var dir_arry = FullLocation.split("page=");
            if (lng_select.toLowerCase() == "en") {
                var Dir_en_arry = dir_arry[0].split("index");
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = Dir_en_arry[0] + "index_" + cheang_to.toLowerCase() + Dir_en_arry[1] + "page=" + dir_arry[1];
            } else {
                dir_arry[0] = dir_arry[0].replace(lng_select.toLowerCase(), cheang_to.toLowerCase());
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = dir_arry[0] + "page=" + dir_arry[1];
            }
            return Dirctory_edit_Name
        case "FR":
            var dir_arry = FullLocation.split("page=");
            if (lng_select.toLowerCase() == "en") {
                var Dir_en_arry = dir_arry[0].split("index");
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = Dir_en_arry[0] + "index_" + cheang_to.toLowerCase() + Dir_en_arry[1] + "page=" + dir_arry[1];
            } else {
                dir_arry[0] = dir_arry[0].replace(lng_select.toLowerCase(), cheang_to.toLowerCase());
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = dir_arry[0] + "page=" + dir_arry[1];
            }
            return Dirctory_edit_Name
        case "AR":
            var dir_arry = FullLocation.split("page=");
            if (lng_select.toLowerCase() == "en") {
                var Dir_en_arry = dir_arry[0].split("index");
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = Dir_en_arry[0] + "index_" + cheang_to.toLowerCase() + Dir_en_arry[1] + "page=" + dir_arry[1];
            } else {
                dir_arry[0] = dir_arry[0].replace(lng_select.toLowerCase(), cheang_to.toLowerCase());
                dir_arry[1] = dir_arry[1].replace(lng_select.toUpperCase(), cheang_to);
                Dirctory_edit_Name = dir_arry[0] + "page=" + dir_arry[1];
            }
            return Dirctory_edit_Name
    }
}
 //GetQueryString
function GetQueryString(str) {
    var rs = new RegExp("(^|)" + str + "=([^\&]*)(\&|$)", "gi").exec(str),
        tmp;
    if (tmp = rs) return tmp[2];
    return null;
}

function dispalyContanet(element) {
    $("#wathsnew_dropdown").attr("disabled", "disabled");
    $("#contant-Relay").addClass("none-display");
    $("#contant-Tester").addClass("none-display");
    $("#contant-WorkOrder").addClass("none-display");
    $("#contant-WhatsNew_DA").addClass("none-display");
    $("#contant-WhatsNew_VR").addClass("none-display");
    $("#contant-WhatsNew_BO").addClass("none-display");
    if ($("#contant-" + element).hasClass("none-display")) {
        $("#contant-" + element).removeClass("none-display");
    }
    if (element.indexOf("WhatsNew") != "-1") {
        var whatsnew_Option = element.split("_")
        $("option[value=" + whatsnew_Option[0] + "]").attr("selected", "selected");

        var attr = $("#wathsnew_dropdown").removeAttr("disabled", "disabled");
        switch ("#contant-" + element) {
            case "#contant-WhatsNew_DA":
                $("option[value=Title]").attr("selected", "selected");
                break;
            case "#contant-WhatsNew_VR":
                $("option[value=Version]").attr("selected", "selected");
                break;
            case "#contant-WhatsNew_BO":
                $("option[value=BugOptions]").attr("selected", "selected");
                break;

        }
    } else {
        $("option[value=" + element + "]").attr("selected", "selected");
        $("#wathsnew_dropdown").attr("disabled", "disabled");
    }
}
function search_value(valu_sender, searchString) {
    if (valu_sender == "Search_WhatsNew_VR") {
        $("ul.sub").css("display", "none");
        $('img[src="asset/Image/Open_Book.png"]').attr("src", "asset/Image/Close_Book.png");
        $("a.li_select").removeClass("li_select");
        $("#" + valu_sender + ">contant>Search").each(function(index, value) {
            currentName = $(value).text()
            if (currentName.toUpperCase().search(searchString.toUpperCase()) != "-1") {
                var id = $(value).attr("id");
                var Parent = document.getElementById(id).parentNode;
                $(Parent).css("display", "block");
                Li_Sub_menu = Parent.parentNode;
                list_Cild_Sub = Li_Sub_menu.childNodes;
                img_tag = list_Cild_Sub[0].childNodes;
                $(img_tag[0]).attr("src", "asset/Image/Open_Book.png");
                var Ul_Child = Parent.childNodes;
                Ul_Child.forEach((item, index, array) => {
                    if ($(item).attr("id") == id) {
                        var Li_Child = item.childNodes;
                        Li_Child.forEach((items, index, array) => {
                            if ($(items).attr("id") == id) {
                                $(items).addClass("li_select");
                            }
                        });
                    }
                });
            }
        });
    } else {
        $("ul.sub").css("display", "none");
        $('img[src="asset/Image/Open_Book.png"]').attr("src", "asset/Image/Close_Book.png");
        $("a.li_select").removeClass("li_select");
        $("#" + valu_sender + ">contant").each(function(index, value) {
            currentName = $(value).text()
            if (currentName.toUpperCase().search(searchString.toUpperCase()) != "-1") {
                var id = $(value).attr("id");
                $("#" + id + "> a.newpage").addClass("li_select")
                var parent_Ul_Sub = $("li#" + id).parent().get(0);
                var parent_Li_Sub_Menu = $(parent_Ul_Sub).parent();
                $(parent_Ul_Sub).css("display", "block");
                var child_list = $(parent_Li_Sub_Menu).children();
                var imagetag = $(child_list[0]).children();
                $(imagetag[0]).attr("src", "asset/Image/Open_Book.png");
        });
    }

}