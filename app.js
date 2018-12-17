//console.log("hola mundo");
require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

if (process.env.ENV === 'dev') { 
    app.use(require('morgan')('dev')) 
}
app.get('/', (req, res) => {
    res.json({ status : 'success'})
})
app.get('/hello/:name', (req,res) =>{
    res.json({
        name : req.params.name
    })
})

app.listen(PORT, HOST, () =>{
    console.log(`running on http://${HOST}:${PORT}` )
})
