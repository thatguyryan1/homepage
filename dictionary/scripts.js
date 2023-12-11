project.currentStyle = {
	fillColor: 'black'
};

<img id="myImg" src="images/back-static.png" />
 
$(function() {
    $("#myImg").hover(
        function() {
            $(this).attr("src", "images/back-ani.gif");
        },
        function() {
            $(this).attr("src", "images/back-static.png");
        }                         
    );                  
});