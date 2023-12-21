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
  

 // ---------------- FUNÇÃO PARA ACESSIBILIDADE --------------//
 
 document.addEventListener('DOMContentLoaded', function () {
  const bodyHTML = document.getElementById('body');
  const lowVision = document.getElementById('lowVision');

  if (lowVision) {
      lowVision.addEventListener('click', vision);
  }

  function vision() {
      if (bodyHTML.style.fontSize === 'x-large') {
          bodyHTML.style.fontSize = '';
      } else {
          bodyHTML.style.fontSize = 'x-large';
      }
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const headHTML = document.querySelector('head');
  const daltonismo = document.getElementById('daltonismo');
  const btnDaltonismo = document.querySelector('.img-acessibility');

  if (daltonismo) {
    daltonismo.addEventListener('click', toggleDaltonismo);
  }

  function toggleDaltonismo() {
    const linkElement = document.querySelector('link[data-daltonismo]');

    if (!linkElement) {
      // Altera a folha de estilo para daltonismo
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'dalton.css';
      link.setAttribute('data-daltonismo', 'true');
      headHTML.appendChild(link);


      // Altera a imagem do botão
      btnDaltonismo.src = "./imagens/iconeAcessibilidadeDaltonico2.png";
    } else {
      // Remove a folha de estilo para daltonismo
      linkElement.remove();

      // Altera a imagem do botão
      btnDaltonismo.src = "./imagens/iconeAcessibilidadeDaltonico.png";
    }
  }
});






