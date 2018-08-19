var mainDivs = $('main').children()
console.log(mainDivs);

var zFlyers = [];
for(i = 0; i < mainDivs.length; i++) {
    zFlyers[i] = $(mainDivs[i]).css("z-index");
    console.log(zFlyers);
}

$('#about').on('click', function() {
    console.log('hi');
    $('.about').css("z-index", zFlyers.length++);
});

$('#projects').on('click', function() {
    console.log('hi');
    $('.projects').css("z-index", zFlyers.length++);
});

$('#testimonials').on('click', function() {
    console.log('hi');
    $('.testimonials').css("z-index", zFlyers.length++);
});

$('#contact').on('click', function() {
    console.log('hi');
    $('.contact').css("z-index", zFlyers.length++);
});

// var testTimer = $(function() {
//     $('#test1').fadeIn(5000).fadeOut(5000, function () {
//         $('#test2').fadeIn(5000).fadeOut(5000, function () {
//              $('#test3').fadeIn(5000).fadeOut(5000)
//         })
//     })
// })

// setInterval(function() {
//     testTimer
// })



