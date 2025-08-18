var a = {username: 'shafayndritwika', password: 'hello@1234'}
console.log(a)

var b = JSON.stringify(a)
console.log(b)

var c = JSON.parse(b)
console.log(c)

function ritwika() {
  console.log("Hello, Ritwika!");
}

const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Promise resolved!")
  }, 8000);
})

p.then((m))=>{
    console.log("then block")
    console.log(m)
}).catch((err) => {
    console.log("catch block")
    console.log(er)
})

function shafay(){
    console.log("hahahaha")
    ritwika()
    console.log("hahahaha")
}


shafay()