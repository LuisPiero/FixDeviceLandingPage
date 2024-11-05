const contactoLink = document.querySelector("#contactos");

contactoLink.addEventListener("click", (e) => {
    e.preventDefault(); // Evita la acción por defecto del enlace

    const lastSection = document.querySelector(".LastSection");
    const sectionPosition = lastSection.getBoundingClientRect().top; 


    window.scrollBy({
        top: sectionPosition - 200, 
        behavior: "smooth" 
    });
});