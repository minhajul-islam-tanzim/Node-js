// Extarnal Module 
const express = require('express');

// core module  
const path = require('path')

// Local Module 
const homeRouter = require('./routes/homeRouter')
const {contactRouter} = require('./routes/contactRouter');
const rootDir = require('./utils/utils')

const app = express()



// app.use((req, res, next) => {
//     console.log("first", req.url , req.method)
//     next()
// })

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded())


app.use(homeRouter)

app.use("/host",contactRouter)

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next)    => {
    res.status(404).render('404', {pageTitle: 'page not coming'})
})


const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})





