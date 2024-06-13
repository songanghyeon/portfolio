// JavaScript Document


$(document).ready(function(){
    var cnt = 3;  // 탭메뉴 개수 ***
    $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs .tab1').addClass('active').css('background','#fff').css('color','#333'); // 첫번째 탭메뉴 활성화

    $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".tabs .contlist").hide(); // 모든 탭내용을 안보이게...
        $(".tabs .contlist:eq("+ind+")").show(); // 클릭한 해당 탭내용만 보여라

        $('.tabs .tab_menu .tab').removeClass('active').css('background', '').css('color', ''); // 모든 탭메뉴를 비활성화
        $(this).addClass('active').css('background','#fff').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화
    });
});
