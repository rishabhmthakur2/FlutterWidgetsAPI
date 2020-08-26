var express = require('express');
var cors = require('cors');
const axios = require('axios').default;
const widgets = require('./parameters.json');
const getWidgets = require('./test');

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
        var widgetNames = [];
        var definitions = [];
        for (let i =0; i < response.data.length; i++){
            for (let j = 0; j < response.data[i].widgetsContent.length; j++){
                widgetNames.push({'id': response.data[i].widgetsContent[j].id,
                'name':response.data[i].widgetsContent[j].widgetsName
        });
            }
        }
        res.send(widgetNames);
    });
});

app.get('/getWidgetParamaters?:widgetName', async (req, res)=>{
    let widgetName = req.query.widgetName;
    let widgetParams;
    let widgetArray = widgets.widgets;
    try{
        const result = await widgetArray.find(widget => widget.name == widgetName);
        res.status(200).json(result.paramaters);
    }
    catch (error){
        res.status(400).send(error);
    }
})

app.post('/submitWidgetParams', async(req, res)=>{
    let widgetName = req.body.widgetName;
    let paramsValue = req.body.params;
    getWidgets(widgetName, paramsValue).then((data)=>{
        res.send(data);
    });
})

app.listen(port, ()=>{
    console.log('Listening on port:' + port);
});