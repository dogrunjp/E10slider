/*
 * 	E10Slider 0.4 - jQuery plugin - 2013.5.23
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
	    	$("#e10navi").append('<svg id="p_'+ j +'" xmlns="http://www.w3.org/2000/svg" class="navi"><circle cx="11" cy="11" r="8" width="22px" hight="22px" fill="red"/></svg>');
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
	    $("#e10navi svg circle").eq(i).css({"fillOpacity":0.8});
	    
	    function pictureStory(){
	  		if(i < l-1){		
	  			$(".photo:eq(0)").attr("src", opts.images[i]); 
	  			$(".photo:eq(1)").attr("src", opts.images[i+1]); 
	
	  			$(".photo:eq(0)").animate(
	  				{opacity:'0'},
	  				{
	  					duration:500,
		  				complete:function(){
		  					    $("#e10navi svg circle").eq(i).animate({fillOpacity:0.4},500);
		  					    $("#e10navi svg circle").eq(i+1).animate({fillOpacity:0.8},500);
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
		  					    $("#e10navi svg circle").eq(i).animate({fillOpacity:0.4},500);
		  					    $("#e10navi svg circle").eq(0).animate({fillOpacity:0.8},500);	
					  			$(".photo:eq(0)").attr("src", opts.images[0]);
					  			$(".photo:eq(0)").css({opacity:"1"});
					  			
					  			i=0;
					  	
					  			opts.rep --;
						  		if(opts.rep >= 1){
					  			//setTimeout(pictureStory, opts.intvl2);
					  			}
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