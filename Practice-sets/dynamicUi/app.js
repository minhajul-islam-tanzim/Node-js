// external module  
const express = require('express')

// core module 
const path = require('path')

// local module 
const rootDir = require('./utils/utils')
const { homeRouter } = require('./routes/homeRouter')
const { contactRouter } = require('./routes/contactRouter')


const app = express()

app.use(express.static('public'));




// const homePath = path.join(rootDir, 'views', 'home.html');

app.use((req, res, next) => {
    console.log('first', req.url, req.method)
    next()
})


// for ejs use i have set ejs in engine and set path 
app.set('view engine', 'ejs')
app.set('views', path.join(rootDir, 'views'))


app.use(express.urlencoded())


app.use(homeRouter)

app.use("/host", contactRouter)


app.use((req, res, next)    => {
    res.status(404).render('404', {pageTitle: 'page not coming'})
})




const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})

