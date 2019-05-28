count();
$(document).ready(function()  {
	$(".up").click(function(){
	$(this).siblings('input').val(parseInt($(this).siblings('input').val(), 10)+1);
	count();
});
$(".down").click(function(){
	$(this).siblings('input').val(parseInt($(this).siblings('input').val(), 10)-1);
	count();
});




});

function count(){
	var shopping_total=0;
$('.shopping_list tr').each(function( index,value){
var show=0;
if(index>=1&&index<($('.shopping_list tr').length-1)){
show=Number($(this).find('td.car_product_price')[0].textContent.substr(1));
show*=Number($(this).find('input.number').val());
$(this).find('td.car_product_total')[0].textContent=show;
}
shopping_total+=show;
})
$('.buy_total')[0].textContent=shopping_total;
}
