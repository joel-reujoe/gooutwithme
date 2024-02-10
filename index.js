const express = require('express');
const app = express()

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))


let port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})