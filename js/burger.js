// const = forkortelse, i stedet for at skrive hele linjen.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link"); 

// hamburger class åbner og lukker krydset.
// navmenu class åbner og lukker menuen.
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((elementer) => elementer.addEventListener("click", mobileMenu));
// tilføjer eventlistener til alle elementer i listen navLink
//gå i konsol, skriv console.log(navLink) og den viser hele listen, som man kalder på.