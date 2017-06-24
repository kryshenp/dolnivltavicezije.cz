// When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', initMap);

    var overlay;
    DVOverlay.prototype = new google.maps.OverlayView();


    function initMap() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(48.696128, 14.074797), // Dolni Vltavice

                    mapTypeControlOptions: {
                      style: google.maps.MapTypeControlStyle.DEFAULT,
                      position: google.maps.ControlPosition.RIGHT_BOTTOM
                    },

                    zoomControlOptions: {
                      position: google.maps.ControlPosition.LEFT_CENTER
                    },

                    streetViewControlOptions: {
                      position: google.maps.ControlPosition.LEFT_BOTTOM
                    },


                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                      {
                        "featureType":"administrative",
                        "elementType":"labels.text.fill",
                        "stylers":[
                          {"color":"#444444"}
                        ]
                      },
                      {
                        "featureType":"administrative.country",
                        "elementType":"geometry",
                        "stylers":[
                            {"visibility":"off"},
                            {"hue":"#ff0000"},
                            {"saturation":"94"},
                            {"lightness":"88"},
                            {"weight":"3.01"},
                            {"invert_lightness":true}
                        ]
                      },
                    {
                      "featureType": "landscape",
                      "stylers": [
                          {"saturation": -100},
                          {"lightness": 65},
                          {"visibility": "on"}
                      ]
                    },
                    {
                      "featureType":"poi",
                      "elementType":"all",
                      "stylers":[
                          {"visibility":"on"}
                      ]
                    },
                    {
                      "featureType":"road",
                      "elementType":"all",
                      "stylers":[
                          {"saturation":-100},
                          {"lightness":45}
                      ]
                    },
                    {   "featureType":"road.highway",
                      "elementType":"all",
                      "stylers":[
                          {"visibility":"simplified"}
                      ]
                    },
                    {
                      "featureType":"road.arterial",
                      "elementType":"labels.icon",
                      "stylers":[
                          {"visibility":"off"}
                      ]
                    },
                    {
                      "featureType":"transit",
                      "elementType":"all",
                      "stylers":[
                          {"visibility":"off"}
                      ]
                    },
                    {
                      "featureType":"water",
                      "elementType":"all",
                      "stylers":[
                          {"visibility":"on"},
                          {"invert_lightness":false},
                          {"color":"#a1dcf5"},
                          {"weight":3.83},
                          {"saturation":-7},
                          {"lightness":-7},
                          {"gamma":0.77}]
                    }
                  ]
                }; //MAP OPTIONS ENDS

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                var image = 'images/marker1.png';
                var image1 = 'images/marker6.png';



                /* POINTS */
        /* Pension calla */
        var point1 = new google.maps.Marker({
            position: new google.maps.LatLng(48.698617, 14.074309),
            map: map, icon:image1,
            title: 'Pension Calla'
        });
        //click on marker
        point1.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x1.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Kostel */
        var point2 = new google.maps.Marker({
            position: new google.maps.LatLng(48.695950, 14.075009),
            map: map, icon:image1,
            title: 'Kostel'
        });
        //click on marker
        point2.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x2.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Kaplicka */
        var point3 = new google.maps.Marker({
            position: new google.maps.LatLng(48.700747, 14.083018),
            map: map, icon:image1,
            title: 'Kaplička'
        });
        //click on marker
        point3.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x3.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Pranyř */
        var point4 = new google.maps.Marker({
            position: new google.maps.LatLng(48.696200, 14.075509),
            map: map, icon:image1,
            title: 'Pranýř'
        });
        //click on marker
        point4.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x4.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Náměstí */
        var point5 = new google.maps.Marker({
            position: new google.maps.LatLng(48.696480, 14.075409),
            map: map, icon:image1,
            title: 'Náměstí'
        });
        //click on marker
        point5.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x5.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Hřbitov */
        var point6 = new google.maps.Marker({
            position: new google.maps.LatLng(48.696180, 14.077509),
            map: map, icon:image1,
            title: 'Hřbitov'
        });
        //click on marker
        point6.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x6.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Most */
        var point7 = new google.maps.Marker({
            position: new google.maps.LatLng(48.694410, 14.074409),
            map: map, icon:image1,
            title: 'Most'
        });
        //click on marker
        point7.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x7.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Pošta */
        var point8 = new google.maps.Marker({
            position: new google.maps.LatLng(48.695680, 14.075709),
            map: map, icon:image1,
            title: 'Pošta'
        });
        //click on marker
        point8.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x8.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Hostinec */
        var point9 = new google.maps.Marker({
            position: new google.maps.LatLng(48.695480, 14.075509),
            map: map, icon:image1,
            title: 'Hostinec'
        });
        //click on marker
        point9.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x9.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Pekařství */
        var point10 = new google.maps.Marker({
            position: new google.maps.LatLng(48.696280, 14.074509),
            map: map, icon:image1,
            title: 'Pekařství'
        });
        //click on marker
        point10.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x10.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });

        /* Škola */
        var point11 = new google.maps.Marker({
            position: new google.maps.LatLng(48.696280, 14.075909),
            map: map, icon:image1,
            title: 'Škola'
        });
        //click on marker
        point11.addListener('click', function() {
                    //console.log("here");
                    //show popup
            $("#map-popup").addClass('show');
                    //close popup
            $('#map-popup').on('click','#map-close_popup', function(e) {
                $("#map-popup").removeClass('show');
            });
                    //load content in popup
            $('#map-popup_content').load("points/x11.html", {limit: 25},
                function (responseText, textStatus, XMLHttpRequest) {
                    console.log(XMLHttpRequest);
                }
            );
        });


        /*SNIMEK*/

            var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(48.693642, 14.067314),
            new google.maps.LatLng(48.698486, 14.081991));

        // The photograph is courtesy of the U.S. Geological Survey.
            var srcImage = './mapa65procent.png';
        //var srcImage = 'http://dolnivltavicezije.net23.net/mapa65procent.png';

        // The custom DVOverlay object contains the DV image,
        // the bounds of the image, and a reference to the map.
        overlay = new DVOverlay(bounds, srcImage, map);

            } 
            //INIT MAP

            function DVOverlay(bounds, image, map) {

        // Initialize all properties.
        this.bounds_ = bounds;
        this.image_ = image;
        this.map_ = map;

        // Define a property to hold the image's div. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.div_ = null;

        // Explicitly call setMap on this overlay.
        this.setMap(map);
      }

      /**
       * onAdd is called when the map's panes are ready and the overlay has been
       * added to the map.
       */
      DVOverlay.prototype.onAdd = function() {

        var div = document.createElement('div');
        div.style.borderStyle = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        // Create the img element and attach it to the div.
        var img = document.createElement('img');
        img.src = this.image_;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.position = 'absolute';
        div.appendChild(img);

        this.div_ = div;

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
      };

      DVOverlay.prototype.draw = function() {

        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

        // Resize the image's div to fit the indicated dimensions.
        var div = this.div_;
        div.style.left = sw.x + 'px';
        div.style.top = ne.y + 'px';
        div.style.width = (ne.x - sw.x) + 'px';
        div.style.height = (sw.y - ne.y) + 'px';
      };

      // The onRemove() method will be called automatically from the API if
      // we ever set the overlay's map property to 'null'.
      DVOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      };
