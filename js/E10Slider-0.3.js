/*
 * 	E10Slider 0.3 - jQuery plugin - 2013.5.14
 *
 * Copyright (c) 2013 dogrun Inc.
 * Dual licensed under the MIT and GPL licenses.
 *
 */
 
(function($){
	$.fn.E10Slider = function(options){
		var opts = $.extend({}, $.fn.E10Slider.defaults, options);
	    var i = 0;
	    l = opts.images.length;
	    var event;
	    
	    for(j=0;j<l;j++){
	    	$("#e10navi").append('<img src="image/fig_navi.png" class="navi"/>');
	    }
	    
		if (("ontouchstart" in window)) {
　　         event = "touchstart";
            }
        else {
　　     	event = "click";
        };
		$("#e10navi").bind(event, function(ev) {
			ev.preventDefault();
			pictureStory(); 
		});
    

	    $("#e10navi img:eq(1)").css({"opacity":0.9});
	    function pictureStory(){
	  		if(i < l-1){		
	  			$(".photo:eq(0)").attr("src", opts.images[i]); 
	  			$(".photo:eq(1)").attr("src", opts.images[i+1]); 
	
	  			$(".photo:eq(0)").animate(
	  				{opacity:'0'},
	  				{
	  					duration:500,
		  				complete:function(){
		  					    $("#e10navi img").eq(i+1).animate({opacity:0.4},500);
		  					    $("#e10navi img").eq(i+2).animate({opacity:0.9},500);
					  			$(".photo:eq(0)").attr("src", opts.images[i+1]); 
					  			$(".photo:eq(0)").css({opacity:"1"});
					  			
					  			i++;
					  			//setTimeout(pictureStory, opts.intvl1);
					  	}
				  	}
		  		);
		  		

	  		}else if(i == l-1){
	  			$(".photo:eq(0)").attr("src", opts.images[i]);  
	  			$(".photo:eq(1)").attr("src", opts.images[0]);  
	  			$(".photo:eq(0)").animate(
	  				{opacity:'0'},
	  				{
	  					duration:500,
		  				complete:function(){
		  					    $("#e10navi img").eq(i+1).animate({opacity:0.4},500);
		  					    $("#e10navi img").eq(1).animate({opacity:0.9},500);	
					  			$(".photo:eq(0)").attr("src", opts.images[0]);
					  			$(".photo:eq(0)").css({opacity:"1"});
					  			
					  			i=0;
					  			/*
					  			opts.rep --;
						  		if(opts.rep >= 1){
					  				setTimeout(pictureStory, opts.intvl2);
					  			}
					  			*/
					  	}
				  	}
		  		);
	  			
	  		};
	  	}
	};
	$.fn.E10Slider.defaults = {
      rep  : 1,
      intvl1:4000,
      intvl2:4000,
      images:[]
    };
})(jQuery);