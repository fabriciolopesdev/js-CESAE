//EX object

//Ex 01 - create
const product = {
    name: "Squeeze",
    inStock: true,
    price: 1.99,
    colors: ['red', 'blue', 'green']
 }
 console.log(product);//adicional ao ex
 console.log(typeof product);//adicional ao ex


 //Ex 02 scanner
 console.log(product.price, product.colors[2]);

 
 //Ex 03 change the price
 product.price = 2.55// para alterar alguma informação. Pego a propriedade da mesma forma para imprimir na consola e altero.
 console.log(product.price);
