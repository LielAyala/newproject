const express = require('express');
const port = 5421;
const app = express();
app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//-----------------------------------------------------------
let AllData=[];


app.get("/",(req, res) => {

    res.sendFile("./view/spa_main.html" , {root:__dirname});
});


app.get("/List",(req, res) => {
    //res.send(AllData).json();
    res.send(AllData);

});

app.post("/Add",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.pobox = req.body.pob;
    AllData.push(line);
    console.log(req.body);
    res.send("Ready to Add EndPoint");
});


app.post("/Add2" ,(req, res)=>{
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.pobox = req.body.pob;
    AllData.push(line);
    line={};//יוצר הקצאה חדשה וכך יאפשר לפרטים הבאים להיכנס ולא ידרסו את הקודמים
    line.name = req.body.name2;ף
    line.phone = req.body.phone2;
    line.pobox = req.body.pob;
    AllData.push(line);
    res.send("Ready to Add EndPoint");
});

//-----------------------------------------------------------

app.listen(port,()=>{
    console.log(`now listening on port${port}`);
})

//-----------------------------------------------------------
