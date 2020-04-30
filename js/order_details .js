// 倒计时
var ring = new Date().setHours(new Date().getHours() + 24);

function timelost() {
	var now = new Date();
	//date对象之差
	var time = ring - now;
	var oTime = document.querySelector(".time");
	//毫秒
	var sec = parseInt(time / 1000 % 60);
	var min = parseInt(time / (1000 * 60) % 60);
	var hour = parseInt(time / (1000 * 60 * 60) % 24);

	var str = hour + "时" + min + "分" + sec + "秒";

	oTime.innerHTML = str;
}
timelost();
var timer;
timer = setInterval(function() {
	timelost();
}, 1)

function nowtime() {
	var oTime = document.querySelector(".now_time");
	var oNow = document.querySelector('.now .now_time');
	var now = new Date()
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var str = year + '-' + fix(month) + '-' + fix(day) + ' ' + fix(hour) + ':' + fix(min);

	function fix(x) {
		if (x < 10) {
			return '0' + x;
		} else {
			return x;
		}
	}
	oTime.innerHTML = str;
	oNow.innerHTML = str;
}
nowtime();

$('.three_btn').click(function () {
	$(location).attr('href','order_details.html')
})
$('.button').click(function () {
	$(location).attr('href','order_details.html')
})