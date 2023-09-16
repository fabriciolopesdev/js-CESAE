// função como método math
// const myMath = {
//     sum: function (x, y){
//         return x + y},
//     multiply: function (x, y){
//         return x * y},
//     divide: function (x, y){
//         return x / y},
// }
// Ex na consola myMath.sum(2,2)
//4



//função como método, "this"
const person = {
    first: "Fabrício",
    last: "Lopes",
    fullName(){
        return `${this.first} ${this.last}`
     
    }
}
//na consola
//  person.fullName();
// person.last = "Bueno",
// person.fullName();


