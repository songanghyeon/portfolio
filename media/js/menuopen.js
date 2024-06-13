$(document).ready(function() {

  var onoff = false; //false(메뉴열림) true(메뉴닫힘)
  $(".menuOpen").click(function(e){
      e.preventDefault();
      if(onoff == false){
        $("#gnb").slideDown('slow');
        $('#headerArea').addClass('mn_open');//메뉴모양변경
        onoff = true;
      }else{
        $("#gnb").slideUp('fast');
        $('#headerArea').removeClass('mn_open');
        onoff = false;
      }
  });

 //  네비높이 맞추기(페이지 로딩시 1회)
  var screenSize = $(window).width();
  var winh =  $(document).height();

  if( screenSize > 768){
    $("#gnb").height('auto');
  }else{
    $("#gnb").height(winh);
  }

 var current=0; // 0(해상도가 모바일), 1(소형테블릿이상)

  $(window).resize(function(){ 
     var screenSize = $(window).width();  //가로 해상도
     if( screenSize > 768){  //소형테블릿 이상이면
        $("#gnb").show();
        $("#gnb").height('auto');
       current=1; //소형테블릿이상
      }
      if(current==1 && screenSize <= 768){
        $("#gnb").hide();
        $("#gnb").height(winh);
        onoff = false;
        current=0; //모바일
      }
    }); 
    
  });