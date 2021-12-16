let header = document.querySelector('#header')
let navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (this.scrollY > navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* quando rolar o scroll chamar essas funcções */

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})
