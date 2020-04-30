$('.designation_fr li').click(function () {
	var index=$(this).index();
	$(' .main_ul li').css("display",'none');
	$(' .main_ul li').eq(index).css('display','inline-block');
})
$('.main_one_title').click(function () {
	var index=$(this).index();
	$(' .main_one_content').css("display",'none');
	$(' .main_one_content').eq(index).css('display','inline-block');
	 $('.main_one_title').css('background-color','rgb(245,245,245)');
	$('.main_one_title').eq(index) .css('background-color','black');
	$('.main_one_title').css('color','black');
	$('.main_one_title').eq(index) .css('color','white')
})
$('.del').click(function () {
	$(this).parents('.list-group-item').remove()
})

