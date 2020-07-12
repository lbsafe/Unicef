
$(document).ready(function(){
    $("section.about").addClass("active");
    slider();
    $.scrollify({
        section: ".area",
        sectionName: "section-name",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: false,
        setHeights: true,
        overflowScroll: true,
        before: function (i, section) {
            $("section").removeClass("active");
            section[i].addClass("active");
            var ref = section[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        after: function () { },
        afterResize: function () { },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".area").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(
                        this).attr("data-section-name") +
                    "\"></a></li>";
            });

            pagination += "</ul>";

            $(".about").append(pagination);
            $(".pagination a").on("click", $.scrollify.move);
        }
    });
    $.scrollify.update();
    $("nav ul li a").on("click", $.scrollify.move);
    flower();
    footer();
});
function slider(){
    $('.Slider').bxSlider({
        mode: 'horizontal',
        speed: 300,
        easing : 'ease-in-out', 
        startSlide : 1,
        randomStart : false,
        preloadImages : 'visible',
        mouseDrag : false, 
        infiniteLoop : true,
        hideControlOnEnd : false,
        responsive : true,
        touchEnabled : true,
        swipeThreshold : 50, 
        oneToOneTouch : true, 
        preventDefaultSwipeX: true, 
        preventDefaultSwipeY: false,
        controls: true,
        pager : true,
        auto : false,
        autoControls : false,
        autoDirection : 'next',
        autoHover : true,
        autoDelay : 3000, 
        pause : 4000,
        keyboardEnabled : true,
        stopAutoOnClick : true,
        autoControlsCombine : true,
        ariaHidden : true,
    });
}
function flower(){
    $("div.grow").css('background-image',"url(images/flower01.png)");
    $(document).scroll(function(){
            if($(".pagination li:first-of-type a").hasClass("active")){
                $("div.grow").css('background-image',"url(images/flower01.png)");
            }else if($(".pagination li:nth-of-type(2) a").hasClass("active")){
                $("div.grow").css('background-image',"url(images/flower02.png)");
            }else if($(".pagination li:nth-of-type(3) a").hasClass("active")){
                $("div.grow").css('background-image',"url(images/flower03.png)");
            }else if($(".pagination li:nth-of-type(4) a").hasClass("active")){
                $("div.grow").css('background-image',"url(images/flower04.png)");
            }else if($(".pagination li:last-of-type a").hasClass("active")){
                $("div.grow").css('background-image',"url(images/flower05.png)");
            }
    });
};
function footer(){
    $("footer").css('background-color',"rgba(51, 117, 177, 0.45)");
    $(document).scroll(function(){
            if($(".pagination li:first-of-type a").hasClass("active")){
                $("footer").css('background-color',"rgba(51, 117, 177, 0.45)");
            }else if($(".pagination li:nth-of-type(2) a").hasClass("active")){
                $("footer").css('background-color',"rgba(51, 117, 177, 0.45)");
            }else if($(".pagination li:nth-of-type(3) a").hasClass("active")){
                $("footer").css('background-color',"rgba(51, 117, 177, 0.45)");
            }else if($(".pagination li:nth-of-type(4) a").hasClass("active")){
                $("footer").css('background-color',"rgba(0, 0, 0, 0.5)");
            }else if($(".pagination li:last-of-type a").hasClass("active")){
                $("footer").css('background-color',"rgba(51, 117, 177, 0.45)");
            }
    });
};