const getWidgets = require('../test');
const fs = require('fs');
const batMobile = require.resolve('../flutter-batch-mobile.bat');
const batWeb = require.resolve('../flutter-batch-web.bat');
const { exec } = require('child_process');

let plainColumnTemplate = (req) => new Promise(async (resolve, reject) => {
  let outputPlatform = req.body.outputPlatform;
  let widgetsObject = req.body.widgets;
  let appbarCall;
  let drawerCall;
  let bottomNavBarCall;
  let data1 = [];
  let data3 = [];
  let data5 = [];
  try {
    if (!req.body.appbar) {
      let data = await getWidgets(100, {});
      data1.push(data.imports);
      data3.push(data.definitions);
      appbarCall = data.call;
    }
    if (req.body.appbar){
      console.log(req.body.appbarParams);
      let data = await getWidgets(0, req.body.appbarParams);
      data1.push(data.imports);
      data3.push(data.definitions);
      appbarCall = data.call;
    }
    if (!req.body.drawer) {
      let drawerdata = await getWidgets(102, {});
      data1.push(drawerdata.imports);
      data3.push(drawerdata.definitions);
      drawerCall = drawerdata.call;
    }
    if (req.body.drawer) {
      let drawerdata = await getWidgets(2, req.body.appbarParams);
      data1.push(drawerdata.imports);
      data3.push(drawerdata.definitions);
      drawerCall = drawerdata.call;
    }
    // let data = await getWidgets(id, paramsValue);
    const data0 = "import 'package:flutter/material.dart';\n import 'package:rapid_widgets_library/widget-classesUsed.dart';\n"
    const data2 =
      '\nvoid main() => runApp(BoilerPlate());\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate> {\n @override\n  Widget build(BuildContext context) { \n'
    const data4 =
      '\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\n' + appbarCall +'\nbody: Padding(\npadding: const EdgeInsets.all(20.0),\nchild: Padding(\npadding: const EdgeInsets.all(25.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\n'
    const data6 = '\n ],),)),),),);}}  '



    let dataMap = new Promise(async (resolve, reject) => {
      for (let i = 0; i < widgetsObject.length; i++) {
        console.log(widgetsObject[i].widgetId);
        let data = await getWidgets(widgetsObject[i].widgetId, widgetsObject[i].parameters);
        data1.push(data.imports);
        data3.push(data.definitions);
        data5.push(data.call);
      }
      resolve('Data added to arrays');
    });

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
          if (outputPlatform == 0) {
            exec(batMobile, (err, stdout, stderr) => {
              if (err) {
                console.error(err);
                return err;
              }
              console.log(stdout, "{BATCH OUTPUT}");
              return stdout;
            });
          }
          else {
            exec(batWeb, (err, stdout, stderr) => {
              if (err) {
                console.error(err);
                return err;
              }
              console.log(stdout, "{BATCH OUTPUT}");
              return stdout;
            });
          }
          resolve('Execution Started');
        });
      });
    } catch (error) {
      reject(error);
    }
  } catch (error) {
    reject(error);
  }
});

module.exports = { plainColumnTemplate };