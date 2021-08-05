//Sequelize
require('dotenv').config()
const { models, sequelize } = require('./models');
//Express
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require("method-override");

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.get('/', async (req, res) => {
    const bookmark = await models.Bookmark.findAll({})
    res.render('index', { bookmark: bookmark })
})

app.post('/', async (req, res) => {
    await models.Bookmark.create({
        name: req.body.name,
        url: req.body.url

    })
    res.redirect('/')
})

app.delete('/:id', async (req, res) => {
    await models.Bookmark.destroy({
        where: {
            id: req.params.id,
        }
    })
    res.redirect('/')
})

app.put('/:id', async (req, res) => {
    await models.Bookmark.update({
        name: req.body.name, url: req.body.url
    },
        {
            where: {
                id: req.params.id,
            }
        })
    res.redirect('/')
})

app.get("/update/:id", (req, res) => {
    res.render("update.ejs", {
      id: req.params.id,
    })
  })

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

