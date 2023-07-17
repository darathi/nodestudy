// console.log("hello world")

// //functions
// function add(a,b){
//     return a+b;
// }

// const sum=add(10,20)
// console.log("SUM OF THE TWO NUMBERS:",sum)

// //export and import 

// const adder=require('./adder')
// const tot=adder.add1(10,20,30)
// const total1=adder.add(10,20)
// console.log("same function value:",total1)
// console.log(tot)

const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to our page")
    }
    else if(req.url === '/about'){
        res.end("Get to know about us!")
    }
    else {res.end(`
    <h1>Oops!</h1>
    <p>Some un proper address </P><a href='/'>Back to Home page</a>
    `)
}
});

server.listen(5500)

