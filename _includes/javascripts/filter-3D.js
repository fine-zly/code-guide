// JavaScript Document
//获取ie的版本号
var ie = (function(){
	var undef,
		v = 3,
		div = document.createElement('div'),
		all = div.getElementsByTagName('i');
	while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		all[0]
	);
	return v > 4 ? v : undef;
}());

$(function() {
	var $sections = $('.chat-jiabin-list');
	if (ie === 8) {
		$sections.css({
			'filter': 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.707, M12=-0.707, M21=0.707, M22=0.707)',
			'margin-left': '-102px',
			'margin-top': '-102px'
		});
		$(".mh-introduce").css({
			'top': '102px'
		});
	} else {
		$sections.css({
			'-webkit-transform': 'rotate(45deg)',
			'-ms-transform': 'rotate(45deg)',
			'-moz-transform': 'rotate(45deg)',
			'-o-transform': 'rotate(45deg)',
			'transform': 'rotate(45deg)'
		});
	}
});
