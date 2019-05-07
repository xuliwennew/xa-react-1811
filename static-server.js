const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(__dirname))

//restful nodejs
app.use("/api/carts",(req,res)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:8082');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    res.json(require("./mocks/ShopCartsInfo"))
})

app.use("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"react-carts/dist/index.html"))
})


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})
