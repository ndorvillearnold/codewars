

//Given an array of integers as strings and numbers,
//return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumOfValues(arr) {
    return add.reduce((acc, c) => acc + c)

}

console.log(sumOfValues(['5', 3, '2', 1]))   //5321 its because of the concatnation so wRONG and starts as an string



function sumOfValues(arr) {
    return add.reduce((acc, c) => acc + Number(c), 0) // added zero and accumulateor starts as a number -- ALWAYS add zero to save us so it dont make mistakes

}

console.log(sumOfValues(['5', 3, '2', 1]))   //5321 its because of the concatnation so wRONG


//OR use this ONE LINER
//implicit return - no return needed
const s = r => r.reduce((acc, c) => +a + +c) // the plus in the front makes sure its a NUMBER YOU ALSO MUST HAVE space or something
//or it wont work (a + +c)