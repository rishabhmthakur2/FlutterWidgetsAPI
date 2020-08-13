var express = require('express');
const axios = require('axios').default;

var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/getWidgetDropdown',(req,res)=>{
    axios.get('http://104.40.75.137:9003/assets/data/data.json').then((response)=>{
        console.log(response.data.length);
        var widgetNames = [];
        for (let i =0; i < response.data.length; i++){
            for (let j = 0; j < response.data[i].widgetsContent.length; j++){
                widgetNames.push({'id': response.data[i].widgetsContent[j].id,
                'name':response.data[i].widgetsContent[j].widgetsName});
            }
        }
        res.send(widgetNames);
    });
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});