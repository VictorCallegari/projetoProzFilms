function clicRigthScroll(){
    const content = document.getElementById("carousel");
            content.scrollLeft += 150;
}

function clicLeftScroll(){
    const content = document.getElementById("carousel");
            content.scrollLeft += -150;
}

function clicRigthScroll2(){
    const content = document.getElementById("carousel2");
            content.scrollLeft += 150;
}

function clicLeftScroll2(){
    const content = document.getElementById("carousel2");
            content.scrollLeft += -150;
}


// ---------------- FUNÇÃO PARA O MENU HAMBURGUER --------------//

document.addEventListener('DOMContentLoaded', function () {
    const btnmenu = document.getElementById('btnmenu');
    const areamenu = document.getElementById('areamenu');
    const imgmenu = document.getElementById('imgmenu');
  
    if (btnmenu && areamenu) {
      btnmenu.addEventListener('click', menuHamburguer);
    }
  
    function menuHamburguer() {
      if (areamenu.style.display === 'block' || areamenu.style.display === '') {
        areamenu.style.top = '-100%';
        areamenu.style.display = 'none';
        imgmenu.src = './imagens/burger-menu.svg';
      } else {
        areamenu.style.top = '50px';
        areamenu.style.display = 'block';
        imgmenu.src = './imagens/x-symbol.svg';
      }
    }
  });
  
  




