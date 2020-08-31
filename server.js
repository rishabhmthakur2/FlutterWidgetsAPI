var express = require('express');
var cors = require('cors');
const axios = require('axios').default;
const widgets = require('./parameters.json');
const getWidgets = require('./test');
const fs = require('fs');
const batMobile = require.resolve('./flutter-batch-mobile.bat');
const batWeb = require.resolve('./flutter-batch-web.bat');
const { exec } = require('child_process');

var app = express();
app.use(cors());
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('', (req, res) => {
  res.send('Welcome');
});

let outputPlatform;

/* app.get('/getWidgetDropdown', (req, res) => {
  axios
    .get('http://104.40.75.137:9003/assets/data/data.json')
    .then((response) => {
      var widgetNames = []
      for (let i = 0; i < response.data.length; i++) {
        for (let j = 0; j < response.data[i].widgetsContent.length; j++) {
          widgetNames.push({
            id: response.data[i].widgetsContent[j].id,
            name: response.data[i].widgetsContent[j].widgetsName,
          })
        }
      }
      res.send(widgetNames)
    })
})
 */


app.get('/getWidgetDropdown', async (req, res) => {
  let widgetsAll = widgets.widgets
  var nameWidgets = []
  try{
    for(let i=0; i< widgetsAll.length; i++){
      nameWidgets.push({
        id: widgetsAll[i].id,
        name: widgetsAll[i].name
      })
    }
    res.send(nameWidgets)
  }catch{
    res.status(404).send('Not Found')
  }
})


app.get('/getWidgetParamaters?:id', async (req, res) => {
  let id = req.query.id
  let widgetArray = widgets.widgets
  try {
    const result = await widgetArray.find((widget) => widget.id == id);
    res.status(200).json(result.paramaters);
  } catch (error) {
    res.status(404).send('Not Found')
  }
})

app.post('/submitWidgetParams', async (req, res) => {
  outputPlatform = req.body.outputPlatform;
  let idArray = req.body.id;
  let paramsValueArray = req.body.params;
  try {
    // let data = await getWidgets(id, paramsValue);
    const data0 = "import 'package:flutter/material.dart';\n"
    const data2 =
      '\nvoid main() => runApp(BoilerPlate());\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate> {\n @override\n  Widget build(BuildContext context) { \n'
    const data4 =
      '\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\nbody: Padding(\npadding: const EdgeInsets.all(20.0),\nchild: Padding(\npadding: const EdgeInsets.all(25.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\n'
    const data6 = '\n ],),)),),),);}}  '
    let data1 = []
    let data3 = []
    let data5 = []
    // let data1 = data.imports
    // let data3 = data.definitions
    // let data5 = data.call
    let dataMap = new Promise(async (resolve, reject) => {
      for (let i = 0; i < idArray.length; i++) {
        let data = await getWidgets(idArray[i], paramsValueArray[i])
        data1.push(data.imports)
        data3.push(data.definitions)
        data5.push(data.call)
      }
      resolve('Data added to arrays')
      console.log(data5[1]);
    })

    try {
      dataMap.then(() => {
        let clearFile = () =>
          new Promise(async (resolve, reject) => {
            await fs.truncate(
              './flutter/api_demo/lib/main.dart',
              0,
              function () {
                resolve('File cleared')
              },
            )
          });

        clearFile().then(() => {
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data0,
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data1.join("\n"),
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data2,
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data3.join("\n"),
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data4,
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data5.join("\nSizedBox(height:20),\n"),
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          fs.appendFileSync(
            './flutter/api_demo/lib/main.dart',
            data6,
            'utf8',
            // callback function
            function (err) {
              if (err) throw err
              // if no error
              console.log('Data is appended to file successfully.')
            },
          );
          if (outputPlatform == 0){
            exec(batMobile, (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    return err;
                }
                console.log(stdout, "{BATCH OUTPUT}");
                return stdout;
            });
        }
        else{
            exec(batWeb, (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    return err;
                }
                console.log(stdout, "{BATCH OUTPUT}");
                return stdout;
            });
        }
          res.status(200).send('Execution Started');
        });
      });
    } catch (error) {
      res.status(400).send('Not Found Internal')
    }
  } catch (error) {
    res.status(400).send('Not Found External')
  }
})

app.listen(port, () => {
  console.log('Listening on port:' + port)
})
