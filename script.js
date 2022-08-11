const vid = document.getElementById("video");

function playVid() {
	vid.play();
	$(".clickContainer").css({opacity: 1.0}).delay(1005).animate({opacity: 0.0, width: "0", height: "0"}, 440);
	$(".duskBackground").css({opacity: 0.0, display: "block"}).delay(860).animate({opacity: 1.0, display: "block"}, 350);
	$(".duskPicture2").css({opacity: 0.0, display: "flex"}).delay(860).animate({opacity: 1.0, display: "flex"}, 350);
	$('.title').css({ opacity: 0.0, visibility: "visible", display: "inline" }).delay(9400).animate({ opacity: 1.0 }, 1000);
	$('.headerContainer').css({ opacity: 0.0, visibility: "visible", display: "flex" }).delay(10400).animate({ opacity: 1.0 }, 1000);
}

function scrollDown() {
	$(window).scrollTop($('#duskBackground1').offset().top);
}