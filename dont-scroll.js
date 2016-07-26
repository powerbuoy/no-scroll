(function (factory) {
	'use strict';

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	}
	else {
		factory(jQuery);
	}
}(function ($) {
	'use strict';

	$.fn.dontScroll = function () {
		return this.click(function (e) {
			e.preventDefault();

			var st = $(document).scrollTop();
			window.location.hash = $(this).attr('href');

			$(document).scrollTop(st);
		});
	};
});
