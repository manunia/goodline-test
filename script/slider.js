/**
 * Created by Admin on 20.06.2019.
 */

$("#slide").click(function () {

    $(".card").toggleClass('stop');



    console.log("click");
});

$(function () {
    if ($(".front").zIndex == 5) {
        $(".front").toggleClass('side');
    }
    if ($(".side").zIndex == 4) {
        $(".side").toggleClass('front');
    }
})