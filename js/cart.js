$('.add').click(function() {
	var x = parseFloat($(this).siblings('span').text().trim());
	var y = $(this).parents('.ul').find('.goods-price span').text();
	var txt = x + 1;
	var z = txt * y;
	console.log(x)
	console.log(y)
	console.log(txt)
	console.log(z)
	$(this).siblings('span').text(txt)
	$(this).parents('.ul').find('.goods-price-total').text(z)

	var isCheckOne = $('.one').prop('checked');
	var isCheckTwo = $('.two').prop('checked');
	var isCheckThree = $('.three').prop('checked');
	if (isCheckOne) {
		var one = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-price-total').text())
		var first = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var one = parseFloat(0);
		var first = 0
	}
	if (isCheckTwo) {
		var two = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-price-total').text())
		var second = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var two = parseInt(0);
		var second = 0;
	}
	if (isCheckThree) {
		var three = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-price-total').text())
		var third = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var three = parseFloat(0);
		var third = 0;
	}
	var index = first + second + third;
	console.log(index)
	console.log(one)
	console.log(two)
	console.log(three)
	var ott = one + two + three;
	console.log(ott);
	$('.order-total-price p').find('span').text(ott)
	$('.total-choose').find('em').text(index)
})
$('.subtract').click(function() {
	var x = parseFloat($(this).siblings('span').text().trim());
	var y = $(this).parents('.ul').find('.goods-price span').text();
	var txt = x - 1;
	if (txt <= 0) {
		txt = 1
		return;
	}
	var z = txt * y;
	console.log(x)
	console.log(y)
	console.log(txt)
	$(this).siblings('span').text(txt)
	$(this).parents('.ul').find('.goods-price-total').text(z)

	var isCheckOne = $('.one').prop('checked');
	var isCheckTwo = $('.two').prop('checked');
	var isCheckThree = $('.three').prop('checked');
	if (isCheckOne) {
		var one = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-price-total').text())
		var first = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var one = parseFloat(0);
		var first = 0
	}
	if (isCheckTwo) {
		var two = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-price-total').text())
		var second = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var two = parseInt(0);
		var second = 0;
	}
	if (isCheckThree) {
		var three = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-price-total').text())
		var third = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var three = parseFloat(0);
		var third = 0;
	}
	var index = first + second + third;
	console.log(index)
	console.log(one)
	console.log(two)
	console.log(three)
	var ott = one + two + three;
	console.log(ott);
	$('.order-total-price p').find('span').text(ott)
	$('.total-choose').find('em').text(index)
})
$('.child-check').click(function() {
	var isCheckOne = $('.one').prop('checked');
	var isCheckTwo = $('.two').prop('checked');
	var isCheckThree = $('.three').prop('checked');
	if (isCheckOne) {
		var one = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-price-total').text())
		var first = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var one = parseFloat(0);
		var first = 0
	}
	if (isCheckTwo) {
		var two = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-price-total').text())
		var second = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var two = parseInt(0);
		var second = 0;
	}
	if (isCheckThree) {
		var three = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-price-total').text())
		var third = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-1 span').text())
	} else {
		var three = parseFloat(0);
		var third = 0;
	}
	var index = first + second + third;
	console.log(index)
	console.log(one)
	console.log(two)
	console.log(three)
	var ott = one + two + three;
	console.log(ott);
	$('.order-total-price p').find('span').text(ott)
	$('.total-choose').find('em').text(index)
})

$('.cart-list').on('click', '.goods-del', function() {
	$(this).parents('.allway').remove()
	var price = parseFloat($(this).parent().siblings('.goods-price-total').text())
	var num = parseFloat($(this).parent().siblings().find('.goods-1 span').text())
	var allprice = parseFloat($('.order-total-price span').text())
	var allnum = parseFloat($('.total-choose em').text())
	var isCheckOne = $('.one').prop('checked');
	var isCheckTwo = $('.two').prop('checked');
	var isCheckThree = $('.three').prop('checked');
	if (isCheckOne) {
		var lastprice = allprice - price;
		var lastnum = allnum - num;
	} else {
		var lastprice = 0;
		var lastnum = 0;
	}
	if (isCheckTwo) {
		var lastprice = allprice - price;
		var lastnum = allnum - num;
	} else {
		var lastprice = 0;
		var lastnum = 0;
	}
	if (isCheckThree) {
		var lastprice = allprice - price;
		var lastnum = allnum - num;
	} else {
		var lastprice = 0;
		var lastnum = 0;
	}
	$('.order-total-price p').find('span').text(lastprice)
	$('.total-choose').find('em').text(lastnum)
	var html = $('.allway').html();
	console.log(html)
	if (html == undefined) {
		$('.layout .main .content').css('display', 'block')
	}
})
$('.checkAll').click(function() {
	//获取自身的checked状态
	var isCheckAll = $(this).prop('checked');
	if (isCheckAll) {
		var one = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-price-total').text())
		var first = parseFloat($('.one').parent('.checkbox').siblings().find('.goods-1 span').text())
		var two = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-price-total').text())
		var second = parseFloat($('.two').parent('.checkbox').siblings().find('.goods-1 span').text())
		var three = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-price-total').text())
		var third = parseFloat($('.three').parent('.checkbox').siblings().find('.goods-1 span').text())
		var index = first + second + third;
		console.log(index)
		console.log(one)
		console.log(two)
		console.log(three)
		var onehtml = $('.one').parents('.allway').html()
		var twohtml = $('.two').parents('.allway').html()
		var threehtml = $('.three').parents('.allway').html()
		if (onehtml == '') {
			one = 0;
			first = 0;
		}
		if (twohtml == '') {
			two = 0;
			second = 0;
		}
		if (threehtml == '') {
			three = 0;
			third = 0;
		}
		var ott = one + two + three;
		console.log(ott);
		$('.order-total-price p').find('span').text(ott)
		$('.total-choose').find('em').text(index)
	} else {
		$('.order-total-price p').find('span').text('0')
		$('.total-choose').find('em').text('0')
	}
	$('.child-check').prop('checked', isCheckAll) //简化
	$('.checkAll').prop('checked', isCheckAll)
});
//全选--反方向 项目选中/取消=>全选状态
$('.child-check').click(function() {
	//获取checkbox的总数
	var all = $('.child-check').length;
	//已经选中的数量
	var checked = $('.child-check:checked').length;
	$('.checkAll').prop('checked', checked == all);
})

$('.arr_1 input').click(function() {
	var isCheck = $(this).prop('checked')
	if (isCheck) {
		$(this).parent().css('display', 'none')
		$(this).parent().siblings('.list_1').css('display', 'block')
		$(this).parent().siblings('.list_2').css('display', 'none')
		$(this).parent().siblings('.list_3').css('display', 'none')
		$(this).parent().siblings('.arr_2').css('display', 'block')
		$(this).parent().siblings('.arr_3').css('display', 'block')
	}
})
$('.arr_2 input').click(function() {
	var isCheck = $(this).prop('checked')
	if (isCheck) {
		$(this).parent().css('display', 'none')
		$(this).parent().siblings('.list_2').css('display', 'block')
		$(this).parent().siblings('.list_1').css('display', 'none')
		$(this).parent().siblings('.list_3').css('display', 'none')
		$(this).parent().siblings('.arr_1').css('display', 'block')
		$(this).parent().siblings('.arr_3').css('display', 'block')
	}
})
$('.arr_3 input').click(function() {
	var isCheck = $(this).prop('checked')
	if (isCheck) {
		$(this).parent().css('display', 'none')
		$(this).parent().siblings('.list_3').css('display', 'block')
		$(this).parent().siblings('.list_1').css('display', 'none')
		$(this).parent().siblings('.list_2').css('display', 'none')
		$(this).parent().siblings('.arr_1').css('display', 'block')
		$(this).parent().siblings('.arr_2').css('display', 'block')
	}
})
$('.arr_label').on('click', '.care_del', function() {
	$(this).parents('.label_1').css('display', 'none')
	$(this).parents('.label_1').siblings('.arr_list').css('display', 'inline-block')
})
