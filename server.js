const express = require ("express")
const bodyParser = require ("body-parser")
const ejs = require ("ejs")
const router = require ("./router/router")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.use("/",router)

app.listen(3000,()=>{
    console.log("Server listen at 3000 ")
})