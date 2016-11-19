var velibapikey = 'c16b1d02ade3a98b4387658d748fdc2b652f2af8';
var availableTags = [];
var allstations;
var bike = '/images/bike.png';
var nobike = '/images/nobike.png';

$.getJSON("/javascripts/Paris.json", function(stations) {
    allstations = stations;
    stations.forEach(function(station) {
        availableTags.push({
            "label": station.name.slice(8),
            "value": station.number
        });
    });
    $("#tags").autocomplete({
        minLength: 0,
        source: availableTags,
        focus: function(event, ui) {
            $("input").val(ui.item.label);
            return false;
        },
        select: function(event, ui) {
            $("#project").val(ui.item.label);
            onstationselected(ui.item.value);
            //$( "#project-id" ).val( ui.item.value );
            //  $( "#project-description" ).html( ui.item.desc );
            //$( "#project-icon" ).attr( "src", "images/" + ui.item.icon );
            return false;
        }
    })
});


var map;

function initMap() {
    $.getJSON("/javascripts/map_style.json", function(map_style) {
        var styledMap = new google.maps.StyledMapType(map_style, {
            name: "Styled Map"
        });

        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(48.857515, 2.341151),
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style'); // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var myMarker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function onstationselected(station) {
    $.get('https://api.jcdecaux.com/vls/v1/stations/' + station + '?contract=Paris&apiKey=' + velibapikey, function(data, status, xhr) {
        var contentString = "Velib restants: " + data.available_bikes + "<br>Places dispo: " + data.available_bike_stands;
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var myMarker = new google.maps.Marker({
            position: data.position,
            map: map,
            icon: data.status == "OPEN" ? bike : nobike,
            animation: google.maps.Animation.DROP
        });
        infowindow.open(map, myMarker);
        myMarker.addListener('click', function() {
            infowindow.open(map, myMarker);
        });
    }, 'json');
}

$("#reset").click(function() {
    $("input").val('');
});
