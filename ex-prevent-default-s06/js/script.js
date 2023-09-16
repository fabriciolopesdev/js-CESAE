<<<<<<< HEAD
// const  form = document.querySelector('form');
// const product = document.querySelector('#product');
// const qty = document.querySelector('#qty');
// const list = document.querySelector('#list');


// form.addEventListener("submit", function(e) {
// e.preventDefault();

// const item = document.createElement('li');

// item.innerText = qty.value + ' ' + product.value;
// list.appendChild(item);


// form.reset();

// })




//Opção 2
// class GroceryItem {
//     constructor(name, quantity, price){
//         this.name = name;
//         this.quantity = quantity; 
//         this.price = price;
//     }
    
//     showPrice(){
//         return `O preço de ${this.name} é ${this.price}`;
//     }

//     showQty(){
//          return `É para trazer ${this.quantity} unidades de ${this.name}`;
//      }
// }

// const batatas = new GroceryItem("Marker", "5", "$3");

// console.log(batatas.showPrice())
// console.log(batatas.showQty()) 
=======
const  form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');


form.addEventListener("submit", function(e) {
e.preventDefault();

const item = document.createElement('li');

item.innerText = qty.value + ' ' + product.value;
list.appendChild(item);


form.reset();

})
>>>>>>> 035a395671d565e8a2ab95d3f5c36c6d036e8b40
