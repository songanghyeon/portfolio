
$(document).ready(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('.dropdownmenu li a').css('color','#333'); 
           $('#headerArea .top_menu a').css('color','#666'); 
          //흰색 배경에 맞게 헤더 부분의 콘텐츠의 색을 변경
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리가 비주얼의 높이보다 커지면
           
           if(scroll<smh-50 ){ //스크롤의 거리가 비주얼의 높이보다 //50 헤더의높이 
               $(this).css('background','none').css('border-bottom','none'); 
               $('.dropdownmenu li a').css('color','#fff');
               $('#headerArea .top_menu a').css('color','#fff'); 
               //흰색 배경에 ㅁ작게 헤더 부분의 콘텐츠 색을 변경
           }else{ //스크롤 내리기 전 디폴트(마우스를 올리지않음)
               $(this).css('background','#fff'); 
               $('.dropdownmenu li a').css('color','#333');
               $('#headerArea .top_menu a').css('color','#666'); 
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-180){//스크롤300까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('.dropdownmenu li a').css('color','#333');
               $('#headerArea .top_menu a').css('color','#666'); 
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','none').css('border-bottom','none');
                   $('.dropdownmenu li a').css('color','#fff');
                   $('#headerArea .top_menu a').css('color','#fff'); 
              }
           }; 
           
        });

  
    //depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:280},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:150},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#0c4da2');
       },function() {
          $('.depth1',this).css('color','#333');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:280},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:150},'normal').clearQueue();
    });
});
