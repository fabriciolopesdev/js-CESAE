// EX 01

const myButton1 = document.querySelector('.mudar-cor1');
const myButton2 = document.querySelector('.mudar-cor2');
const myButton3 = document.querySelector('.mudar-cor3');

function changeColor() {
    const newColorBtn = newColor();
    this.style.backgroundColor = newColorBtn;

}

const newColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

myButton1.addEventListener('click', changeColor);
myButton2.addEventListener('click', changeColor);
myButton3.addEventListener('click', changeColor);



// EX 02
const myButton4 = document.querySelector(".criar-texto");

function adicionarTexto() {
    const novoTexto = document.createElement("p");
    novoTexto.innerText = "É só mais um esforço para o curso de Front-end e a seguir vou de férias.";
    document.body.append(novoTexto);
}

myButton4.addEventListener("click", adicionarTexto);



// EX 03

const myButton5 = document.querySelector(".aumentar-tamanho");
const myButton6 = document.querySelector(".diminuir-tamanho");

myButton5.addEventListener("click", aumentarTexto);
myButton6.addEventListener("click", diminuirTexto);

  function aumentarTexto() {
    const texto = document.querySelector(".aumentar-tamanho");
    const tamanhoAtual = document.body.fontSize();
    this.style.fontSize = (tamanhoAtual + 2) + "px";
}

function diminuirTexto() {
   const texto = document.querySelector(".diminuir-tamanho");
   const tamanhoAtual = document.body.fontSize();
    this.style.fontSize = (tamanhoAtual - 2) + "px";
}  

