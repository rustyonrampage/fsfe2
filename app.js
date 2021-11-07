const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res)=>res.send("Hello all"));
app.get("/funny", (req, res)=>res.status( 418 ,"Hello all")).set('x-funny','Hahahaha');

app.listen(port, ()=>console.log(`App runnin on port ${port}`))
