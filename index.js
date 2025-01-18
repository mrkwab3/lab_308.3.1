// * Part 1: Fizz Buzz
// for (let i = 1; i <= 100; i++) {
//     let fizz = false
//     let buzz = false
    
//     if (i % 3 === 0) {
//         fizz = true
//     }
    
//     if (i % 5 === 0) {
//         buzz = true
//     }

//     if (fizz && buzz) {
//         console.log(`${i} | Fizz Buzz`)
//     } else if (fizz) {
//         console.log(`${i} | Fizz`)
//     } else if (buzz) {
//         console.log(`${i} | Buzz`)
//     } else {
//         console.log(`${i} | N/A`)
//     }
// }

// * Part 2: Prime Time
// let n = Number(prompt("Please input a positive integer"))


// if (isNaN(n)) { // Edge case for non-numerical inputs like strings
//     throw new Error("Please enter a numerical input.")
// }

// if (n < 1) { // edge case for negative numbers and 0
//     throw new Error("Error - User did not enter a positive integer")
// }

// while (n) {
//     n++
//     let m = 2
//     let isPrime = true

//     while (m < n) { // Determines if the current n is a prime number
//         if (n % m === 0) {
//             isPrime = false
//             break
//         } else {
//             m++
//         }
//     }

//     if (isPrime) {
//         break
//     }
// }

// console.log(`The next prime number is ${n}`)

// * Part 3: Feeling Loopy

let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// Cell 1
let cellTitle1 = ''
let i = 0

while (csv[i] !== ',' && csv[i] !== '\\') {
    cellTitle1 += csv[i]
    i++
}
i++

// Cell 2
let cellTitle2 = ''

while (csv[i] !== ',' && csv[i] !== '\\') {
    cellTitle2 += csv[i]
    i++
}
i++

// Cell 3
let cellTitle3 = ''

while (csv[i] !== ',' && csv[i] !== '\\') {
    cellTitle3 += csv[i]
    i++
}
i++

// Cell 4
let cellTitle4

while (csv[i] !== ',' && csv[i] !== '\\') {
    cellTitle4 += csv[i]
    i++
}

console.log(cellTitle1)
console.log(cellTitle2)
console.log(cellTitle3)
console.log(cellTitle4)