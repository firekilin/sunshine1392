$(document).ready(function()  {
	$(".up").click(function(){
	$(this).siblings('input').val(parseInt($(this).siblings('input').val(), 10)+1);
});
$(".down").click(function(){
	$(this).siblings('input').val(parseInt($(this).siblings('input').val(), 10)-1);
});
});
