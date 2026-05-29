var imagenes = [
    "images (1).jpg",
    "images (2).jpg",
    "images (3).jpg",
    "images (4).jpg",
    "images (5).jpg",
];

var i = 0;

document.getElementById("siguiente").addEventListener("click", () =>{
    if(i<4){i++;}
    document.getElementById("carrusel").setAttribute("src", imagenes[i]);
});

document.getElementById("anterior").addEventListener("click", () =>{
    if(i<0){i--;}
    document.getElementById("carrusel").setAttribute("src", imagenes[i]);
});

