imagens_carrossel = document.getElementsByClassName('imgs_carrossel')
imagem_inicial = 0

function girando(){
    imagens_carrossel[imagem_inicial].style.transform = 'translateX(-100%)'
imagem_inicial = (imagem_inicial + 1) % imagens_carrossel.length
imagens_carrossel[imagem_inicial].style.transform = 'translateX(0)'
}

setInterval(girando, 4000) 