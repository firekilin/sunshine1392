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
$('.main').css( {
    'margin-top':(getmenu2+170)+'px',
});
$('.logo_link').css( {
    'position':' absolute',
    'display':' block',
    'left':' 5%',
    'width':' 116px',
    'height':' auto',
    'z-index':' 5',
	'margin':' 0',
});
		
	}else{
		$('.main')[0].removeAttribute('style');
		$('.header')[0].removeAttribute('style');
		$('.logo')[0].removeAttribute('style');
		$('.menu')[0].removeAttribute('style');
		$('.login_button')[0].removeAttribute('style');
		$('.shopping_car')[0].removeAttribute('style');
		$('.logo_link')[0].removeAttribute('style');
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
    'z-index': '6',
    'text-align': 'center',
	'overflow': 'visible',
	'top': 'calc(50% - 225px',
	'transform': 'rotateY(0deg)',
});
	
if($('.jogin_window')[0].attributes.style!=undefined){
	$('.jogin_window')[0].removeAttribute('style');
}
$('.jogin_window').css( {

    'transform': 'rotateY(90deg)',
	
});
}

function loginclose(){
	$('.login_window')[0].removeAttribute('style');
}
/*註冊頁面*/

function joginopen(){
	$('.jogin_window').css( {
	'transform': 'rotateY(0deg)',
});
	if($('.login_window')[0].attributes.style!=undefined){
	$('.login_window')[0].removeAttribute('style');
}
$('.login_window').css( {
         'position': 'fixed',
    'padding-top': '40px',
    'width': '720px',
    'height': '550px',
    'font-size': '30px',
    'font-weight': 'bolder',
    'color': '#187898',
    'background': '#b1e0ef',
    'border-radius': '100px',
    'right': 'calc(50% - 360px)',
    'z-index': '6',
    'text-align': 'center',
	'overflow': 'visible',
	'top': 'calc(50% - 275px)',
	'transform': 'rotateY(90deg)',
	
});

}

function joginclose(){
	$('.jogin_window')[0].removeAttribute('style');
}

