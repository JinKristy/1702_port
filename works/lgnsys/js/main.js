$(function(){
		var n = 1
		
		$(".slider .img_wrap").stop().animate({left:-1024 * n});
		$(".slider .txt_view .txt_wrap").stop().animate({left:-316 * n});

        var playCheck = 0;
        $("button.btnOn_off").click(function(){
            if(playCheck == 0) {
                clearInterval(rolling);
                $('.btnOn_off img').attr('src','img/slidStop-icon.png')
                playCheck = 1;
            } else {
                slideLooper();                
                $('.btnOn_off img').attr('src','img/slidPlay-icon.png')
                playCheck = 0;
            }

            return false;
        });

        slideLooper();
        function slideLooper() {
    		rolling = setInterval(function(){
        		n++
        		if(n==4){n=1
            		$(".slider .img_wrap,.slider .txt_view .txt_wrap").css({left:0})
            		}
            		$(".slider .img_wrap").stop().animate({left:-1024 * n})
            		$(".slider .txt_view .txt_wrap").stop().animate({left:-316 * n})
            		
            		$('.slider .txt_view .btn li img').attr('src','img/slid-icon.png')
            		$('.slider .txt_view .btn #btn'+n+' img').attr('src','img/slidOn-icon.png')
            		$('.cpage').text(n)
    		
    		},2000);
        };
		
		$('.slider .txt_view .btn img:first').attr('src','img/slidOn-icon.png')
		
		$('.slider .txt_view .btn li').each(function(index) {
            $(this).attr('id','btn'+(index+1))
			$(this).attr('data-n',index+1)
			$('img',this).attr('alt',index+1)
        });
		
		$('.slider .txt_view .btn li').click(function(){
			n =parseInt($(this).attr('data-n'))
			$('.slider .img_wrap').stop().animate({left:-1024 * n})
			$('.slider .txt_view .txt_wrap').stop().animate({left:-316 * n})
			$('.slider .txt_view .btn li img').attr('src','img/slid-icon.png')
			$('img',this).attr('src','img/slidOn-icon.png')
			$('.cpage').text(n)
		});
	
	});