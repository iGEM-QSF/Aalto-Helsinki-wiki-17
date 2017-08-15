( function( $ ) {
$( document ).ready(function() {
$('#dropdown').prepend('');
    var activeElement = $('#dropdown>ul>li:first');

    $('#dropdown>ul>li').each(function() {
        if ($(this).hasClass('active')) {
            activeElement = $(this);
        }
    });

	var posLeft = activeElement.position().left;
	var elementWidth = activeElement.width();
	posLeft = posLeft + elementWidth/2 -6;
	if (activeElement.hasClass('has-sub')) {
		posLeft -= 6;
	}
	
	$("#dropdown>ul>li").hover(function() {
        element = $(this);
        var w = element.width();
        if ($(this).hasClass('has-sub'))
        {
        	leftPos = element.position().left + w/2 - 12;
        }
        else {
        	leftPos = element.position().left + w/2 - 6;
        };

// rotating porifi while hovering on headings
    //$("img[alt^='Porifi']").width(150).height(150);
        //hover(function() {
        //$(this).replaceWith('<img src='../Aalto-Helsinki-wiki/Porifi-lab.png'>');
        //$("img[alt^='Porifi']").replaceWith('<img src='../Aalto-Helsinki-wiki/Porifi-lab.png'>');
    //});

	$('#dropdown>ul').prepend('<li id="menu-button"><a>Menu</a></li>');
	$( "#menu-button" ).click(function(){
    		if ($(this).parent().hasClass('open')) {
    			$(this).parent().removeClass('open');
    		}
    		else {
    			$(this).parent().addClass('open');
    		}
    	});
});

    //$(".porify").width(150).height(150);
    //$("img[alt^='Porifi']").width(150).height(150);

} )( jQuery );
