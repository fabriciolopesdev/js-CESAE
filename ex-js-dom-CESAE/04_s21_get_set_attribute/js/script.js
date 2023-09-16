function ovoougalinha(){ // 1º criar a função 

     let myImage = document.querySelector('img'); // 2º pegar o elemento
     if(myImage.getAttribute('src') ==  'https://devsprouthosting.com/images/egg.jpg'){ // 3º Na primeira condição, colocar as duas imagens
        myImage.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg'); /***a 1ª como egg, como está no HTML. A 2ª chicken para inverter: */
}else{    
    myImage.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg');} // 4º Colocar a imagem egg para fazer a troca como else
}

/** º Passar a função no botão no HTML */
