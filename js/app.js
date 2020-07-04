$(function() {
    let margin = 0;

    // defining the number of images
    let quantity = $(".image").length;

    // hiding right click button if there is only one image in the slider
    if (quantity === 1) {
        $(".right").hide();
    }

    // defining the width of the container holding all images
    $(".images").width(quantity * 100 + '%');

    // defining the width of each image's parent div element
    $(".image").width(100 / quantity + '%');

    // adding click event to the left button
    $(".left").click(function(e) {
        e.preventDefault();
        if (margin > 0) {
            margin--;
            $(".images").animate({
                "margin-left": '-' + margin * 100 + '%'
            });
        } else {
            $(".images").animate({
                "margin-left": '-' + (quantity - 1) * 100 + '%'
            });
            margin = quantity - 1;
        }
    });

    // creating a separate function for right button's click and setInterval() method
    function rightClick() {
        if (margin < quantity - 1) {
            margin++;
            $(".images").animate({
                "margin-left": '-' + margin * 100 + '%'
            });
        } else {
            $(".images").animate({
                "margin-left": "0"
            });
            margin = 0;
        }
    }

    // adding click event to the right button
    $(".right").click(rightClick);

    // adding setInterval() method to slider for playin slider on load of the document
    let slider = setInterval(rightClick, 2500);

    // adding clearInterval() method to slider on left and right buttons' mouseover event
    $(".left, .right").mouseenter(function() {
        clearInterval(slider);
    });
    $(".left, .right").mouseleave(function() {
        slider = setInterval(rightClick, 2500);
    });
});