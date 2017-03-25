$(function(){
    
    /* sub_nav 메뉴 fixed */
    
    $(window).scroll(function(){
        var scrPos = $(window).scrollTop();
            
        if( scrPos > 100 ) {
            $("#sub_nav").css({position:"fixed",
                              top:"-20px"});
            
        } else if( scrPos < 120 ) {
            $("#sub_nav").css({position:"absolute",
                              top:"100px"});
        };
        
    });
    
    /* 스크롤시 sub_nav on/off */
    
    $(window).scroll(function(){
        var scrPos = $(window).scrollTop();
            
        if ( scrPos > 2200 ) {
            $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
            $("#sub_nav ul li:nth-child(4)").css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        } else if ( scrPos > 1640 ) {
            $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
            $("#sub_nav ul li:nth-child(3)").css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        } else if ( scrPos > 1100 ) {
            $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
            $("#sub_nav ul li:nth-child(2)").css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        } else if ( scrPos > 150 ) {
            $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
            $("#sub_nav ul li:first-child").css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        };
        
    });
    
    /* sub_nav click시 이동 */
    
    $("#sub_nav ul li:first-child").click(function(){
        $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
        $(this).css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        $("html,body").animate({scrollTop:155});
    });
    
    $("#sub_nav ul li:nth-child(2)").click(function(){
        $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
        $(this).css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        $("html,body").animate({scrollTop:1200});
    });
    
    $("#sub_nav ul li:nth-child(3)").click(function(){
        $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
        $(this).css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        $("html,body").animate({scrollTop:1740});
    });
    
    $("#sub_nav ul li:last-child").click(function(){
        $("#sub_nav ul li").css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
        $(this).css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
        $("html,body").animate({scrollTop:2500});
    });
    
    /* 호버시 색변경 */      // 오류!!! 호버시 해당 탭도 지워지는 현상 미완료, css로 작동 안됨 ㅠㅠ
    
    $("#sub_nav ul li").hover(function(){
        $(this).css({backgroundColor:"rgba(47, 213, 198, 0.9)"});
    }).mouseleave(function(){
        $(this).css({backgroundColor:"rgba(11, 76, 139, 0.9)"});
    });
    
    
})