const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(__dirname))

//restful nodejs
app.use("/api/carts",(req,res)=>{
    res.json(require("./carts/data/ShopCartsInfo"))
})

app.use("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"))
})


app.listen(3001,()=>{
    console.log("server is ready on port 3001")
})
