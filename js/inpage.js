try {
	for( var cbk in {'load':1,'loadInpage':1} ){
		if ( typeof (window.flixJsCallbacks) === "object" && typeof (window.flixJsCallbacks["_"+cbk+"Callback"]) === "function") {
			var f = window.flixJsCallbacks["_"+cbk+"Callback"];
			f();
		
		}
	}
	
	
} catch(e) {
	try {
		console.log(e)
	} catch(e1) {
	}
}


//remove max-height from #flix-inpage after "Show more" clicked
// Update
FlixjQ('.long-text-ctl .bt').live('click', function() {
	setTimeout(function(){
		var flixinpageheight=FlixjQ('#flix-inpage').height();
		if(flixinpageheight>350)
			FlixjQ('#flix-inpage').css('max-height', 'none')
	},500)	
})





/* Inpage resize function repeated with a delay */
var inpageStart = window.inpageStart || [];


( function( $ ){
	var widths = [ 550, 600, 650, 700, 750, 800, 830, 870, 900,950,1000,1050,1100,1150,1200,1250,1300 ];


	inpageStart.run = function() {

		resize();
		$( window ).bind( 'resize', resize );

	};

	resize = function() {
		$(document).ready(function() {
			if($('#inpage_container').length > 0){
				var container_width = $( '#inpage_container' ).parent().width();
				var container_class = '';
	
				for( var index in widths ){
					if ( container_width > widths[index] ) continue;
	
					if ( ( index - 1 ) < 0 )
						index = 0;
	
					var found_width = widths[index];
	
					container_class = 'inpage_' + found_width;
	
					break;
				}
	
				/* Samsung mobile template force */
	            if(FlixjQ('#flix-samsung-inpage') && FlixjQ('#flix-samsung-inpage').length > 0 && FlixjQ('.inpage_t2') && FlixjQ('.inpage_t2').length > 0) {
	                $( '#inpage_container' ).attr( 'class', 'inpage_550' );
	                setTimeout(function () {
	                    $( '#inpage_container' ).attr( 'class', 'inpage_550' );
	                }, 500);
	                setTimeout(function () {
	                    $( '#inpage_container' ).attr( 'class', 'inpage_550' );
	                }, 750);
	                setTimeout(function () {
	                    $( '#inpage_container' ).attr( 'class', 'inpage_550' );
	                }, 1000);
	                setTimeout(function () {
	                    $( '#inpage_container' ).attr( 'class', 'inpage_550' );
	                }, 1250);
	            } else {
	                $('#inpage_container').attr('class', container_class);
	            }
			}
			
			/*having a issue with default carousels*/
			 var rtlcheck = false;
			    if( $('html').css('direction') == 'rtl' || $('html').attr('dir') == 'rtl' || $("[dir='rtl']").length > 0 ) {
			      rtlcheck = true;
			    }
			  
			    $('#inpage_container  .inpage_product_assets .inpage_block ul').each(function () {
			      $(this).jcarousel({
			        itemFallbackDimension: 300,
			        rtl: rtlcheck
			      });
			      if(rtlcheck == true) {
			        $( this ).find('li').css({'float':'right'});
			      }
			    });
			
            /* Playsation 4 */

            if (FlixjQ.browser && FlixjQ.browser.msie  && parseInt($.browser.version, 10) === 8) {
              FlixjQ('#flix-playstation-page').addClass('flix-ie8');
            }   
		});
	}


	// P-002133
	if (FlixjQ('#flix-inpage #inpage_container').length > 0 && FlixjQ('#flix-inpage #inpage_container').is(":visible") === true) {	
		var hasComplimentoryLogo = FlixjQ("#inpage-iframe-modal" ).has( "a" );
		
		if(hasComplimentoryLogo.length > 0){		
			FlixjQ("#inpage-iframe-modal").appendTo("#flix-Hp-inpage #inpage_container .flix-mod-header .flix-conta1ner-flu1d");		
			FlixjQ("#inpage-iframe-modal").css('display','inline-block');
		}	

		FlixjQ('#inpage-iframe-modal a').click(function (e) {
			e.stopPropagation();
			if(FlixjQ('#flix-inpage').hasClass("long-text-hidden")){
				FlixjQ('#flix-inpage').removeClass("long-text-hidden").css('max-height','none');
			}
		});  
	}

    if (FlixjQ('[skey]').length > 0 && FlixjQ('#flix-inpage #inpage_container').length == 0) {	
		
		if(FlixjQ('#flix-inpage').hasClass("hidden")){
			FlixjQ('#flix-inpage').removeClass("hidden");
		}
	}

	var mpnlist = ['10204719', '10204665','10215054', '10215053', '10212870', '10213255', '10213995'];
    var mpncheck = mpnlist.indexOf(FlixjQ('[data-flix-mpn]').attr('data-flix-mpn'));

	if(FlixjQ('[data-flix-mpn]').length && mpncheck!=-1   ){
      FlixjQ('#inpage-iframe-modal').hide(); 
    }

})( FlixjQ );

setTimeout(function() {
	inpageStart.run();
}, 2000);


