//Ex - rainbow
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; // array do exercício

let allSpan = document.querySelectorAll("span"); //peguei o elemento a ser modificado

for (let i = 0; i < allSpan.length; i++){ //feito um loop para passar em todos os elementos, associando o tamanho com a minha var
    
   allSpan[i].style.color = colors[i]; // aplicado a modificação do estilo no array criado
}



