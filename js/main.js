//active hover class changer//
$(document).scroll(function() {
    
    var scrollPoint = $(this).scrollTop();


    if(scrollPoint < 1470) {
        $('.nav a').removeClass('active');
        $('.meMenu').addClass('active');
        console.log($(this).scrollTop());
    } else if (scrollPoint > 1470 && scrollPoint < 2400) {
        $('.nav a').removeClass('active');
        $('.youMenu').addClass('active');
    } else {
        $('.nav a').removeClass('active');
        $('.usMenu').addClass('active');
    }
    // $('#menu').toggle($(this).scrollTop() > 1000);
});


$(document).ready(function() {


smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutCubic',
				offset: 0,
				updateURL: true,
				callbackBefore: function ( toggle, anchor ) {},
				callbackAfter: function ( toggle, anchor ) {}
			});
});







$("select").change(function() {
    console.log(this.value);

    // var result = $.grep(arrayOfCountries, function(e) { return e.name == this.value});
    // console.log(result[0].name);
    //var obj = _.find(arrayOfCountries, function(obj) { return obj.name == this.value });
    //console.log(obj.name);
    
    changeCountry(this.value);
    
})

function findByName(source, name) {

    for(var i=0; i < source.length; i++) {
        if(source[i].name === name) {
            return source[i]
        }
    }
}


function changeCountry(countryCode) {
    var object = findByName(arrayOfCountries, countryCode);


//
    $('.image').html(object.map);
    $('.country').html(object.prettyName);
    $('.stat1').html(object.penetration);
    $('.stat2').html(object.population);
    $('.stat3').html(object.timeOnline);
    $('.map').attr('src',object.image);

    if (countryCode === 'AU') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7563/15467644144_44da4dd226_h.jpg)');
        $('select').val('AU');
    } else if (countryCode === 'CA') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7507/15470276073_51cca144e2_h.jpg)');
    }
    else if (countryCode === 'FR') {
        $('#page2').css('background-image', 'url(https://c4.staticflickr.com/8/7570/15470275483_961ba05ce4_b.jpg)');
    }
    else if (countryCode === 'DE') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7494/15903864429_4e60194665_k.jpg)');
    }
    else if (countryCode === 'IT') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7495/15902674050_becfecf552_h.jpg)');
    }
    else if (countryCode === 'ES') {
        $('#page2').css('background-image', 'url(https://c4.staticflickr.com/8/7583/15903854449_eb2c8c6ea9_h.jpg)');
    }
    else if (countryCode === 'UK') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7461/15902512388_cafe943334_h.jpg)');
    }
    else if (countryCode === 'US') {
        $('#page2').css('background-image', 'url(https://c1.staticflickr.com/9/8592/16089961865_7f573696e8_k.jpg)');
    }
   else {
        $('#page2').css('background-image', 'url(https://c1.staticflickr.com/9/8581/16089246042_2c187e4d7f_h.jpg)');
    }
}

// fuckin location
jQuery.ajax( { 
  url: 'http://www.telize.com/geoip', 
  type: 'POST',
  success: function(location) {
    changeCountry(location.country_code);
  }
} );