var mainDivs = $('main').children()

var zFlyers = [];
for(i = 0; i < mainDivs.length; i++) {
    zFlyers[i] = $(mainDivs[i]).css("z-index");
}

// var flyerAnimate = 
//     $('.aboutFlyer').css("width", "60vh")
//     $('.aboutFlyer').css("height", "95vh")
//     $('.aboutFlyer').css("transform", "0deg")

// button links to flyers 
$('#about').on('click', function() {
    $('.aboutFlyer').css("z-index", zFlyers.length++)
    $('.aboutFlyer').addClass('allClicked')
    $('.projectsFlyer').removeClass('allClicked')
    $('.testFlyer').removeClass('allClicked')
    $('.contactFlyer').removeClass('allClicked');
});

$('#aboutNav').on('click', function() {
    $('.aboutFlyer').css("z-index", zFlyers.length++);
});

$('#projects').on('click', function() {
    $('.projectsFlyer').css("z-index", zFlyers.length++)
    $('.projectsFlyer').addClass('allClicked')
    $('.aboutFlyer').removeClass('allClicked')
    $('.testFlyer').removeClass('allClicked')
    $('.contactFlyer').removeClass('allClicked');
});

$('#projectsNav').on('click', function() {
    $('.projectsFlyer').css("z-index", zFlyers.length++);
});

$('#testimonials').on('click', function() {
    $('.testFlyer').css("z-index", zFlyers.length++)
    $('.testFlyer').addClass('allClicked')
    $('.aboutFlyer').removeClass('allClicked')
    $('.projectsFlyer').removeClass('allClicked')
    $('.contactFlyer').removeClass('allClicked');
});

$('#testimonialsNav').on('click', function() {
    $('.testFlyer').css("z-index", zFlyers.length++);
});

$('#contact').on('click', function() {
    $('.contactFlyer').css("z-index", zFlyers.length++)
    $('.contactFlyer').addClass('allClicked')
    $('.aboutFlyer').removeClass('allClicked')
    $('.projectsFlyer').removeClass('allClicked')
    $('.testFlyer').removeClass('allClicked');
});

$('#contactNav').on('click', function() {
    $('.contactFlyer').css("z-index", zFlyers.length++);
});

// testimonials 
setInterval(function() {
    $('#test1').fadeIn(3500).fadeOut(3500, function () {
        $('#test2').fadeIn(3500).fadeOut(3500, function () {
            $('#test3').fadeIn(3500).fadeOut(3500)            
        })
    })
}, 21000);

