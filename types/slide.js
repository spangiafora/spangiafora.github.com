var magazine = {};

// Some constants to prevent typos if I use these terms more than once
var visibility = "visibility";
var visible = "visible";
var hidden = "hidden";
var first = "#first";

// Slight overkill here.  The first line ensures that the div
// is visible.  It doesn't need to be called every time.  
// It doesn't hurt, but it is extra work.
// 
// Fade the old slide out. Fade the new slide in.
var showcurrent = function(i) {
    $(magazine.slides[i]).fadeOut("fast");
    $(magazine.slides[magazine.slideno]).css(visibility, visible);
    $(magazine.slides[magazine.slideno]).fadeIn();
};

var bindbuttons = function() {
    // NEXT button - show next slide
    $("#next").click(function() {
        var curidx = magazine.slideno;
        if (curidx === magazine.lastslide) {
            magazine.slideno = 0;
        }            
        else {
            magazine.slideno += 1;
        }
        showcurrent(curidx);
    });

    // PREVIOUS button - show previous slide
    $("#prev").click(function() {
        var curidx = magazine.slideno;
        if (curidx === 0) {
             magazine.slideno = magazine.lastslide;
        }
        else {
            magazine.slideno -= 1;
        }
        showcurrent(curidx);
    });

    // Illustration of what happens when you add a script to a page
    $("#loadscript").click(function() {
        var s = $("<script>");
        s.append("alert('Thank you')");
        $("body").append(s);
    });
};

$(function() {
    magazine = $("#magazine");
    magazine.slides = $(".slide");
    magazine.slideno = 0;
    magazine.lastslide = magazine.slides.length-1;
    magazine.slides.each(function(i, el) { 

        $(magazine.slides[i]).css(visibility, hidden);
        var id = $(el).attr("id");
        if (id != "first") {
            $(el).fadeOut();
        }
     });

    // Display the first slide
    $(first).css(visibility, visible);

    // attach the navigation functions to the prev/next buttons
    bindbuttons();
});

