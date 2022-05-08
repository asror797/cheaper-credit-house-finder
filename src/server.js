const express = require('express')
const app = express()
const model = require('./modules')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(model)


app.listen(5000,()=>{
   console.log('app is ready at 5000 port')
})