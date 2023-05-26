const menuItens = document.querySelectorAll('.link-header a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  nativeScroll(distanceFromTheTop);
}

menuItens.forEach((link) => {
  link.addEventListener("click", scrollToSection);
})

const btn = document.getElementById("btnTop");

btn.addEventListener("click", function(){
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
})

document.addEventListener('scroll', hide)

function hide(){
  if(window.scrollY > 10){
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}

hide();