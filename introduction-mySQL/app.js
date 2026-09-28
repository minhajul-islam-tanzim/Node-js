// external module  
const express = require('express')

// core module 
const path = require('path')

// local module 
const error = require('./controllers/error')
const { storeRouter } = require('./routes/storeRouter')
const { hostRouter } = require('./routes/hostRouter')
const rootDir = require('./utils/utils')
const db = require('./utils/dataBaseUtils')

db.execute('SELECT * FROM homes;')
.then(result => {
    console.log('Getting from DB', result)
}).catch(error => {
    console.log('error like in db mysql')
})




const app = express()


// for tailwind css and css 
app.use(express.static('public'));



// for ejs use i have set ejs in engine and set path 
app.set('view engine', 'ejs')
app.set('views', path.join(rootDir, 'views'))



// middleware 
app.use((req, res, next) => {
    console.log('first', req.url, req.method)
    next()
})    

app.use(express.urlencoded())

app.use(storeRouter)

app.use("/host", hostRouter)

app.use(error.error)





const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})

