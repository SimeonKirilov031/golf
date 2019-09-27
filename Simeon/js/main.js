
var images = ['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg'];

function slide(index){
    for (let i = 0; i < images.length; i++) {
        document.getElementById(`slide${i + 1}`).src= images[(index + i) % images.length];
    }
};

function categorySwap(catNumber){
    var categories = [document.getElementById('plp-filter-category-1'), document.getElementById('plp-filter-category-2'),
    document.getElementById('plp-filter-category-3'), document.getElementById('plp-filter-category-4'), document.getElementById('plp-filter-category-5')];

    for(var i=0; i < categories.length; i++){
        categories[i].classList.remove('plp-filter-marked');
    }
}