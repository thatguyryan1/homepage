$(".panic-btn").hide();
$(".hidden").hide();
$(".draggable").hide();
$(".finalwords").hide();

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
        $(".finalwords").show().toggleClass("reveal");
    }
);

function mouse_position(object) {

    var posX = clientX;
    var posY = clientY;

    if (posX > mouse_position) {
        posX = object.posX - 10;
    }
    else {
        posX = object.posX + 10;
    }

    if (posY > mouse_position) {
        posY = object.posY - 10;
    }
    else {
        posY = object.posY + 10;
    }

    return (posX, PosY);


    var t = setTimeout(mouse_position,100);
}


