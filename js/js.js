// JavaScript Document

$(function(){
	/*******初始化动画*******/
	$(".service ul li").removeClass("left").eq(0).addClass("init");
	$(".service ul li").removeClass("left").eq(1).addClass("init");
	$(".service ul li").removeClass("animate-right").eq(2).addClass("init");
	$(".service ul li").removeClass("animate-right").eq(3).addClass("init");
	$(".portfolio ul li:nth-child(4),.portfolio ul li:first-child").addClass("left");
	$(".portfolio ul li:nth-child(3),.portfolio ul li:last-child").addClass("animate-right");
	$(".portfolio ul li:nth-child(2)").addClass("done");
	$(".portfolio ul li:nth-child(5)").addClass("up");
	$(".team ul li").addClass("done");
	$(".product .product-list").addClass("up");
	$(".navfix ul li a,.nav ul li a").eq(0).addClass("cur");
	
	
	/*banner*/
	i=0;
	function autoplay(){
		i++;
		i=(i==$(".pic li").length)?0:i;
		$(".pic li").eq(i).fadeIn(500).siblings().hide();
		$(".text li").eq(i).fadeIn(500).siblings().hide();
		$(".list li").eq(i).addClass("on").siblings().removeClass("on");	
		}
		
	timer=setInterval(autoplay,3000);
	$(".banner").mouseenter(function(){
		clearInterval(timer);
		
		})
	$(".list li").bind("click",function(){
		clearInterval(timer);
		i=$(this).index();
		$(".pic li").eq(i).fadeIn(500).siblings().hide();
		$(".text li").eq(i).fadeIn(500).siblings().hide();
		$(".list li").eq(i).addClass("on").siblings().removeClass("on");
		})
	$(".banner").mouseleave(function(){
		timer=setInterval(autoplay,3000);
		});
		
		
		/****导航固定在最顶端****/
	 $(window).scroll(function(){
		 var scrollTop=$(window).scrollTop();
		 /*****nav******/
		 if(scrollTop>=100){
			 $(".navfix").stop().slideDown();
			 $(".right").show();
			
			 }
		    else{
				$(".navfix").stop().slideUp();
			$(".right").hide();
			};
			
		/*****滚动条拉动改变导航选中状态以及加载动画*****/
			$(".navfix ul li a,.nav ul li a").eq(0).addClass("cur");
			$(".right ul li a").eq(0).addClass("right-hover");
			$(".right ul li span").eq(0).addClass("right-hover");
			$(".right ul li i").eq(0).addClass("right-on");
			
			if(scrollTop<=611){
			
			$(".navfix ul li a").removeClass("cur").eq(0).addClass("cur");
		    $(".right ul li a").eq(0).addClass("right-hover").parent().siblings("li").find("a").removeClass("right-hover");
			$(".right ul li span").eq(0).addClass("right-hover").parent().siblings("li").find("span").removeClass("right-hover");
			$(".right ul li i").eq(0).addClass("right-on").parent().siblings("li").find("i").removeClass("right-on");
			
			}
		else if(scrollTop>=611&scrollTop<=1142){
			$(".navfix ul li a").removeClass("cur").eq(1).addClass("cur");
			$(".right ul li a").eq(1).addClass("right-hover").parent().siblings("li").find("a").removeClass("right-hover");
			$(".right ul li span").eq(1).addClass("right-hover").parent().siblings("li").find("span").removeClass("right-hover");
			$(".right ul li i").eq(1).addClass("right-on").parent().siblings("li").find("i").removeClass("right-on");
			$(".portfolio ul li:nth-child(4),.portfolio ul li:first-child").removeClass("left").addClass("init");
			$(".portfolio ul li:nth-child(3),.portfolio ul li:last-child").removeClass("animate-right").addClass("init");
	        $(".portfolio ul li:nth-child(2)").removeClass("done").addClass("init");
	        $(".portfolio ul li:nth-child(5)").removeClass("up").addClass("init");
			}
		else if(scrollTop>=1142&scrollTop<=2200){
	        $(".navfix ul li a").removeClass("cur").eq(2).addClass("cur");
		    $(".right ul li a").eq(2).addClass("right-hover").parent().siblings("li").find("a").removeClass("right-hover");
			$(".right ul li span").eq(2).addClass("right-hover").parent().siblings("li").find("span").removeClass("right-hover");
			$(".right ul li i").eq(2).addClass("right-on").parent().siblings("li").find("i").removeClass("right-on");
			$(".team ul li").removeClass("done").addClass("in");
			}
		else if(scrollTop>=2200&scrollTop<=2925){
	        $(".navfix ul li a").removeClass("cur").eq(3).addClass("cur");
			 $(".right ul li a").eq(3).addClass("right-hover").parent().siblings("li").find("a").removeClass("right-hover");
			$(".right ul li span").eq(3).addClass("right-hover").parent().siblings("li").find("span").removeClass("right-hover");
			$(".right ul li i").eq(3).addClass("right-on").parent().siblings("li").find("i").removeClass("right-on");
			$(".product .product-list").removeClass("up").addClass("in");
			}		
		else if(scrollTop>=2925&scrollTop<=3900){
	        $(".navfix ul li a").removeClass("cur").eq(4).addClass("cur");
			 $(".right ul li a").eq(4).addClass("right-hover").parent().siblings("li").find("a").removeClass("right-hover");
			$(".right ul li span").eq(4).addClass("right-hover").parent().siblings("li").find("span").removeClass("right-hover");
			$(".right ul li i").eq(4).addClass("right-on").parent().siblings("li").find("i").removeClass("right-on");
			
			
			}	
		else if(scrollTop>=3900){
	        $(".navfix ul li a").removeClass("cur").eq(5).addClass("cur");
			 $(".right ul li a").eq(5).addClass("right-hover").parent().siblings("li").find("a").removeClass("right-hover");
			$(".right ul li span").eq(5).addClass("right-hover").parent().siblings("li").find("span").removeClass("right-hover");
			$(".right ul li i").eq(5).addClass("right-on").parent().siblings("li").find("i").removeClass("right-on");
			
			}	
		 }) ;
		 
		 
		 /****导航点击改变网页滚动条高度***/
		$(".nav ul li a,.navfix ul li a,.right ul li").bind("click",function(){
			var index=$(".nav ul li a,.navfix ul li a,.right ul li").index(this);
			if(index==0 || index==6 ||index==12){
			 $("body,html").animate({ scrollTop: 0 });	
			}
			else if(index==1 || index==7 || index==13){
			 $("body,html").animate({scrollTop:612});	
			}
			else if(index==2 || index==8 || index==14){
			 $("body,html").animate({scrollTop:1143});
			}
			else if(index==3 || index==9 || index==15){
			 $("body,html").animate({scrollTop:2201});
			}
			else if(index==4 || index==10 || index==16){
			 $("body,html").animate({scrollTop:2926});
			}
			else if(index==5 || index==11 || index==17){
			 $("body,html").animate({scrollTop:3901});
			}
			})
			
		/******say点击切换内容********/
		        z=0;
		$(".say a.next").bind("click",function(){
                z++;
				z=(z>=3)?0:z;
				$(".say ul li").eq(z).fadeIn(1500).siblings().hide();
			
			})
		$(".say a.prev").bind("click",function(){
				z=(z==0)?3:z;
				z--;
				$(".say ul li").eq(z).fadeIn(1500).siblings().hide();
			
			})
		
	})