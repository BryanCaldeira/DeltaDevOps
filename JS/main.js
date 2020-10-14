function check() {
    var canSee = $("#myNavbar").is(":hidden");
    if (canSee) {
        $("#ul_div").css("height", "100%")
        $(document.body).css("overflow", "hidden")

    } else {
        $("#ul_div").animate({
            height: "0%"
        }, 500);

        $(document.body).css("overflow", "scroll")
    }
};