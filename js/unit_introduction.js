
var index = 0,num = 0,i=1;


$('section .inner .main figure>div').click(function(){
	
	index = $(this).index()-1;
	
	
	$("section div.getout").show();
 $('section div.getout ul').eq(index).show().siblings('section div.getout ul').hide();
	
})

$("section div.getout>a.close").click(function(){
	$("section div.getout").hide();
	
})

$("section div.getout>a.left").click(function(){
	
	i=-1;
	
	
	num = num +i;
	
	if($("section div.getout ul.clothUl").css("display")=="block"){
		
		if(num>1){num=0}
		if(num<0){num =1}
		
		
		$("section div.getout ul.clothUl>li").eq(num).show().siblings().hide();
	}
	
		if($("section div.getout ul.mallUl").css("display")=="block"){
		
		if(num>3){num=0}
		if(num<0){num =3}
		
		
		$("section div.getout ul.mallUl>li").eq(num).show().siblings().hide();
	}
		if($("section div.getout ul.exibitionUl").css("display")=="block"){
	
		if(num>3){num=0}
		if(num<0){num =3}
		
		
		$("section div.getout ul.exibitionUl>li").eq(num).show().siblings().hide();
	}
	
		if($("section div.getout ul.foodUl").css("display")=="block"){
	
		if(num>2){num=0}
		if(num<0){num =2}
		
		
		$("section div.getout ul.foodUl>li").eq(num).show().siblings().hide();
	}
		if($("section div.getout ul.departUl").css("display")=="block"){
	
		if(num>1){num=0}
		if(num<0){num =1}
		
		
		$("section div.getout ul.departUl>li").eq(num).show().siblings().hide();
	}
	
	
	
})

$("section div.getout>a.right").click(function(){
	
	i=1;
	
	
	num = num +i;
	
	if($("section div.getout ul.clothUl").css("display")=="block"){
		
		if(num>1){num=0}
		if(num<0){num =1}
		
		
		$("section div.getout ul.clothUl>li").eq(num).show().siblings().hide();
	}
	
		if($("section div.getout ul.mallUl").css("display")=="block"){
		
		if(num>3){num=0}
		if(num<0){num =3}
		
		
		$("section div.getout ul.mallUl>li").eq(num).show().siblings().hide();
	}
		if($("section div.getout ul.exibitionUl").css("display")=="block"){
	
		if(num>3){num=0}
		if(num<0){num =3}
		
		
		$("section div.getout ul.exibitionUl>li").eq(num).show().siblings().hide();
	}
	
		if($("section div.getout ul.foodUl").css("display")=="block"){
	
		if(num>2){num=0}
		if(num<0){num =2}
		
		
		$("section div.getout ul.foodUl>li").eq(num).show().siblings().hide();
	}
		if($("section div.getout ul.departUl").css("display")=="block"){
	
		if(num>1){num=0}
		if(num<0){num =1}
		
		
		$("section div.getout ul.departUl>li").eq(num).show().siblings().hide();
	}
	
	
	
})






