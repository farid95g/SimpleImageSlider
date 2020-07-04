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
        }
        showHideButtons(margin);
    });

    // adding click event to the right button
    $(".right").click(function(e) {
        e.preventDefault();
        if (margin < quantity - 1) {
            margin++;
            $(".images").animate({
                "margin-left": '-' + margin * 100 + '%'
            });
        }
        showHideButtons(margin);
    });

    // function for showing and hiding the left and right buttons when reaching the first and last elements
    function showHideButtons(margin) {
        switch (margin) {
            case 0:
                $(".left").hide();
                if (quantity === 2)
                    $(".right").show();
                break;
            case quantity - 1:
                $(".right").hide();
                if (quantity === 2)
                    $(".left").show();
                break;
            default:
                $(".left, .right").show();
        }
    }
});