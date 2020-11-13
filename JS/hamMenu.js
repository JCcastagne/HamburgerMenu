//Hamburger Menu JavaScript source code by J-C Castagne @GitHub - https://github.com/JCcastagne

const menuButton = document.querySelector('.menuButton');

const drawer = document.querySelector('.drawer');

let menuOpen = false;

menuButton.addEventListener('click', () =>{
  if (menuOpen == false){
    menuButton.classList.add('open');
    drawer.classList.add('toggledDrawer')
    menuOpen = true;
  }else{
    menuButton.classList.remove('open');
    drawer.classList.remove('toggledDrawer')
    menuOpen = false;
  }
})



