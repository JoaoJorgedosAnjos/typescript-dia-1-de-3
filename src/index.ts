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

//LITERAL TYPE

let productPrice: 10 | 20 | 30
let productSiza: "S" | "M" | "L"

productPrice = 20
productSiza = "M"