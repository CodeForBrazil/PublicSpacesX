Template.home.rendered = function() {
	if ($(window).scrollTop() > 150) $('.navbar').addClass('solid');
    $(window).scroll(function() {
        if( $(window).scrollTop() > 150) {
            $('.navbar').addClass('solid');
        } else {
        	$('.navbar').removeClass('solid');
        }
    });

    // Form widget
    ! function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? "http" : "https";

        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://s3.amazonaws.com/subscription-cdn/0.2/widget.min.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "sendgrid-subscription-widget-js");
};

Template.home.onDestroyed(function(){
    var formWidgetElement = document.getElementById('sendgrid-subscription-widget-js');
    formWidgetElement.parentNode.removeChild(formWidgetElement);
});
