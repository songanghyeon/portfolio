$(document).ready(function () {
        
    $('.tab_menu li:eq(0)').find('a').addClass('spy');    //첫번째 서브메뉴 활성화
    
    $('#content div:eq(0)').addClass('boxMove');    //첫번째 내용글 애니메이션 처리

    var smh= $('.visual').height();  //메인 비주얼의 높이
    var h1= $('.content01 .his02').offset().top-300 ;
    var h2= $('.content01 .his03').offset().top-300 ;
    var h3= $('.content01 .his04').offset().top-400 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(Math.floor(scroll));
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>'1500'){ 
            $('.tab_menu').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('#headerArea').hide();
        }else{
            $('.tab_menu').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('#headerArea').show();
        }
        
        
        
        $('.tab_menu li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            $('.tab_menu li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove1');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.tab_menu li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove2');
        }else if(scroll>=h2 && scroll<h3){
            $('.tab_menu li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove3');
        }else if(scroll>=h3){
            $('.tab_menu li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove4');
        }
        
        
        
       //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
       $('.tab_menu a').click(function(e){
        e.preventDefault(); //href="#" 속성을 막아주는..메소드
  
        var value=0; //이동할 스크롤의 거리

        if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
           value= $('#content .his01').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
        }else if($(this).hasClass('link2')){
           value= $('#content .his02').offset().top-100; 
        }else if($(this).hasClass('link3')){
           value= $('#content .his03').offset().top-100; 
        }else if($(this).hasClass('link4')){
           value= $('#content .his04').offset().top-100; 
        }
        
        $("html,body").stop().animate({"scrollTop":value},1000);
     });
        
    });


});