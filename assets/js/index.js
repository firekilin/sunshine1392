/*輪轉圖圖片切換*/
var slidnum=0;
function slidright(){
	if($('.botton_right')[0].getAttribute('onclick')=='slidright()'){
	var back=slidnum;
	$('.botton_right')[0].removeAttribute("onclick");
	$('.botton_left')[0].removeAttribute("onclick");
	slidnum++;
	if(slidnum>=$('.slidimgs').length){
		slidnum=0;
	}
	$('.slidimgs')[slidnum].className="slidimgs right";
	setTimeout(function(){$('.slidimgs')[slidnum].className="slidimgs showing";},500);
	setTimeout(function(){$('.slidimgs')[back].className="slidimgs left";},500);
	setTimeout(function(){	$('.slidimgs')[back].className="slidimgs";},1000);
	setTimeout(function(){	$('.botton_right')[0].setAttribute("onclick", 'slidright()');},1000);
	setTimeout(function(){	$('.botton_left')[0].setAttribute("onclick", 'slidleft()');},1000);
	for(var i=0;i<$('.slid_dot .dot').length;i++){
		$('.slid_dot .dot')[i].className="dot";
	}
		$('.slid_dot .dot')[slidnum].className="dot get";
}
}
function slidleft(){
		if($('.botton_left')[0].getAttribute('onclick')=='slidleft()'){
	var back=slidnum;
	$('.botton_right')[0].removeAttribute("onclick");
	$('.botton_left')[0].removeAttribute("onclick");
	slidnum--;
	if(slidnum<0){
		slidnum=($('.slidimgs').length-1);
	}
	$('.slidimgs')[slidnum].className="slidimgs left";

	setTimeout(function(){$('.slidimgs')[slidnum].className="slidimgs showing";},500);
	setTimeout(function(){$('.slidimgs')[back].className="slidimgs right";},500);

	
	setTimeout(function(){	$('.slidimgs')[back].className="slidimgs";},1000);
	setTimeout(function(){	$('.botton_right')[0].setAttribute("onclick", 'slidright()');},1000);
	setTimeout(function(){	$('.botton_left')[0].setAttribute("onclick", 'slidleft()');},1000);
	for(var i=0;i<$('.slid_dot .dot').length;i++){
		$('.slid_dot .dot')[i].className="dot";
	}
		$('.slid_dot .dot')[slidnum].className="dot get";
}
}

function slid(x){

	slidnum=x;
	if(slidnum<0){
		slidnum=($('.slidimgs').length-1);
	}

		for(var i=0;i<$('.slid_dot .dot').length;i++){
		$('.slid_dot .dot')[i].className="dot";
	}
		$('.slid_dot .dot')[slidnum].className="dot get";
		for(var i=0;i<$('.slidimgs').length;i++){
			$('.slidimgs')[i].className="slidimgs";
		}
		$('.slidimgs')[slidnum].className="slidimgs showing";

}
function autoslid(){
		slidright();
		setTimeout(autoslid,5000);
}
setTimeout(autoslid,5000);
/*商品換頁*/
var product_hot_num=0;
var product_new_num=0;
function product_left(x){

	if(product_hot_num!=0&&x=='hot'){
		product_hot_num--;
		$('.'+x+' .one_product').css({'top':product_hot_num*(-100)+'%'})
	}else if(product_new_num!=0&&x=='new'){
		product_new_num--;
		$('.'+x+' .one_product').css({'top':product_new_num*(-100)+'%'})
	}

}
function product_right(x){
	var canslid=Math.floor(($('.'+x+' .one_product').length-1)/5);
	if(product_hot_num!=canslid&&x=='hot'){
		product_hot_num++;
		$('.'+x+' .one_product').css({'top':product_hot_num*(-100)+'%'})
	}else if(product_new_num!=canslid&&x=='new'){
		product_new_num++;
		$('.'+x+' .one_product').css({'top':product_new_num*(-100)+'%'})
	}
}
