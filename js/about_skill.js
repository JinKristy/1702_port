$(function(){

		$.fn.skillGraph = function() {
		var skillColor = ["#e52467","#e52467","#e52467","#e52467","#e52467","#e52467","#e52467","#e5246767"];
		var skillVar = [90,80,60,90,80,67,70,90];
		var delayVar = 200;
			$(".skillBox ul li span").each(function(e){
				$(this).css({backgroundColor:skillColor[e]});
				delayTime = delayVar * e;



				$(".skillBox ul li span").delay(delayVar).eq(e).animate({width:skillVar[e]+"%"},
										 {duration:2000, easing:"easeOutBounce",
										 step:function(pro) {
										 	$(".skillBox ul li h5").eq(e).text(Math.ceil(pro) + "%");
										 }
									});
			});
		}
});
