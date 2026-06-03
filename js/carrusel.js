var imagenes = [
    "img/images (1).jpg",
    "img/images (2).jpg",
    "img/images (3).jpg",
    "img/images (4).jpg",
    "img/images (5).jpg"
];

var i = 0;

document.getElementById("siguiente").addEventListener("click", () => {
    if (i < 4) {
        i++;
    }
    document.getElementById("carrusel").src = imagenes[i];
});

document.getElementById("anterior").addEventListener("click", () => {
    if (i > 0) {
        i--;
    }
    document.getElementById("carrusel").src = imagenes[i];
});
