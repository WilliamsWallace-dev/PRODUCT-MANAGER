import express from 'express'
import {database} from "../config/sequelize"
import path from 'path'
import {router as productController} from './controllers/product'
import {router as categoryController} from './controllers/category'
import {router as viewsController} from './controllers/views'

const methodOverride = require('method-override')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride('_method',{methods : ['POST','GET']}))

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use("/",viewsController)
app.use("/category",categoryController)
app.use("/product",productController)



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    //O seguinte código irá executar uma query que irá se certificar acerca da conexão com o banco de dados. 
    database.authenticate().then(()=>{
        console.log(`DB connection successfuly`)
    })
    console.log(`Server started successfuly at the port ${PORT}`)
})