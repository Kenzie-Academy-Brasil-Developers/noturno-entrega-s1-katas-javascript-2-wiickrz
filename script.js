        /*
            Entrega - Aula 47 - William Heckler
                                                */


        // Function ADD

let add = (num1, num2) => {
    return num1 + num2
}
console.log(add(2, 4))

        // Function Multiply


let multiply = (num1, num2) => {
    let result = 0
    for (let counter = 1; counter <= num2; counter++) {
        result += add(num1, 0)
    }
    return result
}
console.log(multiply(6, 8))


        // Function Power

let power = (num1, num2) => {
    let result = num1
    for (let counter = 2; counter <= num2; counter++){
    result = multiply(result, num1)
    }
    return result
}
console.log(power(2, 8))


        // Function Factorial

let factorial = (num) => {
    let result = num
    for (let counter = num -1; counter > 0; counter--) {
        result = multiply(result, counter)
    }
    return result
}
console.log(factorial(4))


        // Function Bonus - Fibonacci

let fibonacci = (num) => {
    let result = [0, 1, 1]
    for (let counter = 2; counter <=num; counter++) {
        result.push(add(result[counter-1], result[counter]))
    }
    return result[num-1]
}
console.log(fibonacci(8))