function cambiarSlide(index) {
    const carrusel = document.querySelector('#carruselFotos');
    const bsCarrusel = bootstrap.Carousel.getOrCreateInstance(carrusel);
    bsCarrusel.to(index);

    document.querySelectorAll('.miniaturas img').forEach((img, i) => {
        img.classList.toggle('active-thumb', i === index);
    });
}
document.querySelector('#carruselFotos').addEventListener('slid.bs.carousel', function (event) {
    const index = event.to;

    document.querySelectorAll('.miniaturas img').forEach((img, i) => {
        img.classList.toggle('active-thumb', i === index);
    });
});