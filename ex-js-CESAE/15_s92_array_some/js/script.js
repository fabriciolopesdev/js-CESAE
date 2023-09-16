const words = ["dog", 'jello', 'log', 'cupcake', 'bag', 'wag'];

//Are there any words longer than 4 characters?
words.some(word => {
    return word.length > 4;
})//true

//Do any words start with 'Z'?
words.some(word => word[0] === 'Z');

//Do any words contain 'cake'?
words.every(w => w.includes('cake'))//true