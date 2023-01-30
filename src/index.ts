// ALIAS TYPE

// type Users = {
//     fisrtName:string
//     age:number
// }

// const user:Users = {
//     fisrtName: "João",
//     age:35
// }
// console.log(user);

// //Union type

// function userInput(input1: number | string, input2: number | string) {
//     let result
//     if (typeof input1 === "number" && typeof input2 === "number") {
//         result = input1 + input2
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     return result
// }

// const combinePrices = userInput(10, 20)
// console.log(combinePrices);

// const combineName = userInput("Apple", "Avocado")
// console.log(combineName);

// //LITERAL TYPE

// let productPrice: 10 | 20 | 30
// let productSiza: "S" | "M" | "L"

// productPrice = 20
// productSiza = "M"

// type User = {
//     firstName: string;
//     age: number
// }

// type JobRole = {
//     id: number
//     role: string
// }

// type employee = User & JobRole

// const employee1: employee = {
//     firstName: "João",
//     age: 28,
//     id: 23,
//     role: "Admin"
// }

// // Day 3 - Exercise 1

// let pi = 3.14159;
// let tau = pi * 2;

// console.log(`${tau} is ${pi} times two.`);

// // Day 3 - Exercise 2 
// // pie é tipo any, transformar em tipo string
// em typescript colocar obrigatóriamente o tipo em cada variável

// let pie:string
// pie = 'blueberry'

// console.log(`I like to eat ${pie}-flavored pie.`)

// Day 3 - Exercise 3

let isDouglas: boolean = true

console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)