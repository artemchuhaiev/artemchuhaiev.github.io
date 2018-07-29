'use strict';

$('body').on('click', '.burger-btn', function (e) {
	if ($(e.target).hasClass('active')) {
		$(e.target).removeClass('active');
		$('.menu-wrapp').removeClass('adaptive');
		$('body').removeClass('modal-open');
		return;
	}

	$('.menu-wrapp').addClass('adaptive');
	$('.burger-btn').addClass('active');
	$('body').addClass('modal-open');
});

function collapse(parent) {

	var link = $(parent).find('.collapse-link-wrapp a');
	var content = $(parent).find('.collapse-content');
	var num = $(link).first().attr('data-num');
	$(content).css('display', 'none');
	$(content).first().css('display', 'block');

	$(link).on('click', function (e) {
		e.preventDefault();
		num = $(e.target).attr('data-num');
		var item = content[num];
		$(content).css('display', 'none');
		$(item).css('display', 'block');
		var top = $(item).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
};

collapse('.collapse');