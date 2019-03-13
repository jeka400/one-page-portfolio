$(document).ready(function() {

    $("#bars").on("click", function(e){ //hamburgerce
        e.preventDefault();
        $(".nav-for-small-devices").removeClass("hide");
        $("#iks-button").removeClass("hide");
        $(".div-bars").addClass("hide");
    });

    $("#iks-button").on("click", function(e) {
        e.preventDefault();
        $(".nav-for-small-devices").addClass("hide");
        $("#iks-button").addClass("hide");
        $(".div-bars").removeClass("hide");
    });
   

  $( ".project" )
    .mouseover( //galerija projekata
      function() {
        $( this ).append( $(".hover").removeClass("hide") );
    })
    .mouseout(function() {
        $( this ).find( ".hover" ).addClass( "hide" );
    }); //da nema ovog pri sklanjanju misa vam ovih slika ostao bi hover na zadnjoj hoveronoj slici
  
  


  var slides = $(".slideshow .slide-project"); //varijabla niz slajdova koji se nalaze u slideshow-u sa klasom slide-project

  slides.each(function(index, el){  //index = i, i pocinje od 0, redni broj, a el je element u tom nizu (bio on int, string ili sta vec)
    console.log(el);
    console.log($(el));

    if (index === 0) {
      $(el).addClass('activeSlide').removeClass('hide'); //ako je i = 0 onda je to prvi element, i on treba po difoltu da bude prikazan
    }
    el.setAttribute('data-id', index + 1); // ovo je JS i mora ovako
    // $(el).data('data-id', index+1); // ovo je jquery
  });

  
  var slidesNumber = slides.length;
  console.log(slidesNumber); //ispisali smo u konzoli koliko u .slideshow-u ima .slide-project-a

  $( ".nextSlide" ).click(function(e) {  //klikom na dugme next project
    e.preventDefault();

    var activeSlide = parseInt($('.slide-project.activeSlide').attr('data-id')); //varijabla sctiveSlide = menjamo u INT(projekat sa klasom activeSlide dobija atribut data-id)
    console.log(activeSlide);

    var nextActiveSlide = activeSlide + 1;  //sada je sledeca aktivna klasa prethodna (u int) + 1
    //console.log("next active " + nextActiveSlide);

    if(nextActiveSlide === slidesNumber + 1) {  //ako smo dosli do kraja niza, sledeca aktivna je 1
      nextActiveSlide = 1;
    };

    $(".slide-project").addClass("hide").removeClass("activeSlide"); //svim projektima skidamo active klasu i dodajemo hide
    $('div[data-id="' + nextActiveSlide + '"]').removeClass("hide").addClass("activeSlide"); //samo onoj pravoj dozvoljavamo da se vidi
    

  });


  $( ".prevSlide" ).on('click', function(e) {
    e.preventDefault();

    var activeSlide = parseInt($('.slide-project.activeSlide').attr('data-id'));
    console.log(activeSlide);

    var prevActiveSlide = activeSlide - 1;
    console.log("prev active " + prevActiveSlide);

    if(prevActiveSlide === 0) {
      prevActiveSlide = slidesNumber;
    };

    console.log(prevActiveSlide);

    $(".slide-project").addClass("hide").removeClass("activeSlide");
    $('div[data-id="' + prevActiveSlide + '"]').removeClass("hide").addClass("activeSlide");
    

  });
})

// function myMap() {
//   var mapProp= {
//     center:new google.maps.LatLng(34.0623278,-118.4282031),
//     zoom:15,
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//   var marker = new google.maps.Marker({position: uluru, map: map});
//   }

  function myMap() {
    var uluru = {lat: 34.0623278, lng: -118.4282031};
    
    var map = new google.maps.Map(
        document.getElementById('googleMap'), {zoom: 15, center: uluru,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        
        ]
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }


  
