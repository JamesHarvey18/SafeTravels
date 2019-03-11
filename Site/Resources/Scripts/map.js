// *** GLOBAL VARIABLES ***
//var colors = ['#D3684E', '#5386E4', '#4B5363', '#73CEE2', '#B7BDE8', '#B1C6C1',
//			  '#36413E', '#F7B538', '#DB7C26', '#780116', '#F48484', '#CDE2BA'];
var colors = ['#ff5a5f', '#ff5a5f', '#cc8726', '#009eb7', '#833c9e', '#209949', '#5FBB66'] //['#ff5a5f', '#3c3c3c', '#cc8726', '#009eb7', '#833c9e', '#79B4A9', '#5F4B66', '#56667A', '#8797AF', '#2C1320'];
var currYear;
var selectedState = null;
var currentLayer;
var map;
var worldLayer;
var orLayer;
var ohLayer;
var maLayer;
var orDistrictsLayer;
var ohDistrictsLayer;
var maDistrictsLayer;

var usInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">United States of America</h1>'+
            '<div id="bodyContent">'+
            '<p><b>United States of America</b>, also referred to as <b>U.S.A.</b>, is the worlds ' +
            'third largest country by total area with a population of over 327 million people, '+
            ' making it the third most populous country.</p>' +
            '<p>Source: United States, <a href="https://en.wikipedia.org/wiki/United_States">'+
            'https://en.wikipedia.org/wiki/United_States</a></p>'+
            '<h2>Top 3 Risks</h2>' +
            '<ol>' +
            '<li>Lower Respiratory Infections | <b style="color:red;">4.540 Million</b></li>' +
            '<li>Malaria | <b style="color:red;">2.930 Million</b></li>' +
            '<li>Dengue | <b style="color:orange;">1.4 Million</b></li>' +
            '</ol>' +
            '</div>'+
            '</div>';

var nigeriaInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Nigeria</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Nigeria</b> is a country in Africa.' +
            'It is highly advised to have bug spray at all times and wear protective clothing from mosquitos.'
            '<p>Source: Nigeria, <a href="https://en.wikipedia.org/wiki/Nigeria">'+
            'https://en.wikipedia.org/wiki/Nigeria</a></p>'+
            '<h2>Top 3 Risks</h2>' +
            '<ol>' +
            '<li>Malaria | <b style="color:red;">203.988 Million</b></li>' +
            '<li>Diarrheal Disease | <b style="color:red;">9 Million</b></li>' +
            '<li>HIV | <b style="color:yellow;">140K</b></li>' +
            '</ol>' +
            '<p>Required Vaccinations: Hepatitis A, Malaria, Polio, Thyphoid, Yellow Fever</p>' +
            '</div>'+
            '</div>';

var italyInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Nigeria</h1>'+
            '<div id="bodyContent">'+
            'Places to go: Rome, Venice, Florence, Milan ' +
	          'Avoid: Expensive parking ' +
            '<p>Source: Italy, <a href="https://en.wikipedia.org/wiki/Italy">'+
            'https://en.wikipedia.org/wiki/Italy</a></p>'+
            '<h2>Top 3 Risks</h2>' +
            '<ol>' +
            '<li>Diarrheal Disease | <b style="color:red;">424 Million</b></li>' +
            '<li>Lower Respiratory Infections | <b style="color:red;">52.7 Million</b></li>' +
            '<li>Malaria | <b style="color:orange;">8.6 Million</b></li>' +
            '</ol>' +
            '<p>Required Vaccinations: Hepatitis A, Hepatitis B, Rabies</p>' +
            '</div>'+
            '</div>';

var indiaInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Nigeria</h1>'+
            '<div id="bodyContent">'+
            '<p><b>India</b> is the worlds ' +
            'third largest country by total area with a population of over 327 million people, '+
            ' making it the third most populous country.</p>' +
            '<p>Source: India, <a href="https://en.wikipedia.org/wiki/India">'+
            'https://en.wikipedia.org/wiki/India</a></p>'+
            '<h2>Top 3 Risks</h2>' +
            '<ol>' +
            '<li>Diarrheal Disease | <b style="color:red;">1 Billion</b></li>' +
            '<li>Lower Respiratory Infections | <b style="color:red;">52.7 Million</b></li>' +
            '<li>Malaria | <b style="color:red;">24.987 Million</b></li>' +
            '</ol>' +
            '<p>Required Vaccinations: Hepatitis A, Thyphoid</p>' +
            '</div>'+
            '</div>';

var franceInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">France</h1>'+
            '<div id="bodyContent">'+
            '<p><b>France</b> is a country in Europe.' +
            'Places to go: Visit the Eiffel tower. That thing is huge! ' +
            'Of course, dont just go to France just to visit Paris.There are many more things to see!' +
            '<p>Source: France, <a href="https://en.wikipedia.org/wiki/France">'+
            'https://en.wikipedia.org/wiki/France</a></p>'+
            '<h2>Top 3 Risks</h2>' +
            '<ol>' +
            '<li>Diarrheal Disease | <b style="color:red;">424 Million</b></li>' +
            '<li>Lower Respiratory Infections | <b style="color:red;">52.7 Million</b></li>' +
            '<li>Malaria | <b style="color:orange;">8.6 Million</b></li>' +
            '</ol>' +
            '<p>Required Vaccinations: Hepatitis A, Hepatitis B, Rabies</p>' +
            '</div>'+
            '</div>';

var chinaInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">China</h1>'+
            '<div id="bodyContent">'+
            '<p><b>China</b> is the the worlds most populous country, with a population of around 1.404 billion.' +
            'Places to go: Great wall of china, for its historic past and massive size. You can also visit' +
             ' the Palace museum. Avoid: Very smoggy areas with high pollution.' +
            '<p>Source: China, <a href="https://en.wikipedia.org/wiki/China">'+
            'https://en.wikipedia.org/wiki/China</a></p>'+
            '<h2>Top 3 Risks</h2>' +
            '<ol>' +
            '<li>Diarrheal Disease | <b style="color:red;">125 Million</b></li>' +
            '<li>Lower Respiratory Infections | <b style="color:red;">135 Million</b></li>' +
            '<li>Measles | <b style="color:yellow;">3.325 Million</b></li>' +
            '</ol>' +
            '<p>Required Vaccinations: Hepatitis A, Thyphoid, Japanese Encephalitis</p>' +
            '</div>'+
            '</div>';

// **** MAPS API FUNCTIONS ******
function initialize() {
    map = initMap();
    initSearchBox(map);
}

function initMap() {
    // initializing a map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.09024, lng: 34.02537},
        zoom: 2, // 0 = most zoomed out
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f3f3f5"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c2c5c7"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e2edf5"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });


    // creating a layer
    worldLayer = new google.maps.Data();
    worldLayer.loadGeoJson(properties.worldLayer, {}, function (features) {
        worldLayer.forEach(function (feature) {
            if (false) {
                worldLayer.overrideStyle(feature, {fillColor: 'silver', fillOpacity: 0.4, strokeWeight: 1});
            }
        });
    });

    //globally styling map, revertStyle will revert ovverriden styles back to this.
//    worldLayer.setStyle({
//        strokeWeight: 2,
//        fillOpacity: 1
//    });

    worldLayer.setMap(map);

    var contentString = "";
    // sets selected state
    worldLayer.addListener('click', function (event) {
        var point = {lat: event.latLng.lat(), lng: event.latLng.lng()};
        console.log(event.feature.getProperty('name'));
        // popup information about countries when clicked
        var country = event.feature;
        var countryname = country.getProperty('name');
        if (countryname == 'United States of America') {
          contentString = usInfo;
          var marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'USA'
          });

        }
        else if (countryname == 'Nigeria') {
          contentString = nigeriaInfo;
          var marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'Nigeria'
          });

        }
        else if (countryname == 'Italy') {
          contentString = italyInfo;
          var marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'Italy'
          });

        }
        else if (countryname == 'France') {
          contentString = franceInfo;
          var marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'France'
          });

        }
        else if (countryname == 'India') {
          contentString = indiaInfo;
          var marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'India'
          });

        }
        else if (countryname == 'China') {
          contentString = chinaInfo;
          var marker = new google.maps.Marker({
            position: point,
            map: map,
            title: 'China'
          });

        }

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        infowindow.open(map, marker);

    });

    worldLayer.addListener('mouseover', function (event) {
        selected = event.feature;
        if (selected != selectedState) {
            worldLayer.revertStyle(selected);
            worldLayer.overrideStyle(selected, {fillColor: 'lightblue', fillOpacity: 0.4, strokeWeight: 1});
        }
        else {
            console.log("suka");
        }

    });

    worldLayer.addListener('mouseout', function (event) {
        selected = event.feature;
        if (selected != selectedState) {
            worldLayer.revertStyle(selected);
            var stateName = selected.getProperty('name');
            if (stateName == "Oregon" | stateName == "Ohio"
                    | stateName == "Massachusetts") {
                worldLayer.overrideStyle(selected, {fillColor: 'silver', fillOpacity: 0.4, strokeWeight: 1});
            }

        }
    });



    return map;

}


// ** PREFERENCE MANAGEMENT **
function saveWeights() {
    //if (! user logged in) {
    //  window.alert('You must be signed in to use this feature!');
    //}
}

function loadWeights() {
    //if (! user logged in) {
    //  window.alert('You must be signed in to use this feature!');
    //}

}

function viewSaved() {
    //if (! user logged in) {
    //  window.alert('You must be signed in to use this feature!');
    //}
}

// *** MAP CONTROL FUNCTIONS **


function deleteFiles(files) {
    // TODO
    files.forEach(filename => {
        if (filename == "myMap") {
            document.getElementById("1").innerHTML = "";
        } else {
            document.getElementById("2").innerHTML = "";

        }

    });
}

function selectState(event) {
    var state = event.feature;
    worldLayer.revertStyle(state);
    var stateName = state.getProperty('name');
    if (state != selectedState && stateName == "Oregon"
            | stateName == "Ohio" | stateName == "Massachusetts") {
        worldLayer.overrideStyle(selectedState, {fillColor: 'silver', fillOpacity: 0.4, strokeWeight: 1});
        var latLng = new google.maps.LatLng(state.lat, state.lon);
        map.setCenter(latLng);
        map.setZoom(6);
        setSelected(state);
        document.getElementById('state').value = stateName;
    }
}

function setSelected(state) {
    selectedState = state; // setting global variable
    setCurrentLayer(selectedState);
}

function setCurrentLayer(selectedState) {
    if (selectedState.getProperty('name') == "Oregon") {
        currentLayer = orLayer;
        maLayer.setMap(null);
        ohLayer.setMap(null);
        orLayer.setMap(map);
    } else if (selectedState.getProperty('name') == "Ohio") {
        currentLayer = ohLayer;
        maLayer.setMap(null);
        orLayer.setMap(null);
        ohLayer.setMap(map);
    } else if (selectedState.getProperty('name') == "Massachusetts") {
        currentLayer = maLayer;
        ohLayer.setMap(null);
        orLayer.setMap(null);
        maLayer.setMap(map);
    }

    console.log("current layer set to: " + selectedState.getProperty('name'));

    // info popup upon clicking a precinct
    var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">2018</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Democrat:</b> 47% <i class="fas fa-democrat"></i></p>' +
            '<p><b>Republican:</b> 33% <i class="fas fa-republican"></i></p>' +
            '<hr></hr>' +
            '<p><b>Black:</b> 14% <span class="black box"></span></p>' +
            '<p><b>White:</b> 80% <span class="white box"></span></p>' +
            '<p><b>Other:</b> 6% <span class="other box"></span></p>' +
            '</div>' +
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });


//

}

function getInfo(precinct) {
    var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"> ' + currYear + '</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Democrat:</b>' + feature.VotingData1['0'] + '%<span class="democrat box"></span></p>' +
            '<p><b>Republican:</b>' + feature.VotingData1['1'] + '%<span class="republican box"></span></p>' +
            '<hr></hr>' +
            '<p><b>Black:</b>' + feature.DemographicData.black + '%<span class="black box"></span></p>' +
            '<p><b>White:</b>' + feature.DemographicData.white + '%<span class="white box"></span></p>' +
            '<p><b>White:</b>' + feature.DemographicData.asian + '%<span class="asian box"></span></p>' +
            '<p><b>Other:</b>' + feature.DemographicData.other + '%<span class="other box"></span></p>' +
            '</div>' +
            '</div>';

    return contentString;
}

//*** ALGORITHM UPDATE FUNCTIONS ***
function startAlgorithm() {
    inProgress = true;
    currentLayer.revertStyle(); // clear old layer when user starts new algorithm
    document.getElementById("updatemsg").innerHTML = "Algorithm has started.";

    // initialize algorithm
    var state = document.getElementById("state").value;
    var numDistricts = document.getElementById("numDistricts").value;
    console.log(numDistricts)
    var electionYear = document.getElementById("year").value;
    var seedStrategy = document.getElementById("seedStrategy").value;
    var compactness = document.getElementById("compactness").value;
    var polsby = document.getElementById("polsby").value;
    var schwartzberg = document.getElementById("schwartzberg").value;
    var reock = document.getElementById("reock").value;
    var populationEquality = document.getElementById("populationEquality").value;
    var efficiencyGap = document.getElementById("partisanSymmetry").value;
    updateMapManager();

    function request() {
        $.ajax({
            url: 'calculate',
            type: 'POST',
            dataType: 'text',
            data: {
                state: state,
                numDistricts: numDistricts,
                electionYear: electionYear,
                seedStrategy: seedStrategy,
                compactness: compactness,
                polsby: polsby,
                schwartzberg: schwartzberg,
                reock: reock,
                populationEquality: populationEquality,
                efficiencyGap: efficiencyGap},
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
                console.log("Could not initialize algorithm.");
            }
        }
        );
    }
    ;
    request();
    console.log('response happened bbbbb');
}


function updateMapManager() {

    function request() {
        console.log("entered 2nd request");
        $.ajax({
            url: 'update',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (!response.isDone) {
                    if (response.movesReady) {
                        displayMoves(response.moves);
                    }
                } else {
                    clearInterval(interval);
                }
            },
            error: function (error) {
                console.log("request failed in update map manager");
            }
        });
    }
    interval = setInterval(request, 1000);
}

function displayMoves(moves) {
    if (moves != -1 | moves != null) {
        moves.forEach(move => {
            showMovePrecinct(move);
        });
    }
}


function runAnn() {
    function request() {
        console.log("entered 2nd request");
        $.ajax({
            url: 'sim',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (!response.isDone) {
                    if (response.movesReady) {
                        displayMoves(response.moves);
                    }
                } else {
                    clearInterval(interval);
                }
            },
            error: function (error) {
                console.log("request failed in update map manager");
            }
        });
    }
}

function showMovePrecinct(move) {
    console.log("moving precint");
    var destID = move.destinationDistrictID;

    var feature = currentLayer.getFeatureById(move.precinctID);

//  var newColor = 'purple';
    var newColor = colors[destID]
//  if (destID <= colors.length) {
//	  newColor = colors[destID];
//  } else {
//	  newColor = colors[destID - (destID-colors.length)];
//  }
    currentLayer.overrideStyle(feature, {fillColor: newColor, fillOpacity: 0.4});
}

function toggleOn() {
    //if (currentLayer != null) {
        var stateName = "Oregon";
        if (stateName == "Oregon")
            orDistrictsLayer.setMap(map);
        else if (stateName == "Ohio")
            ohDistrictsLayer.setMap(map);
        else if (stateName == "Massachusetts")
            maDistrictsLayer.setMap(map);
    //}
}

function toggleOff() {
    //if (currentLayer != null) {
        var stateName = "Oregon";
        if (stateName == "Oregon")
            orDistrictsLayer.setMap(null);
        else if (stateName == "Ohio")
            ohDistrictsLayer.setMap(null);
        else if (stateName == "Massachusetts")
            maDistrictsLayer.setMap(null);
    //}
}
