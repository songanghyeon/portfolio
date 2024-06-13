

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'ship01.jpg' ,title:'LNG선', sub1:'LNG선은 영하 163도로 액화된 천연가스를 운반하는 선박입니다. 특히 2001년에는 기존 대비 운항성능과 연비가 뛰어난 전기추진 LNG선을, 2008·2009년에는 세계 최대 크기인 26만6천 입방미터급 LNG선을, 2013년 이후에는 연비를 혁신적으로 개선한 친환경 고효율 엔진 LNG선을 각각 성공적으로 건조함으로써 앞선 기술력을 선보였습니다.',},
        {imgsrc:'ship02.jpg' ,title:'유조선', sub1:'원유를 운송하는 원유운반선, 정제과정을 거친 석유제품을 운송하는 정유운반선, 그리고 FPSO 등 해양생산설비에서 생산한 원유를 육상기지로 운송하는 셔틀 탱커가 있습니다.',},
        {imgsrc:'ship03.jpg' ,title:'컨테이너선', sub1:'삼성중공업은 5,000TEU급 컨테이너선이 주종을 이루던 지난 1999년에 세계 최초로 6,200TEU급 컨테이너선을 개발한 이래, 8,100TEU급(2002년), 9,600TEU급(2003년), 13,300TEU급(2006년), 16,000TEU급(2007년) 선박을 세계 최초로 개발하며 컨테이너선의 대형화를 선도',},
        {imgsrc:'ship04.jpg' ,title:'쇄빙 유조선', sub1:'2007년 세계 최초로 7만톤급 극지운항용 전·후진 양방향 쇄빙유조선를 건조하였고 이 후에도 7척을 추가로 수주하는데 성공했습니다. 이 선박은 최대 두께 1.4m의 얼음을 깨고 시속 3.5노트의 속도로 항해할 수 있으며, 영하 45도의 혹한에서도견딜 수 있도록 설계됐습니다.',},
        {imgsrc:'ship05.jpg' ,title:'에탄운반선', sub1:'에탄운반선은 셰일가스 등 천연가스에서 추출되는 에탄을 액화하여 운반하는 선박입니다. 삼성중공업은 2014년 세계 최초로 87만 입방미터급 에탄운반선을 수주해 신시장 개척에 성공했습니다. 에탄운반선은 운항성능이 뛰어나면서도 친환경적인 고부가 가치 선박입니다.',},
        {imgsrc:'ship06.jpg' ,title:'여객선', sub1:'그리스 미노안, 네덜란드 노포크, 스웨덴 스테나 등으로부터 총 9척의 여객선을 수주하면서 크루즈선 사업 진출 기반을 착실히 다졌습니다. 또한 2009년에는 국내 최초로 LNG를 연료로 사용해 운항 중 발생하는 질소산화물과 황산화물 배출량을 각각 90%이상 감축시킨 친환경 여객선을 개발하는 등 친환경 기술연구에도 앞장서고 있습니다.',},
      ];
    
 
  $('.info_bottom .more').click(function(e){
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.info_bottom .more');  // 0 1 2 3

      $('.info_bottom .modal_box').fadeIn('fast');
      $('.info_bottom .popup').fadeIn('slow');

      //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
      $('.info_bottom .popup img').attr('src','./images/content1/'+memo[ind].imgsrc);

      txt+= '<dl>';
      txt+= '<dt>'+memo[ind].title+'</dt>';
      txt+= '<dd>'+memo[ind].sub1+'</dd>';
      txt+= '</dl>';
      
      $('.info_bottom .popup .txt').html(txt); //dl태그 생성

  });

  $('.close_btn,.info_bottom .modal_box').click(function(e){
      e.preventDefault();
      $('.info_bottom .modal_box').hide();
      $('.info_bottom .popup').fadeOut('fast');
  });
});
