process.env.UV_THREADPOOL_SIZE= 1 // no.of threads ench child
const cluster = require('cluster')

// Is the file is executed in master mode ?
if (cluster.isMaster){
    // cause index,js to be executed *again* but 
    // in the child mode
    cluster.fork()
    cluster.fork()
    console.log(cluster.isMaster);
}else{
    // Im a child ,im goging to act as a child
    //and do nothing 
console.log(cluster.isWorker)
const express = require('express')
const crypto = require('crypto')
const app = express()




app.get('/',(req,res)=>{
    crypto.pbkdf2('a','b',200000,512,'sha512',()=>{
        res.send('Hello')
    });
})
app.get('/fast',(req,res)=>{
    res.send('This is fast')
})


app.listen(3000)
}