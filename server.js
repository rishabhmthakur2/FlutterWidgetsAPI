var express = require('express');
var cors = require('cors');
const axios = require('axios').default;
const widgets = require('./parameters.json');
const getWidgets = require('./test');
const fs = require('fs');

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
    console.log("Hello");
    let widgetName = req.body.widgetName;
    let paramsValue = req.body.params;
   let data = await getWidgets(widgetName, paramsValue);
   // fs.truncate('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart', 0, function () { console.log('done') });
    const data0 = "import 'package:flutter/material.dart';\n";
    const data2 = "\nvoid main() => runApp(BoilerPlate());\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate> {\n @override\n  Widget build(BuildContext context) { \n";
    const data4 = "\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\nbody: Padding(\npadding: const EdgeInsets.all(20.0),\nchild: Padding(\npadding: const EdgeInsets.all(25.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\n";
    const data6 = "\n ],),)),),),);}}  ";
    let data1 = data.imports;
    let data3 = data.definitions;
    let data5 = data.call;
    
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data0, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data1, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data2, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data3, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data4, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data5, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
fs.appendFileSync('D:\\Cms\\NewAPI\\FlutterWidgetsAPI\\flutter\\api_demo\\lib\\main.dart',data6, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});

})

app.listen(port, ()=>{
    console.log('Listening on port:' + port);
});