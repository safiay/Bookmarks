require('dotenv').config()
const { models } = require('../models')

const createTables = () =>{
    console.log('creating table')
    // something in here
    models.Bookmark.create({
        name:"Ramiro",
        url:"Morales"
        
    })
}

module.exports = createTables