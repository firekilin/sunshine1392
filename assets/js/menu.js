var getmenu=0;
var getmenu2=0;
$(window).scroll(function() {
	var scroll=$(window).scrollTop();
	if(getmenu==0){
		getmenu=1;
		getmenu2=$('.menu').offset().top;
	}
	if(scroll>=getmenu2)
	{
		
$('.header').css( {
    'position':'fixed',
    'margin': '0px',
    'height': '65px',
    'width': '100%',
    'top': '0px',
    'left': '0px',
    'background': 'white',
    'z-index': '5',
});
$('.logo').css( {
    'margin':'0px',
	'top':'15px',
    'left': '5%',
    'height': '40px',
    'position': 'absolute',
});
$('.menu').css( {
    'position': 'absolute',
	'height':'65px',
	 'line-height': '65px',
});
$('.login_button').css( {
    'width': '10%',
    'left': '80%',
    'top': '15px',
   'height': '30px',
});
$('.shopping_car').css( {
    'left': '92%',
    'top': '15px',
    'height': '30px',
    'width': '40px',
});
$('.slid_img').css( {
    'margin-top':(getmenu2+70)+'px',
});
		
	}else{
		$('.slid_img')[0].removeAttribute('style');
		$('.header')[0].removeAttribute('style');
		$('.logo')[0].removeAttribute('style');
		$('.menu')[0].removeAttribute('style');
		$('.login_button')[0].removeAttribute('style')
		$('.shopping_car')[0].removeAttribute('style');
	}
	
});

/*登入頁面*/

function loginopen(){
	$('.login_window').css( {
    'position': 'fixed',
    'padding-top': '40px',
    'width': '720px',
    'height': '450px',
    'font-size': '30px',
    'font-weight': 'bolder',
    'color': '#187898',
    'background': '#b1e0ef',
    'border-radius': '100px',
    'right': 'calc(50% - 360px)',
    'z-index': '5',
    'text-align': 'center',
	'overflow': 'visible',
	'top': '200px',
});
}

function loginclose(){
	$('.login_window')[0].removeAttribute('style');
}
