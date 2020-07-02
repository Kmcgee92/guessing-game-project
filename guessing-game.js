const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num)
    return num
    
}
// console.log(randomInRange(1, 10))
let checkGuess = (num) => {
    let secretNumber = randomInRange(1, 10)
    if(num>secretNumber){
        console.log("Too high.")
        return false
    }else if(num<secretNumber){
        console.log("Too low")
        return false
    }else if(Number(num) === secretNumber){
        console.log('Correct!')
        return true
    }
    return false
}

let askGuess = () => {
    interface.question("Enter a guess: ", (userInput) => {
        // console.log(userInput)
        let answer = checkGuess(userInput)
        if(answer){
        interface.close()  
        }else {
            askGuess()
        }
    })
}
askGuess()
