var flag_add=false;
$('.form').Validform({
			tiptype:function (msg,o,cssctl) {
				//o.obj正在验证的元素(表单)
				//错误信息提示对象;
				var $tip=o.obj.next('.error-tip');
				//展示信息
				// cssctl($tip,o.type);
				//修改提示信息
				$tip.text(msg);
				if(o.type==3){
					$tip.fadeIn();
					flag_add=false;
				}else{
					$tip.fadeOut();
					flag_add=true;
				}
				
			},
			
		});

// 添加
$('.add').click(function () {
	var name = $('#username').val().trim();
	var phone=$('.tel_phone').val().trim();
	// 收货地址
	var province=$('.province').val().trim();
	var city = $('.city').val().trim();
	var district=$('.district').val().trim();
	var consignee=province+city+district;
	var  street=$('.street').val().trim()
	var  zip=$('.zip').val().trim()

	var flag=$('.error-tip').css('display');
	if(flag=="none" && flag_add){
		var $tr=$('<tr><td>'+name+'</td><td>'+phone+'</td><td>'+province+city+district+'</td><td>'+street+'</td><td>'+zip+'</td><td> <span class="amend">修改</span><span  class="del">删除</span></td></tr>');
		$('.tbody').append($tr);
	}
})
//删除
$('.tbody').on('click','.del',function () {
		var x= $(this).parents("tr");
		layer.confirm('确定要删除吗',function () {
			//确定--处理函数;
			x.remove();
			layer.msg('删除成功');
		},function () {
			//取消--处理函数
			layer.msg('删除失败');
		});
})
//修改按钮
var index;
$('.tbody').on('click','.amend',function () {
	$('.add').css('display','none');
	$('.ensure').css('display','inline-block');
	var name = $(this).parent().parent().find('td').eq(0).text();
	$('#username').val(name);
	var phone = $(this).parent().parent().find('td').eq(1).text();
	$('.tel_phone').val(phone);
	var street= $(this).parent().parent().find('td').eq(3).text();
	$('.street').val(street);
	var zip= $(this).parent().parent().find('td').eq(4).text();
	$('.zip').val(zip);
	index=$(this).parents('tr').index();
	
})
//确定按钮
$('.ensure').click(function () {
	 $(this).css("display",'none');
	$('.add').css('display','inline-block');
	var x = index + 1
	var $tr = $('.tbody tr:nth-child(' + x + ') td')
	var name =$('#username').val();
	$tr[0].innerHTML=name;
	var phone =$('.tel_phone').val();
	$tr[1].innerHTML=phone;
	
	var province =$('.province').val();
	var city =$('.city').val();
	var district =$('.district').val();
	console.log(province);
      $tr[2].innerHTML=province+city+district;
	var street =$('.street').val();
	$tr[3].innerHTML=street;
	var zip =$('.zip').val();
	$tr[4].innerHTML=zip;
	$('#username').val(' ');
	$('.tel_phone').val(' ');

	 $('.street').val(' ');
	 $('.zip').val(' ');
})
