// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=285; //이미지 하나의 너비
    var movesize=$('.slide_gallery ul li').width();  // 285
    //console.log(movesize);
    var timeonoff;
   
    $('.slide_gallery ul').after($('.slide_gallery ul').clone());
 
    function moveG() {
        position-=movesize;  // 285씩 감소
        $('.slide_gallery').animate({left:position}, 'fast',
            function(){							
            if(position<=-1425){
                $('.slide_gallery').css('left',0);
                position=0;
            }
        }).clearQueue();
    }

   // timeonoff= setInterval(moveG, 3000);
  
    
        //슬라이드 겔러리를 한번 복제
 
  $('.button').click(function(e){
     e.preventDefault();

    // clearInterval(timeonoff);
     
     if($(this).is('.m1')){  //이전버튼 클릭
         
          position-=movesize;  // 285씩 감소
         $('.slide_gallery').animate({left:position}, 'fast',function(){
            if(position<=-1425){
                position=0;
                $('.slide_gallery').css('left',0);
             }
         }).clearQueue();  

     }else if($(this).is('.m2')){  //다음버튼 클릭
           if(position>=0){
                $('.slide_gallery').css('left',-1425);
                position=-1425;
            }
 
            position+=movesize; // 150씩 증가
            $('.slide_gallery').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.slide_gallery').css('left',-1425);
                        position=-1425;
                    }
                }).clearQueue();
  
      }
   });
});

