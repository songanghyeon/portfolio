// JavaScript Document

$(document).ready(function(){
    var cnt=4;  //탭메뉴 개수 ***


    setTimeout(function(){
        $('.content_area .contlist').hide();
        $('.content_area .contlist:eq(0)').show();
    },500);

     // 첫번째 탭 내용만 열어라
    $('.content_area .tab1').css('background','#f8f8f8').css('color','#0c4da2'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.content_area .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".content_area .contlist").hide(); //모든 탭내용을 안보이게...
          $(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('background','#fff').css('color','#ccc'); //모든 탭메뉴를 비활성화
          $(this).css('background','#f8f8f8').css('color','#0c4da2'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });

