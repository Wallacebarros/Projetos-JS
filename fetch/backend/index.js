const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    req.send('teste')
})

app.listen(6020, ()=>{
    console.log('server conectado');
})