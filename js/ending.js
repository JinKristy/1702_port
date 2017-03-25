
$(function(){
		$("#zlayer").on("mousemove",function(e){
			w = $(this).width();
			h = $(this).height();
			x = 20 * Math.ceil(e.pageX / w * 100) / 100;
			y = 20 * Math.ceil(e.pageY / h * 100) / 100;

			$("#zlayer img").eq(0).css({marginLeft: -x,marginTop:-y});
			$("#zlayer img").eq(1).css({marginLeft: x * 4, marginTop:y * 2});
			// $("#zlayer img").eq(2).css({marginLeft: -x * 6, marginTop:-y * 3});
			// $("#zlayer img").eq(3).css({marginLeft: x * 4, marginTop:y * 3});
			// $("#zlayer img").eq(4).css({marginLeft: -x,marginTop:-y});
			
		});


		// $("#intro h2").css({transform:"scale(0.7,0.7)"});

		// setTimeout(function(){
		// 	$("#intro h2").css({transform:"scale(1.0,1.0)"});	
		// },2000);
	});