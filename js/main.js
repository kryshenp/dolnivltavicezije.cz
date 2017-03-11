$(function() {   

    // show/hide popular img block
    $('.map-show_hide').click(function(){
        $("#map-popular").toggleClass("hidden");
    });

    //open modal
    $('#map-popular').on('click','a.map-modal', function(e) { 
        e.preventDefault();

        //path to file
        var url = $(this).attr("href");
        //console.log(url);
        
        //show popup
        $("#map-popup").addClass('show');
        //close popup
        $('#map-popup').on('click','#map-close_popup, #map-mask', function(e) {
            $("#map-popup").removeClass('show');
        });

        $('#map-popup_content').load(url);


    });   
});