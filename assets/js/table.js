var sidemenu=0;
var sidemenu2=0;
$(window).scroll(function() {
	var scroll=$(window).scrollTop();
	if(sidemenu==0){
		sidemenu=1;
		sidemenu2=$('.side_menu').offset().top;
	}
	if(scroll>=getmenu2)
	{
		$('.side_menu').css( {

	'margin-top': '0px',

	});
	}
	if(scroll>=sidemenu2-170)
	{
		
	$('.side_menu').css( {
    'position': 'fixed',
    'margin-top': '0px',
	'top': '170px',
    'z-index': '5',   
	'width': '250px',
	});
	}else{
	$('.side_menu')[0].removeAttribute('style');
	}
	
});