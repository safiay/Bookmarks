//Sequelize
require('dotenv').config()
const { models, sequelize } = require('./models');
//Express
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', async (req,res) =>{
    const bookmark = await models.Bookmark.findAll({})
    res.render('index',{ bookmark:bookmark })
})

app.post('/', async (req,res) =>{
    await models.Bookmark.create({
        name:req.body.name,
        url:req.body.url
        
    })
    res.redirect('/')
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

