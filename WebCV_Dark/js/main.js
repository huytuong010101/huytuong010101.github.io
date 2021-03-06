//code for slide text in header
var i = 0;
setInterval(function () {
    if (i == 1) {
        document.getElementById("sp3").className = "hide";
        document.getElementById("sp1").className = "hide";
        document.getElementById("sp2").className = "show";
        i = 2;
    } else if (i == 2) {
        document.getElementById("sp3").className = "hide";
        document.getElementById("sp2").className = "hide";
        document.getElementById("sp1").className = "show";
        i = 0;
    } else {
        document.getElementById("sp1").className = "hide";
        document.getElementById("sp2").className = "hide";
        document.getElementById("sp3").className = "show";
        i = 1;
    }

}, 2000);
//Code to auto scroll to section when coming
$.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'swing',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'activeMenu', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: -80           // offste (in px) for fixed top navigation
});
$(function(){
    $.scrollIt();
});
//code to init processing
$('#level').waypoint(function () {
    $(".percent1").css("width", "80%");
    $(".percent2").css("width", "70%");
    $(".percent3").css("width", "90%");
}, { offset: 700 });

//code for menu
isClose = true;
$(".iconMenu").click(() => {
    if (isClose) {
        $(".listMenu").removeClass("d-none")
        $(".listMenu").addClass("menuShow")
        $(".listMenu li").addClass("liWhenShow")
        $(".listMenu").removeClass("hideMenu")
        $(".listMenu").addClass("animeShowMenu")
        isClose = false
    } else {
        $(".listMenu").removeClass("animeShowMenu")
        $(".listMenu").addClass("hideMenu")
        setTimeout(() => {
            $(".listMenu").addClass("d-none")
            $(".listMenu li").removeClass("liWhenShow")
            $(".listMenu").removeClass("menuShow")
        }, 1000)


        isClose = true
    }

})
$(".listMenu").click(() => {
    $(".listMenu").removeClass("animeShowMenu")
    $(".listMenu").addClass("hideMenu")
    $(".listMenu").addClass("d-none")
    $(".listMenu li").removeClass("liWhenShow")
    $(".listMenu").removeClass("menuShow")
    isClose = true
})
//code for nav
document.getElementsByTagName("body")[0].onscroll = function () { EBodyScroll() }
document.getElementsByTagName("body")[0].ontouchmove = function () { EBodyScroll() }
$( document ).ready(function() {
    EBodyScroll();
    setTimeout(() => {
        $(".loading").css("display","none");
    },1000)
    
});
function EBodyScroll() {
    const heightScroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
    if (heightScroll > 90) {
        $(".fixedMenu").css("background-color", "#222");
        $(".fixedMenu").css("transform", "translateY(0px)");
        $(".fixedMenu").css("position", "fixed");
        $(".fixedMenu").addClass("navDown");
        $(".fixedMenu").removeClass("navUp");
    } else {
        $(".fixedMenu").removeClass("navDown");
        $(".fixedMenu").addClass("navUp");
        $(".fixedMenu").css("background-color", "transparent");
    }
}
//code for icon
$(".btnHome1").mouseover(() => {
    $(".btnHome1 .fillBtn2").addClass("fillBtnAnime")
    $(".btnHome1 .fillBtn").addClass("fillBtnAnime2")
    $(".btnHome1 .fillBtn2").removeClass("emptyBtnAnime")
    $(".btnHome1 .fillBtn").removeClass("emptyBtnAnime")
})
$(".btnHome1").mouseleave(() => {
    $(".btnHome1 .fillBtn2").removeClass("fillBtnAnime")
    $(".btnHome1 .fillBtn").removeClass("fillBtnAnime2")
    $(".btnHome1 .fillBtn2").addClass("emptyBtnAnime")
    $(".btnHome1 .fillBtn").addClass("emptyBtnAnime")
})
$(".btnHome2").mouseover(() => {
    $(".btnHome2 .fillBtn2").addClass("fillBtnAnime")
    $(".btnHome2 .fillBtn").addClass("fillBtnAnime2")
    $(".btnHome2 .fillBtn2").removeClass("emptyBtnAnime")
    $(".btnHome2 .fillBtn").removeClass("emptyBtnAnime")
})
$(".btnHome2").mouseleave(() => {
    $(".btnHome2 .fillBtn2").removeClass("fillBtnAnime")
    $(".btnHome2 .fillBtn").removeClass("fillBtnAnime2")
    $(".btnHome2 .fillBtn2").addClass("emptyBtnAnime")
    $(".btnHome2 .fillBtn").addClass("emptyBtnAnime")
})

$(".btnSubmitWrap").mouseover(() => {
    $(".btnSubmitWrap .fillSubmit2").addClass("fillBtnAnime")
    $(".btnSubmitWrap .fillSubmit").addClass("fillBtnAnime2")
    $(".btnSubmitWrap .fillSubmit2").removeClass("emptyBtnAnime")
    $(".btnSubmitWrap .fillSubmit").removeClass("emptyBtnAnime")
})
$(".btnSubmitWrap").mouseleave(() => {
    $(".btnSubmitWrap .fillSubmit2").removeClass("fillBtnAnime")
    $(".btnSubmitWrap .fillSubmit").removeClass("fillBtnAnime2")
    $(".btnSubmitWrap .fillSubmit2").addClass("emptyBtnAnime")
    $(".btnSubmitWrap .fillSubmit").addClass("emptyBtnAnime")
})

$(".webDesin").mouseover(() => {
    $(".webDesin .iconService").addClass("outsideIcon")
    $(".webDesin .iconService i").addClass("insideIcon")
    $(".webDesin .iconService").removeClass("outsideIcon2")
    $(".webDesin .iconService i").removeClass("insideIcon2")
})
$(".webDesin").mouseleave(() => {
    $(".webDesin .iconService").addClass("outsideIcon2")
    $(".webDesin .iconService i").addClass("insideIcon2")
    $(".webDesin .iconService").removeClass("outsideIcon")
    $(".webDesin .iconService i").removeClass("insideIcon")
})

$(".Development").mouseover(() => {
    $(".Development .iconService").addClass("outsideIcon")
    $(".Development .iconService i").addClass("insideIcon")
    $(".Development .iconService").removeClass("outsideIcon2")
    $(".Development .iconService i").removeClass("insideIcon2")
})
$(".Development").mouseleave(() => {
    $(".Development .iconService").addClass("outsideIcon2")
    $(".Development .iconService i").addClass("insideIcon2")
    $(".Development .iconService").removeClass("outsideIcon")
    $(".Development .iconService i").removeClass("insideIcon")
})

$(".Branding").mouseover(() => {
    $(".Branding .iconService").addClass("outsideIcon")
    $(".Branding .iconService i").addClass("insideIcon")
    $(".Branding .iconService").removeClass("outsideIcon2")
    $(".Branding .iconService i").removeClass("insideIcon2")
})
$(".Branding").mouseleave(() => {
    $(".Branding .iconService").addClass("outsideIcon2")
    $(".Branding .iconService i").addClass("insideIcon2")
    $(".Branding .iconService").removeClass("outsideIcon")
    $(".Branding .iconService i").removeClass("insideIcon")
})

$(".Maketing").mouseover(() => {
    $(".Maketing .iconService").addClass("outsideIcon")
    $(".Maketing .iconService i").addClass("insideIcon")
    $(".Maketing .iconService").removeClass("outsideIcon2")
    $(".Maketing .iconService i").removeClass("insideIcon2")
})
$(".Maketing").mouseleave(() => {
    $(".Maketing .iconService").addClass("outsideIcon2")
    $(".Maketing .iconService i").addClass("insideIcon2")
    $(".Maketing .iconService").removeClass("outsideIcon")
    $(".Maketing .iconService i").removeClass("insideIcon")
})
//code for icon on footer
$(".social-icon").mouseover((e) => {
    e.currentTarget.firstElementChild.classList.add("insideIcon")
    e.currentTarget.firstElementChild.classList.remove("insideIcon2")
    e.currentTarget.classList.add("outsideIcon")
    e.currentTarget.classList.remove("outsideIcon2")
})
$(".social-icon").mouseleave((e) => {
    e.currentTarget.firstElementChild.classList.add("insideIcon2")
    e.currentTarget.firstElementChild.classList.remove("insideIcon")
    e.currentTarget.classList.add("outsideIcon2")
    e.currentTarget.classList.remove("outsideIcon")
})
// Code for layout picture
var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    initLayout: true,
    percentPosition: true,
});
$grid.packery();
filterAll();
// code for filter picture
function filterAll() {
    toggleActive();
    $(".selectAll").addClass("active");
    $grid.isotope({ filter: '*' });
    $grid.packery();
    setTimeout(() => {
        $grid.packery('shiftLayout')
    }, 500)
}
function filterBrand() {
    toggleActive();
    $(".selectBrand").addClass("active");
    $grid.isotope({ filter: '.brand' });
}
function filterDesign() {
    toggleActive();
    $(".selectDesign").addClass("active");
    $grid.isotope({ filter: '.design' });
}
function filterGraphic() {
    toggleActive();
    $(".selectGraphic").addClass("active");
    $grid.isotope({ filter: '.graphic' });
}
function toggleActive() {
    $(".selectAll").removeClass("active");
    $(".selectBrand").removeClass("active");
    $(".selectDesign").removeClass("active");
    $(".selectGraphic").removeClass("active");
}