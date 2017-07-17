$(document).ready(function() {
      var modals = ['#portfolioModal1'];
      if (window.location.hash && ~modals.indexOf(window.location.hash)) {
               $(window.location.hash).modal();
            }
    })

$(document).ready(function(){
        $('.contentwrap') .css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
        $(window).resize(function(){
                    $('.contentwrap') .css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
});
