$(".panic-btn").hide();
$(".hidden").hide();
$(".draggable").hide();

$(".reveal-btn").click(
    function() {
        $(".background").toggleClass("reveal");
        $(".glasses").toggleClass("reveal");
        $(".panic-btn").toggleClass("reveal");
        $(".draggable").show(0).toggleClass("reveal").draggable();
        $(".hidden").show(0).toggleClass("reveal");
        $(".reveal-btn").hide();
        $(".panic-btn").delay(5000).show(0);
    }
);

$(".panic-btn").click(
    function() {
        $(".off").toggleClass("disappear");
        $(".background").toggleClass("reveal");
        $(".greyscale").toggleClass("reveal");
        $(".draggable").toggleClass("reveal").draggable();
        $(".hidden").toggleClass("disappear");
        $(".panic-btn").hide();
    }
);


