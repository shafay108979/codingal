var a = [23,9,4,7,9,4,23455,443,34,97]

console.log(a)

a.sort((a,b) => a - b)

console.log(a)

a.sort((a,b)=> b- a)

console.log(a)

var b = a.map(e=>e*10)
console.log(b)