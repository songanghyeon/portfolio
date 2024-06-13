//사업소개 기능구현

var memo = [
    {title: '해양산업', 
    sub: '삼성중공업은 드릴십, FPSO 분야에서 세계 최다 건조실적을 보유하고 있습니다. 또한 고도의 안정성과 기술력을 필요로 하는 고정식 해양플랫폼, TLP, 부유식 해상구조물 등 해양개발설비 시장에서도 축적된 선박 건조 기술을 바탕으로 세계 주요 오일 메이저 기업들로부터 인정을 받고 있습니다.',
    imgsrc: 'business01.jpg'},
    {title: '조선사업', 
    sub: '1974년 창립 이래 세계 유수의 해운선사로부터 1,417척의 선박을 수주하고 성공적으로 인도하고 국내 업계 최초로 멤브레인형 LNG선 화물창을 독자 개발함으로써 LNG선 건조 경쟁력을 한층 끌어 올렸습니다. 세계 최대 컨테이너선을 수주하는 등 고기술·고부가가치선 시장을 선도하고 있습니다',
    imgsrc: 'business02.jpg'},
    {title: '신기술', 
    sub: '세계 경제의 침체 및 저유가 기조가 향후 몇 년간 지속될 것이라는 전망이 우세함에 따라 사업역량 강화를 위한 제품 성능의 차별화 및 원가경쟁력 확보에 초점을 맞춰 기술개발 활동을 추진하고 있습니다. 선도기업으로 자리매김할 수 있도록 선행기술을 확보하고 기술의 상용화를 통하여 신제품 및 신기술 개발에 앞장서겠습니다.',
    imgsrc: 'business03.jpg'}
];

var ind = 0; // 인덱스 
var total = memo.length; // 배열 개수

  function conchange(){ // 방향키 클릭 시 생성되는 태그
      $('.business .business_img img').attr('src','./mainimages/'+memo[ind].imgsrc).hide().fadeIn('fast');

      $('.business dt').text(memo[ind].title); // 태그 생성
      $('.business dd').text(memo[ind].sub);
      $('.business .text').text( (ind+1)+'/'+total); // 개수 리스트
  }

  $('.business .prev').click(function(e){ 
      e.preventDefault();
      ind--; // 2 1 0 2 1 0....
      if(ind==-1)ind=2;
      conchange(); // 입력한 함수 호출 > 그대로 출력
  });
  $('.business .next').click(function(e){ 
      e.preventDefault();
      
      ind++; // 0 1 2 0 1 2 0 1 2....
      if(ind==total)ind=0;
      conchange(); // 입력한 함수 호출 > 그대로 출력
  });












