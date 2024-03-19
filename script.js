const title = document.querySelector(".about__nav")
const skil = document.querySelector(".about__skills")

title.addEventListener("click", () =>{
    skil.classList.toggle("open");
    title.classList.toggle("open");
})

