
$(document).ready(function() {
   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').fadeIn('slow');	
       });
       $('.select .aList li:last a').on('blur', function () {        
              $('.select .aList').fadeOut('fast');
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
 
});

