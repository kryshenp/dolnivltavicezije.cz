	var ge;
	google.load("earth", "1", {'language': 'cz'});

    function init() {
      google.earth.createInstance('map3d', initCB, failureCB);
    }

    function initCB(instance) {
    	ge = instance;
	    ge.getWindow().setVisibility(true);
		ge.getSun().setVisibility(true);
		ge.getOptions().setAtmosphereVisibility(true);
		ge.getNavigationControl().setVisibility(ge.VISIBILITY_AUTO);

		var la = ge.createLookAt('');
		la.set(48.696611, 14.077057, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, 35, 70, 500);
		ge.getView().setAbstractView(la);

//NACTENI 3D MODELU 
		var link = ge.createLink('');
		var href = 'http://dolnivltavicezije.net23.net/dvt.kmz'
		link.setHref(href);
		var networkLink = ge.createNetworkLink ('');
		networkLink.set(link, true, false);
		ge.getFeatures().appendChild(networkLink);
	}//initCB ends

	function failureCB(errorCode) {
	} //failureCB ends

	//POLOSA ZAGRUZKI           
    setInterval(function() {
        var streamingPercent = ge.getStreamingPercent();
        var progressBar = document.getElementById('progress-bar');
            if (streamingPercent == 100) {
      // streaming complete, hide the progress bar
                progressBar.style.backgroundColor = '#0a0';
                progressBar.style.width = '180px';
            } else {
      // show the progress bar, max width is 180 as per the stylesheet
                progressBar.style.backgroundColor = '#0a0';
                progressBar.style.width = (180 * streamingPercent / 100) + 'px';
            }
    }, 100);
            
            
    function updateOptions() {
        var options = ge.getOptions();
        var form = document.options;
        options.setStatusBarVisibility(form.statusbar.checked);
        options.setGridVisibility(form.grid.checked);
        options.setOverviewMapVisibility(form.overview.checked);
        options.setScaleLegendVisibility(form.scaleLegend.checked);
    }

    //FUNKCE ZAPNOUT/VYPNOUT STINOVANI          
    function showSun() {
        ge.getSun().setVisibility(true);
    }
    function hideSun() {
        ge.getSun().setVisibility(false);
    }           

	//FUNKCE ZPET NA MODEL          
    function naSouradnice() {
        var lookAt = ge.createLookAt('');
        lookAt.setLatitude(48.696611);
        lookAt.setLongitude(14.077057);
        lookAt.setRange(500.0);
        ge.getView().setAbstractView(lookAt);
    }



	google.setOnLoadCallback(init);