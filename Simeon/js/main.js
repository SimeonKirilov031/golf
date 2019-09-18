
var images = ['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg'];

function slide(index){
    for (let i = 0; i < images.length; i++) {
        document.getElementById("slide" + (i + 1)).src= images[(index + i) % images.length];
    }
};
