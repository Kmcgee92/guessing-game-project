

const readline = require("readline");

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min-1)) + min;
    
}

let secretNumber;
checkGuess = (num) => {
    // console.log(secretNumber)
    if(num>secretNumber+2) {
        console.log("Way too Big!")
        return false
    }else if(num>secretNumber){
        console.log("To big")
        return false
    }else if(num<secretNumber-3){
        console.log("Your cold! Way too low!")
    }else if(num<secretNumber){
        console.log("Too low buddy")
        return false
    }else if(num === secretNumber){
        console.log(`Damn ${name}.... You got it!`)
        return true
    }
    
}
let count = 1;
let name;
var firstNm = () => {
    interface.question(`pick a minimum number: `, (userMin => {
        interface.question(`...now pick a max num: `, (userMax) => {
            if(Number(userMin)>Number(userMax)){
                console.log(`the max is supposed to be Greater than the min dumbass!`)
                firstNm()
            }
            secretNumber = getRandomInt(Number(userMin), Number(userMax));
            if(secretNumber > 50){
                console.log("seriously those numbers are unrealistic...")
                firstNm()
            }
            start()
        })
        
    }))
}
let start = () => {
    interface.question("What's your name? ", (input) => {
        name = input
        interface.question(`What year were you born, ${name}? `, (userBirthDay) => {
            console.log("Jesus your old.... well while I hack your credentials play my little game!")
            askGuess()
        })
        
    })
}



let a = () => {
    console.log(`.`)

}
let b = () => {
    console.log(`.....`)

}
let c = () => {
    console.log(`bank withdraw initialized..æ…¬≤`)

}
let d = () => {
    console.log(`≥≥≥………`)

}
let e = () => {
    console.log(`withdrawal complete: {balance}:$0.00`)

}
let f = () => {
    console.log(`Thanks!!! ${name}`)

}

askGuess = () => {
    interface.question(`Ok ${name}, guess my number: `, (userInput) => {
        let trueNum = Number(userInput)
        let response = checkGuess(trueNum)
        
        // console.log("current count: " + count)
        if(response){
            if(count === 1) {
                console.log(`${count} try really!? Did you Cheat?`)
                interface.close()
            }else {
                console.log(`Took you ${count} tries! Also im almost done hacking your shit!.....`)
                setTimeout(a, 1500)
                setTimeout(b, 1800)
                setTimeout(c, 2300)
                setTimeout(d, 2800)
                setTimeout(e, 3200)
                setTimeout(f, 3400)
               
                
                
            }
                interface.close()
        }else {
            count++
            askGuess()
        }
        
        
        
    })
}


firstNm()

