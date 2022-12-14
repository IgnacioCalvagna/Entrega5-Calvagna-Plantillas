const express = require('express');
const app = express();
const port = process.env.PORT || 8080; //
const morgan = require('morgan');
const router = require('./routes')

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')


app.get("/", (req, res)=>{
    res.render("index")
})
app.use("/api",router)
app.listen(port,()=>{
    console.log(`Server lstening on port http://localhost:${port}`);
})