const express = require('express');
const port = 5421;
const app = express();
app.use(express.json());

//-----------------------------------------------------------

app.listen(port,()=>{
    console.log(`now listening on port${port}`);
})

//------------------------------------------------
app.get("/",(req, res) => {

    res.sendFile("./view/spa_main.html" , {root:__dirname});
});