

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'marin01.jpg' ,title:'FLNG', sub1:'FLNG는 해상에서 천연가스를 채굴한 뒤 이를 정제하고 LNG로 액화해 저장ㆍ하역할 수 있는 해양플랜트 설비입니다. FLNG를 이용해 해저 가스전을 개발할 경우 평균 2조원에 달하는 육상 액화ㆍ저장설비 건설이 필요 없으며, 해저 파이프를 설치하지 않기 때문에 해저 생태계도 보호할 수 있다는 장점이 있습니다.',},
        {imgsrc:'marin02.jpg' ,title:'FPSO', sub1:'FPSO는 부유식 원유생산저장하역설비로서 심해 유전이나 유전의 조기 개발, 중소규모 유전 개발에 활용되는 고가의 해양설비입니다. FPSO는 독립된 한 개의 프로젝트가 아니라 수십억달러 규모의 유전개발 전체와 맞물려 있어 예기치 못한 사고나 차질이 발생하면 유전개발 자체가 중단될 수 있습니다. 과학적인 검증을 통한 고도의 신뢰성과 안전성이 필요한 해양설비입니다.',},
        {imgsrc:'marin03.jpg' ,title:'부유식 해양구조물', sub1:'부유식 해양구조물은 심해 해상에 설치돼 해저 유전의 시추와 생산 작업에 투입되는 설비입니다. 삼성중공업은 세계 최초 FLNG 개발에 이어 세계 최대 규모의 CPF 수주로 해양구조물의 역사를 새로이 쓰고 있습니다.',},
        {imgsrc:'marin04.jpg' ,title:'고정식 해양플랫폼', sub1:'고정식 해양플랫폼은 수심이 비교적 얕은 해상에 고정하여 설치되는 해양자원개발설비입니다. 고정식 해양플랫폼에는 콘크리트 중력식 구조물, 자켓 구조물, 가이드 타워, 갑판승강형 등 여러 종류가 있습니다. 이제까지 삼성중공업은 세계 유수의 오일 메이저로부터 수많은 플랫폼을 수주, 성공리에 인도해 왔습니다.',},
        {imgsrc:'marin05.jpg' ,title:'드릴쉽', sub1:'드릴십은 심해지역이나 파도가 심한 해상에서 원유를 발굴하는 시추설비로 고도의 선박건조기술과 해저시추 기술이 필요한 고부가가치선입니다. 삼성중공업은 1998년 국내 조선업계 최초로 드릴십을 건조한 바 있으며, 이후 축적된 기술과 건조경험을 바탕으로 2012년 3월 스웨덴 스테나에 인도한 스테나 아이스막스호는 극지방에서 시추작업을 수행할 수 있는 세계 최초의 극지용 드릴십입니다.',},
        {imgsrc:'marin06.jpg' ,title:'잭업리그', sub1:'잭업리그(Jack-up Rig)는 통상 대륙붕 유전 개발에 투입되는 시추 설비입니다. 잭업리그는 잭업레그를 바다 밑으로 내려 해저면에 고정하고, 선체를 해수면 위로 띄워 작업함으로써 파도와 조류의 영향을 받지 않는 장점이 있습니다.영하 20도까지 떨어지는 북해의 혹한과 거친 해상 조건 속에서 작업할 수 있도록 고사양으로 제작됩니다.',},
      ];
    
 
  $('.info_bottom .more').click(function(e){
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.info_bottom .more');  // 0 1 2 3

      $('.info_bottom .modal_box').fadeIn('fast');
      $('.info_bottom .popup').fadeIn('slow');

      //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
      $('.info_bottom .popup img').attr('src','./images/content2/'+memo[ind].imgsrc);

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
