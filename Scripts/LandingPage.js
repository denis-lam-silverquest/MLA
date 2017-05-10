const BOTTOM_OFFSET_HEIGHT = 40;

$(document).ready(function () {
    positionNavBar();

    $(".animated-text-cell").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeInLeft",

        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",

        // The delay between the changing of each phrase in milliseconds.
        speed: 3500,

        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
});

$(window).resize(function () {
    positionNavBar();
});

function positionNavBar() {
    var landingPageNavBar = $("#landing-page-banner");
    var landingPageNavBarHeight = Math.ceil(landingPageNavBar.height());

    var documentHeight = Math.ceil($(document).height());
    $(landingPageNavBar).css({
        display: "block",
        top: (documentHeight - landingPageNavBarHeight - BOTTOM_OFFSET_HEIGHT) + "px"
    });
}