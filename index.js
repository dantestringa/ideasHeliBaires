const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.scroll-nav');
  if (window.pageYOffset > 50) {
    navbar.classList.remove('nav-claro');
    navbar.classList.add('nav-oscuro');
  } else {
    navbar.classList.remove('nav-oscuro');
    navbar.classList.add('nav-claro');
  }
});