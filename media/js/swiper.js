// 레이아웃 페스티벌섹션
var swiper2 = new Swiper('.swiper2', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 2,  //단수
    spaceBetween: 5,  //단사이 여백

    centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)

});

// 서브2
var swiper3 = new Swiper('.swiper3', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    //slidesPerView: 3,  //단수
    spaceBetween: 10,  //단사이 여백
    //loop: true,  //무한 loop
    //inutialSlides
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.next1',
    //     prevEl: '.prev1',
    // },
   // pagination: {   //페이지 네이션
    //el: '.pagination2',
    //dynamicBullets: true,
    //clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    //},
    // autoplay: {  //자동
    // delay: 3000,
    // disableOnInteraction: false
    // },

    // scrollbar: {  //하단 스크롤바
    // el: '.swiper-scrollbar',
    // hide: true
    // },
    
    breakpoints:{
        1280 : {
          slidesPerView: 4.5
        },
        1024 : {
          slidesPerView: 3.5
        },
        768 : {
          slidesPerView: 2.5 
        },
        640: {
          slidesPerView: 1.5
        },
        320: {
            slidesPerView: 1.5
          }

  }
});

// 서브3
var swiper4 = new Swiper('.swiper4', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1,  //단수
  spaceBetween: 5,  //단사이 여백
  centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  pagination: {   //페이지 네이션
  el: '.pagination2',
  dynamicBullets: true,
  clickable: true,
  type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
});
























//연혁 탭메뉴 구현

// $(document).ready(function(){
//     var cnt=4;  //탭메뉴 개수 ***


//     setTimeout(function(){
//         $('.content_area .his').hide();
//         $('.content_area .his:eq(0)').show();
//     },500);

//      // 첫번째 탭 내용만 열어라
//     $('.content_area .tab1').css('background','#f8f8f8').css('color','#0c4da2'); //첫번째 탭메뉴 활성화
//                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
//     $('.content_area .tab').each(function (index) {  // index=0 1 2
//       $(this).click(function(e){
//           e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

//           $(".content_area .his").hide(); //모든 탭내용을 안보이게...
//           $(".content_area .his:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
//           $('.tab').css('background','#fff').css('color','#ccc'); //모든 탭메뉴를 비활성화
//           $(this).css('background','#f8f8f8').css('color','#0c4da2').css('font-weight','600').css('font-size','1.25rem'); // 클릭한 해당 탭메뉴만 활성화

//      });
//     });

//   });

