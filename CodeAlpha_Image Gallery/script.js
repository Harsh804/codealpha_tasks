const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    updateImage();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateImage();
}

function updateImage() {
    document.getElementById("lightbox-img").src = images[currentIndex];
}
