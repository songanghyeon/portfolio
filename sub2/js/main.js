//section01 기능구현

var memo1 = [
    {title: 'SAVER Air', 
    sub: '공기 윤활 시스템(SAVER Air)은 선체 바닥에 공기를 분사하여 해수와의 마찰 저항을 줄여 선박의 연비를 향상 시키는 친환경 시스템입니다. 삼성 중공업이 자체 개발한 SAVER Air를 170,000m3급 LNG선에 적용한 결과, 5% 이상의 연료 절감 효과가 입증되었으며, 향후 다양한 선종에 확대 적용해 수주 경쟁력을 향상시키고자 합니다.',
    imgsrc: 'infoimg01.jpg'},
    {title: 'SAVER Stator', 
    sub: '선박의 프로펠러로 유입되는 해수의 흐름을 균일하게 함으로써 프로펠러의 추진력을 증가시켜 연비를 향상시키는 연료 절감 장치입니다. SAVER Stator-D를 선박에 적용해 약 2%의 연비 절감 효과를 입증하고 있습니다.',
    imgsrc: 'infoimg02.jpg'},
    {title: 'SAVER CAP', 
    sub: '대형 컨테이너선의 선수에 설치해 선체 주변의 해수 흐름을 제어함으로써 연비를 향상시키는SAVER CAP을 개발했습니다. SAVER CAP을 통해1.8%~3.7% 수준의 연비가 개선되며 선체 진동도 줄어 선수 의장품과 컨테이너 박스의 안전한 보관이 가능합니다',
    imgsrc: 'infoimg03.jpg'}
];

var memo3 = [
  {title: '해양 엔지니어링', 
  sub: 'Process, Safety, 진동소음 등 핵심 엔지니어링을 자체수행하고 기술선도 함으로써 기존 제품에 대한 성능/안전을 세계 최고 수준으로 유지할 뿐만 아니라 새로운 Concept 제품을 실현해 오고 있습니다.',
  imgsrc: 'engin01.jpg'},
  {title: 'Safety Study', 
  sub: '안전을 최고의 경영 가치로 생각하고 이를 위해 제품 컨셉 단계부터 안전한 시스템 및 환경을 만들고 국제 표준에 부합하는 다양한 Safety Study를 설계 단계 별로 진행하고 있습니다. 특히 화재, 폭발, 인명탈출 등에 대한 전문 인력 및 시스템을 확보하고 기술 발전을 선도하고 있습니다.',
  imgsrc: 'engin02.jpg'},
  {title: '해양 프로젝트 재료 엔지니어링', 
  sub: '기존 해양플랜트 재료 엔지니어링 기술은 해외 의존도가 높아 프로젝트 수행의 리스크가 높았습니다. 이에 삼성중공업은 자체 재료 검증 및 재료 선정 프로세스를 독자 개발함으로써 프로젝트 수행 리스크를 완화하고, 기술 자립화를 통해 해양 엔지니어링 설계 기술 경쟁력을 확보했습니다.',
  imgsrc: 'engin03.jpg'}
  ];


  var ind1 = 0; // 인덱스1
  var ind3 = 0; // 인덱스3
  var total1 = memo1.length; // 배열1 개수
  var total3 = memo3.length; // 배열3 개수

  function conchange1(){ // 방향키 클릭 시 생성되는 태그
      $('.section01 .text01 div img').attr('src','./images/content4/'+memo1[ind1].imgsrc).hide().fadeIn('fast');
      $('.section01 dt').text(memo1[ind1].title); // 태그 생성
      $('.section01 dd').text(memo1[ind1].sub);
    //   $('.business .text').text( (ind+1)+'/'+total); // 개수 리스트
  }
  function conchange3() {
    $('.section03 .img img').attr('src', './images/content4/' + memo3[ind3].imgsrc).hide().fadeIn('fast');
    $('.section03 dt').text(memo3[ind3].title);
    $('.section03 dd').text(memo3[ind3].sub);
  }

  $('.section01 .prev').click(function(e) {
    e.preventDefault();
    ind1--;// 2 1 0 2 1 0....
    if (ind1 == -1) ind1 = total1 - 1;
    conchange1();// 입력한 함수 호출 > 그대로 출력
  });
//   $('.business .next').click(function(e){ 
//       e.preventDefault();
      
//       ind++; // 0 1 2 0 1 2 0 1 2....
//       if(ind==total)ind=0;
//       conchange(); // 입력한 함수 호출 > 그대로 출력
//   });


$('.section03 .prev2').click(function(e) {
  e.preventDefault();
  ind3--;
  if (ind3 == -1) ind3 = total3 - 1;
  conchange3();
});

$('.section03 .next').click(function(e) {
  e.preventDefault();
  ind3++;
  if (ind3 == total3) ind3 = 0;
  conchange3();
});

