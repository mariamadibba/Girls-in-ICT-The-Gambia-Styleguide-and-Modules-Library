
var images = ['b1.jpg', 'b2.jpg', 'b3.jpg'];
$('#js-banner').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
