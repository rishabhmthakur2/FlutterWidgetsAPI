var express = require('express');
var cors = require('cors');
const axios = require('axios').default;
const widgets = require('./parameters.json');
const { plainColumnTemplate } = require('./templates/plainColumn');
const { template_2_1_1 } = require('./templates/template_2-1-1');
const { template_2x3 } = require('./templates/template_2x3');
const { loginTemplate } = require('./templates/login-template');
const { welcomeTemplate } = require('./templates/welcome-template');
const { homeTemplate } = require('./templates/home-template');
const { getStartedTemplate } = require('./templates/get-started');
const { featuredTemplate } = require('./templates/featured-template');
const { deatailsTemplate } = require('./templates/deatails-template');
const { shoppingCartTemplate } = require('./templates/shoping-cart-template');
const { paymentTemplate } = require('./templates/payment-template');
const { alertTemplate } = require('./templates/alert-page');

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

app.get('/getWidgetDropdown', async (req, res) => {
  let widgetsAll = widgets.widgets
  var nameWidgets = []
  try{
    for(let i=0; i< widgetsAll.length; i++){
      if(widgetsAll[i].id > 3){
        nameWidgets.push({
          id: widgetsAll[i].id,
          name: widgetsAll[i].name
        })
      }
    }
    res.send(nameWidgets)
  }catch{
    res.status(404).send('Not Found')
  }
});

app.get('/getWidgetParamaters?:id', async (req, res) => {
  let id = req.query.id
  let widgetArray = widgets.widgets
  try {
    const result = await widgetArray.find((widget) => widget.id == id);
    res.status(200).json(result.definitions);
  } catch (error) {
    res.status(404).send('Not Found')
  }
})

app.post('/submitWidgetParams', async (req, res) => {
  req.setTimeout(0);
  let templateHandler = req.body.templateUsed;
  let execute;
  if (templateHandler == 0) {
    execute = plainColumnTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
 else if (templateHandler == 1) {
    execute = template_2_1_1(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 2) {
    execute = template_2x3(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 3) {
    execute = welcomeTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 4) {
    execute = loginTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 5) {
    execute = homeTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 6) {
    execute = getStartedTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 7) {
    execute = featuredTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 8) {
    execute = deatailsTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 9) {
    execute = shoppingCartTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 10) {
    execute = paymentTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  else if (templateHandler == 11) {
    execute = alertTemplate(req);
    try {
      execute.then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

var server = app.listen(port, () => {
  console.log('Listening on port:' + port)
});