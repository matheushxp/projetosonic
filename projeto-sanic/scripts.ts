// Revelar mais informações
const revealButtons = document.querySelectorAll('.reveal-btn');

revealButtons.forEach(button => {
    button.addEventListener('click', () => {
        const extraInfo = button.nextElementSibling as HTMLElement;
        // Alterna a exibição da informação extra
        extraInfo.style.display = extraInfo.style.display === 'block' ? 'none' : 'block';
    });
});

// Slideshow de imagens
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Muda a cada 4 segundos
}

function plusSlides(n: number) {
    slideIndex += n;
    showSlides();
}



