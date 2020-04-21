
let express = require('express')

let app = express()

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/list',async(req,res)=>{
    let list = ['weqweqwe','jujtyuty','zcfdfq']
    res.send(list)
})



app.listen(4000,()=>{
    console.log('ok')
})
