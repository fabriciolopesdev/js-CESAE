const a = function (num) { //regular functions expression
    return num % 2 === 0;
}

const b = (num) => { //arrow function with parens around param
    return num % 2 === 0;
}

const c = num => { //no parens around param
    return num % 2 === 0;
}

const d = num => { //implicit return
    num % 2 === 0
}

const e = num => num % 2 === 0; // one-linear implicit return



const firstnames = fullNames.map(function (name){
    return name.first;
})


const newFirstNames = fullNames.map(name => (

)) //ver o erro