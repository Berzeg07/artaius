if (localStorage.scrollComment) {
    var plansoffset = $(".addreview").offset().top;
    // console.log(plansoffset);
    $("html, body").animate({
        scrollTop: plansoffset
    }, 500);
}