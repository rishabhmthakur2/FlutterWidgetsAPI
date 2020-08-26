var express = require('express');
var cors = require('cors');
const axios = require('axios').default;

var app = express();
app.use(cors());
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('',(req,res)=>{
    res.send('Welcome');
});

app.get('/getWidgetDropdown',(req,res)=>{
    axios.get('http://104.40.75.137:9003/assets/data/data.json').then((response)=>{
        console.log(response.data.length);
        console.log(response.data[0].widgetsContent[0].WidgetCode[0].CodeSnippet);
        var widgetNames = [];
        var definitions = [];
        for (let i =0; i < response.data.length; i++){
            for (let j = 0; j < response.data[i].widgetsContent.length; j++){
                widgetNames.push({'id': response.data[i].widgetsContent[j].id,
                'name':response.data[i].widgetsContent[j].widgetsName,
            'imports':response.data[i].widgetsContent[j].WidgetCode[0].CodeSnippet,
            'call':response.data[i].widgetsContent[j].WidgetCode[2].CodeSnippet,
            'definitions':response.data[i].widgetsContent[j].WidgetCode[1].CodeSnippet.split(/\r?\n/) 
        });
            }
        }
        res.send(widgetNames);
    });
});

app.listen(port, ()=>{
    console.log('Listening on port:' + port);
});