var mainDivs = $('main').children()

var zFlyers = [];
for(i = 0; i < mainDivs.length; i++) {
    zFlyers[i] = $(mainDivs[i]).css("z-index");
}

$('#about').on('click', function() {
    $('.about').css("z-index", zFlyers.length++);
});

$('#projects').on('click', function() {
    $('.projects').css("z-index", zFlyers.length++);
});

$('#testimonials').on('click', function() {
    $('.testimonials').css("z-index", zFlyers.length++);
});

$('#contact').on('click', function() {
    $('.contact').css("z-index", zFlyers.length++);
});



var testTimer = $(function() {
    $('#test1').fadeIn(5000).fadeOut(5000, function () {
        $('#test2').fadeIn(5000).fadeOut(5000, function () {
             $('#test3').fadeIn(5000).fadeOut(5000)
        })
    })
})

// setInterval(function() {
//     testTimer
// })



