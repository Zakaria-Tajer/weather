const express = require('express')
const path = require('path')
const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))







const port = process.env.PORT || 6002

app.listen(port, ()=> {
    console.log(`listning on port! ${port}`);
})