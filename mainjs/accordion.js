var origin=300;  //처음보이는 크기
var min_width=200; //작아지는 크기
var max_width=418; //커지는 크기

$('.stock_box02 li').hover(function(){
    $('.stock_box02 li').animate({width:min_width}, 300).clearQueue();
    $(this).animate({width:max_width}, 300).clearQueue();
    $(this).find('img').css({'transform':'scale(1.2)'});
    $(this).find('dt').css({'margin-top':'100px','transition':'all .4s','font-size':'2.5rem','margin-left':'0'});
    $(this).find('dd').css({'opacity':'1','transition':'all .4s','transition-delay':'.3s'});
    $(this).find('dl').css('background','rgba(0,0,0,.6)');
},
function(){
    $('.stock_box02 li').animate({width:origin},300).clearQueue();
    $(this).find('img').css({'transform':'scale(1)'});
    $(this).find('dt').css({'margin-top':'230px','color':'#fff','font-size':'2em','margin-left':'-130px'});
    $(this).find('dd').css({'opacity':'0','transition':'none'});
    $(this).find('dl').css('background','none');
});