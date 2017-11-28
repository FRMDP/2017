$(document).ready(function(){
	"use strict";

	/*
	==============================================================
			Slick Slider Main Banner Script Start
	==============================================================
	*/
  if($('.main_banner').length){
  	$('.main_banner').slick({
      fade: true
    });
  }
	/*
	==============================================================
			Featured Slider Script Start
	==============================================================
	*/
  if($('.featured_slider').length){
  	$('.featured_slider').slick({
      fade: true
    });
  }

  /*
  ==============================================================
   Ticker   Script Start
  ==============================================================
  */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.absolute_ticker').fadeIn();
    } else {
        $('.absolute_ticker').fadeOut();
    }
  });
  /*
    ==============================================================
       SLICK SLIDER MULTIPUL SCRIPT
    ==============================================================
  */
  if($('.result_slider').length){
  	$('.result_slider').slick({
  	  centerMode: true,
  	  centerPadding: '0px',
  	  slidesToShow: 6,
  	  responsive: [
  	    {
  	      breakpoint: 1680,
  	      settings: {
  	        arrows: false,
  	        centerMode: true,
  	        centerPadding: '0px',
  	        slidesToShow: 3
  	      }
  	    },
  	    {
  	      breakpoint: 481,
  	      settings: {
  	        arrows: false,
  	        centerMode: false,
  	        centerPadding: '0px',
  	        slidesToShow: 1
  	      }
  	    }
  	  ]
  	});
  }

	/*
	==============================================================
	 Back to Top  Script Start
	==============================================================
	*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
		  	$('.go-up').fadeIn();
		} else {
		  	$('.go-up').fadeOut();
		}
	});
	$('.go-up').on('click', function () {
		$("html, body").animate({
		  scrollTop: 0
		}, 600);
		return false;
	});

	/*
	==============================================================
	 COUNTDOWN  Script Start
	==============================================================
	*/
	if($('.countdown').length){
		$('.countdown').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
	}
	/*
	==============================================================
	 ROSTER SLIDER  Script Start
	==============================================================
	*/
	$(document).ready(function(){
      console.log("inside docready");
  		$('.roster').slick({
  			dots: true,
  			autoplay: true,
  			autoplaySpeed: 2000,
  			slidesToShow: 4,
  			slidesToScroll: 4,
  			responsive: [
  		    {
  		      breakpoint: 1024,
  		      settings: {
  		        slidesToShow: 3,
  		        slidesToScroll: 3,
  		        infinite: true,
  		        dots: true
  		      }
  		    },
  		    {
  		      breakpoint: 600,
  		      settings: {
  		        slidesToShow: 2,
  		        slidesToScroll: 2
  		      }
  		    },
  		    {
  		      breakpoint: 480,
  		      settings: {
  		        slidesToShow: 1,
  		        slidesToScroll: 1
  		      }
  		    }
  		    // You can unslick at a given breakpoint now by adding:
  		    // settings: "unslick"
  		    // instead of a settings object
  		  ]
  		});
  	});

    $('#roster').on('shown.bs.tab', function (e) {
        $('.roster').resize();
    });
 	/*
  ==============================================================
     PROGRESS BAR Script Start
  ==============================================================
  */
  if($('.progressbars').length){
    $(".progressbars").jprogress();
      $(".progressbarsone").jprogress({
        background: "#ff401b"
      });

      var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }
	/*
  ==============================================================
     Counter Script Start
  ==============================================================
  */
    if($('.counter').length){
        $('.counter').counterUp({
          delay: 20,
          time: 1000
        });
    }
  /*
  ==============================================================
     Counter Script Start
  ==============================================================
  */
    $('.slider_widget').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  /*
    =======================================================================
          Range Slider Script Script
    =======================================================================
  */
    if($('.slider-range').length){
      $( ".slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 50, 450 ],
        slide: function( event, ui ) {
          $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) + " - $" + $( ".slider-range" ).slider( "values", 1 ) );
    }
  });
  /*
    =======================================================================
         Tool Tip Script Script
    =======================================================================
  */
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
  /*
    =======================================================================
         Number Counter Script Script
    =======================================================================
  */
  $(document).ready(function(){
    $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

    $(".button").on("click", function() {

      var $button = $(this);
      var oldValue = $button.parent().find("input").val();

      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
       // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }

      $button.parent().find("input").val(newVal);

    });
  });
  /*
  ==============================================================
     TICKER SCRIPT
  ==============================================================
  */
  $(document).ready(function(){
    $('.ticker').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });
  });
  /*
    =======================================================================
            Map Script
    =======================================================================
  */
    if($('#map-canvas').length){
      google.maps.event.addDomListener(window, 'load', initialize);
    }

    function initialize() {

      "use strict";

      var MY_MAPTYPE_ID = 'custom_style';
      var map;
      var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
      var featureOpts = [
        {"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}

      ];
      var mapOptions = {
        zoom: 12,
        center: brooklyn,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        mapTypeId: MY_MAPTYPE_ID
      };

      map = new google.maps.Map(
        document.getElementById('map-canvas'),
        mapOptions
      );

      var styledMapOptions = {
        name: 'Custom Style'
      };

      var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

      map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    }
    /*
    ==============================================================
        DL Responsive Menu
    ==============================================================
    */
    if(typeof($.fn.dlmenu) == 'function'){
      $('#kode-responsive-navigation').each(function(){
        $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());

          $(this).prepend(parent_nav);
        }
        });
        $(this).dlmenu();
      });
    }
  /*
    =======================================================================
         Line Chart Script Script
    =======================================================================
  */
  if($('#chartContainer').length){
    var chart = new CanvasJS.Chart("chartContainer",
    {
      zoomEnabled: true,
        axisX:{
        gridColor: "#d7d8d8" ,
        gridThickness: 1,
        valueFormatString: "MMM",
        interval:1,
        lineThickness: 1,
        lineColor: "#d7d8d8",
        intervalType: "month",
        tickThickness: 0
      },
      axisY:{
        interval: 15,
        gridColor: "#fff",
        gridThickness: 0,
        lineColor: "#d7d8d8",
        lineThickness: 1,
        tickThickness: 0
      },
      toolTip:{
        backgroundColor: "#000",
        cornerRadius: 3,
        fontColor: "#fff",
        Content: "{x} : {y}",
        borderThickness: 0,
        fontSize: 12
      },
      data: [
      {
        type: "line",
        markerColor: "#fff",
        markerType: "circle",
        markerBorderColor : "#ffbe00",
        markerBorderThickness: 4,
        //lineThickness: 3,
        dataPoints: [
        { x: new Date(2012, 1, 1), y: 5 , lineColor: "#ffbe00" },
        { x: new Date(2012, 2, 1), y: 9, lineColor: "#ffbe00" },
        { x: new Date(2012, 3, 1), y: 17, lineColor: "#ffbe00" },
        { x: new Date(2012, 4, 1), y: 22, lineColor: "#ffbe00"  },
        { x: new Date(2012, 5, 1), y: 32 , lineColor: "#ffbe00" },
        { x: new Date(2012, 6, 1), y: 40, lineColor: "#ffbe00"  },
        { x: new Date(2012, 7, 1), y: 25 , lineColor: "#ffbe00" },
        { x: new Date(2012, 8, 1), y: 23 , lineColor: "#ffbe00" },
        { x: new Date(2012, 9, 1), y: 50 , lineColor: "#ffbe00" , indexLabel: "Highest",markerColor: "#fff", markerType: "circle", markerBorderColor : "#ffbe00", markerBorderThickness: 4,},
        { x: new Date(2012, 10, 1), y: 20 , lineColor: "#ffbe00" },
        { x: new Date(2012, 11, 1), y: 15 , lineColor: "#ffbe00" },
        { x: new Date(2012, 12, 1), y: 10 , lineColor: "#ffbe00" }

        ]
      }


      ]
    });

  chart.render();
  }
  var limit = 1000;    //increase number of dataPoints by increasing this

    var y = 0;
    var data = []; var dataSeries = { type: "line" };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y += (Math.random() * 10 - 5);
         dataPoints.push({
          x: i - limit / 2,
          y: y
           });
        }
     dataSeries.dataPoints = dataPoints;
     data.push(dataSeries);

  /*
    =======================================================================
         Bar Chart Script Script
    =======================================================================
  */
  if($('#chartContainerbar').length){
    var chart = new CanvasJS.Chart("chartContainerbar",
    {
      animationEnabled: true,
      legend: {
        cursor:"pointer",
        itemclick : function(e) {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
          }
          else {
              e.dataSeries.visible = true;
          }
          chart.render();
        }
      },
      axisX:{
        tickThickness: 0
      },
      axisY:{
        interval: 100,
        gridColor: "#d7d8d8",
        gridThickness: 1,
        lineColor: "#d7d8d8",
        lineThickness: 1,
        labelFontSize:0,
        tickThickness: 0
      },
      toolTip: {
        shared: false,
        content: function(e){
          var str = '';
          var total = 0 ;
          var str3;
          var str2 ;
          for (var i = 0; i < e.entries.length; i++){
            var  str1 = "<span style= 'color:"+e.entries[i].dataSeries.color + "'> " + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
          }
          str2 = "<span style = 'color:DodgerBlue; '><strong>"+e.entries[0].dataPoint.label + "</strong></span><br/>";
          str3 = "<span style = 'color:Tomato '>Total: </span><strong>" + total + "</strong><br/>";

          return (str2.concat(str)).concat(str3);
        }

      },
      data: [
      {
        type: "bar",
        showInLegend: false,
        name: "Gold",
        color: "#ffbe00",
        dataPoints: [
        { y: 198, label: "0-15'"},
        { y: 201, label: "15-30'"},
        { y: 202, label: "30-45'"},
        { y: 236, label: "45-60'"},
        { y: 395, label: "60-75'"},
        { y: 557, label: "75-90'"}


        ]
      },
      {
        type: "bar",
        showInLegend: false,
        name: "Silver",
        color: "#2f9ff5",
        dataPoints: [
        { y: 158, label: "0-15'"},
        { y: 101, label: "15-30'"},
        { y: 200, label: "30-45'"},
        { y: 200, label: "45-60'"},
        { y: 300, label: "60-75'"},
        { y: 500, label: "75-90'"}


        ]
      }

      ]
    });

  chart.render();
  }
