//关闭添加地址框
$("#address-box").click(function() {
	window.parent.layer.closeAll();
});
//打开添加框
/////////////////////////////////////////////////////////////////////////////
$(".address-box").click(function() {
	// $(".address-cover").stop(true).fadeIn();
	layer.open({
		type: 1,
		area: '600px',
		content: $('.address-cover'), //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
	});
});

//取消
$(".remove-btn").click(function() {
	$(".address-cover").stop(true).fadeOut();
});


//保存
// $(".keep-btn").click(function() {
// 	// var error_receiver = $('#error-tip-receiver').css('display');
// 	var error_phone = $('#error-tip-phone').css('display');
// 	// var error_address = $('#error-tip-address').css('display');
// 	var receiver = $('.address-title-receiver').val().length;
// 	var phone = $('.address-title-phone').val().length;
// 	var address = $('.address-title-address').val().length;
// 	// if (receiver > 0 && error_phone == "none" && phone > 0 && address > 0) {
// 		var oDiv = $("<div class='keep-box fl'><div class='tacit'>默认地址</div><div class='keep-name'>" + $(".receiver input")
// 			.val()+"</div><div class='keep-phone'>" + $(".phone-number input").val() + "</div><div class='keep-address'>" + $(".address input").val() +
// 			"</div><div class='keep-tacit-btn clearfix'><div class='delet fr'><i></i>删除</div></div></div>"
// 		)
// 		$(".address-box").before(oDiv);
// 		$(".address-cover").stop(true).fadeOut();
// 	// }
// });
$('.form').Validform({
	tiptype: function(msg, o, cssctl) {
		//o.obj正在验证的元素(表单)
		//错误信息提示对象;
		var $tip = o.obj.next('.error-tip');
		//展示信息
		// cssctl($tip,o.type);
		//修改提示信息
		$tip.text(msg);
		if (o.type == 3) {
			$tip.fadeIn();
		} else {
			$tip.fadeOut();
		}
	},
	beforeSubmit: function(curform) {
		layer.closeAll();
		//插入html;
		var oDiv = $("<div class='keep-box fl'><div class='tacit'>默认地址</div><div class='keep-name'>" + $(".receiver input")
			.val()+"</div><div class='keep-phone'>" + $(".phone-number input").val() + "</div><div class='keep-address'>" + $(".address input").val() +
			"</div><div class='keep-tacit-btn clearfix'><div class='delet fr'><i></i>删除</div></div></div>"
		)
		$(".address-box").before(oDiv);
		// $(".address-cover").stop(true).fadeOut();
		return false;
	}
});

// 删除
$('.address-section').on('click', '.delet', function() {
	$(this).parents('.keep-box').remove()
})
$('.address-section').on('click', '.keep-box', function() {
	$(this).siblings('.keep-box').css('border', '1px solid gray')
	$(this).find('.tacit').css('display', "none");

	$(this).css("border", "1px solid red");
	$(this).find('.tacit').css('display', "block");

})
