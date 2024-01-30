var theToggle = document.getElementById('toggle');



function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}
$("body").css("paddingTop", $(".navbar").innerHeight());

$(function () {
  $(".navbar li a").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  // Add Active Class on Navbar Link and Remove from the Siblings(if any exist!)

  $(" li a").click(function () {
    

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Sync Navbar Links With Sections

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        var blockId = $(this).attr("id");
        $(" a").removeClass("active");
        $('li a[data-scroll="' + blockId + '"]').addClass("active");
      }
    });
  });
});



