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