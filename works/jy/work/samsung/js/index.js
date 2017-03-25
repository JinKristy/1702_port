$(function(){
		var n = 1
		
		$("#contents_main .banner_rollimg .banner_roll_src").stop().animate({left:-1920 * n});
		
        var playCheck = 0;
        $("button.btnOn_off").click(function(){
            if(playCheck == 0) {
                clearInterval(rolling);
                $('.btnOn_off img').attr('src','img/icon_stop.png')
                playCheck = 1;
            } else {
                slideLooper();                
                $('.btnOn_off img').attr('src','img/icon_play.png')
                playCheck = 0;
            }

            return false;
        });
       $("#contents_main .banner_roll_src").css({left:-1920});

        slideLooper();
        function slideLooper() {
    		rolling = setInterval(function(){
                $(".banner_ar a#btnRight").click(); 
               
    		},5000);
        };


        $(".btn, .banner_btn ul li").hover(function(){
            clearInterval(rolling);
        },function(){
            slideLooper();       
        });
		

        $(".banner_ar a#btnRight").click(function(){
                n++
                if(n>=4){
                        n=1;
                        $("#contents_main .banner_roll_src").css({left:0})
                    }
                    $("#contents_main .banner_roll_src").stop().animate({left:"-=1920"});          
        });

        $(".banner_ar a#btnLeft").click(function(){
                n--
                if(n<=0){
                        n=3
                        $("#contents_main .banner_roll_src").css({left:-7680})
                    }
                    $("#contents_main .banner_roll_src").stop().animate({left:"+=1920"});          
        });

		$(".banner_btn ul li").click(function(){
            n = $(this).index();
            $("#contents_main .banner_roll_src").stop().animate({left:-1920 * n});
            return false;  
        });

        

		$('.slider .txt_view .btn li').each(function(index) {
            $(this).attr('id','btn'+(index+1))
			$(this).attr('data-n',index+1)
			$('img',this).attr('alt',index+1)
        });
		
		$('.slider .txt_view .btn li').click(function(){
			n =parseInt($(this).attr('data-n'))
			$('#contents_main .banner_rollimg .banner_roll_src').stop().animate({left:-1920 * n})
		});
	
	});