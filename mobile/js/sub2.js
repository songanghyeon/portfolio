// 갤러리 작동
var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
    // inutialSlides
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
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

var swiper1 = new Swiper('.swiper2', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 2,  //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
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
    el: '.pagination2',
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


// 기업정보 작동
var memo1 = [
    {title: '세계를 향한 선두주자', 
    sub: '세계 최고를 지향하며 독보적인 경쟁력을 갖추고 있으며 기술개발과 고객만족을 통해 경쟁력을 확보하고 있습니다.',
    imgsrc: 'info01.jpg'},
    {title: '최고의 엔지니어링 사업', 
    sub: '복합 엔지니어링 사업으로 기술, 자본, 노동이 집약된 높은 기술 수준과 대규모 자본, 우수한 노동력으로 등 다양한 노력을 기울이고 있습니다.',
    imgsrc: 'info02.jpg'}
];

var ind1 = 0; // 인덱스1
var total1 = memo1.length; // 배열1 개수
function conchange1(){ // 방향키 클릭 시 생성되는 태그
    $('.section03 .img img').attr('src','./images/'+memo1[ind1].imgsrc).hide().fadeIn('fast');
    $('.section03 dt').text(memo1[ind1].title); // 태그 생성
    $('.section03 dd').text(memo1[ind1].sub);
  //   $('.business .text').text( (ind+1)+'/'+total); // 개수 리스트
}

$('.section03 .prev').click(function(e) {
    e.preventDefault();
    ind1--;// 2 1 0 2 1 0....
    if (ind1 == -1) ind1 = total1 - 1;
    conchange1();// 입력한 함수 호출 > 그대로 출력
});

var swiper4 = new Swiper('.swiper4', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
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