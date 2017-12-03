$(function() {
    // not jump
	$('a.cancel').click(function() {
		return false;
	});
	$('a.homeMenu').click(function() {
		$('.home-frame').css('display', 'none');
		$('.home-main').css('display', 'block');
	});
	$('a.noticeMenu').click(function() {
		$('.home-main').css('display', 'none');
		$('.home-frame').css('display', 'block');
	});
	$('a.favoriteMenu').click(function() {
		$('.home-main').css('display', 'none');
		$('.home-frame').css('display', 'block');
	});
	$('a.taskMenu').click(function() {
		$('.home-main').css('display', 'none');
		$('.home-frame').css('display', 'block');
	});
});
