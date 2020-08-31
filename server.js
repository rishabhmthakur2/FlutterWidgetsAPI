var express = require('express');
var cors = require('cors');
const axios = require('axios').default;
const widgets = require('./parameters.json');
const { plainColumnTemplate } = require('./templates/plainColumn');

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
  let outputPlatform = req.body.outputPlatform;
  let templateHandler = req.body.templateUsed;
  let widgetsObject = req.body.widgets;
  let execute;
  if (templateHandler == 0) {
    execute = plainColumnTemplate(outputPlatform, widgetsObject);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

app.listen(port, () => {
  console.log('Listening on port:' + port)
})
