// 갤러리 작동
var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 2,  //단수
    spaceBetween: 20,  //단사이 여백
    //loop: true,  //무한 loop
    // inutialSlides
    //freeMode: true,  //터치 만큼 자유롭게 이동
    centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.next1',
    //     prevEl: '.prev1',
    // },
    pagination: {   //페이지 네이션
    el: '.pagination1',
    //dynamicBullets: true,
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    // autoplay: {  //자동
    // delay: 4000,
    // disableOnInteraction: false
    // },

    // scrollbar: {  //하단 스크롤바
    // el: '.swiper-scrollbar',
    // hide: true
    // }
});


// 패밀리사이트 작동
$(document).ready(function() {

	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });

	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');
    },function(){
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
    });
});


	   //top이동
	   $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
        
        
        //$('.text').text(scroll);

        if(scroll>300){ 
            $('.move_top').fadeIn('slow');  
        }else{
            $('.move_top').fadeOut('fast');
        }
    });

    $('.move_top').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},500); 
    });