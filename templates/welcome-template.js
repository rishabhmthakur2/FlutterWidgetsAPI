const getWidgets = require("../test");
const fs = require("fs");
const batMobile = require.resolve("../flutter-batch-mobile.bat");
const batWeb = require.resolve("../flutter-batch-web.bat");
const { pCloudy } = require("../pcloudy");
const { exec, execSync } = require("child_process");

let welcomeTemplate = req =>
  new Promise(async (resolve, reject) => {
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
        let data = await getWidgets(100, {}, 0);
        data1.push(data.imports);
        data3.push(data.definitions);
        appbarCall = data.call;
      }
      if (req.body.appbar) {
        let data = await getWidgets(0, req.body.appbarParams, 0);
        data1.push(data.imports);
        data3.push(data.definitions);
        appbarCall = data.call;
      }
      if (!req.body.drawer) {
        let drawerdata = await getWidgets(102, {}, 0);
        data1.push(drawerdata.imports);
        data3.push(drawerdata.definitions);
        drawerCall = drawerdata.call;
      }
      if (req.body.drawer) {
        let drawerdata = await getWidgets(2, req.body.drawerParams, 0);
        data1.push(drawerdata.imports);
        data3.push(drawerdata.definitions);
        drawerCall = drawerdata.call;
      }
      const data0 =
        "import 'package:flutter/material.dart';\nimport 'package:rapid_widgets_library/widget-classesUsed.dart';\n";
      const data2 =
        "\nvoid main() => runApp(BoilerPlate());\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate> {\n @override\n  Widget build(BuildContext context) { \n";
      const data4 =
        "\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\nbody: Padding(\npadding: const EdgeInsets.all(20.0),\nchild: Padding(\npadding: const EdgeInsets.all(25.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: [";

      let top = "Container()";
      let middle = "Container()";
      let bottomleft = "Container()";
      let bottomright = "Container()";

      let dataMap = new Promise(async (resolve, reject) => {
        for (let i = 0; i < widgetsObject.length; i++) {
          if (widgetsObject[i].location == "top") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            top = data.call;
          }
          if (widgetsObject[i].location == "middle") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            middle = data.call;
          }
          if (widgetsObject[i].location == "bottomleft") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            bottomleft = data.call;
          }
          if (widgetsObject[i].location == "bottomright") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            bottomright = data.call;
          }
        }
        resolve("Data added to arrays");
      });

      try {
        dataMap.then(() => {
          let data6 = "\nExpanded(flex: 1,child:" + top + "),"; //Widget1 call
          let data7 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: [";
          let data8 = "\nExpanded(flex: 1,child:" + middle + "),"; //Widget3 call
          let data9 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: [";
          let data10 = "\nExpanded(flex: 1,child:" + bottomleft + "),"; //Widget6 call
          let data11 = "\nExpanded(flex: 1,child:" + bottomright + "),";
          let data12 = "\n ],),\n),\n], \n)  \n))))); \n} \n}";
          let clearFile = () =>
            new Promise(async (resolve, reject) => {
              await fs.truncate(
                "./flutter/api_demo/lib/main.dart",
                0,
                function() {
                  resolve("File cleared");
                }
              );
            });

          clearFile().then(() => {
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data0,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data1.join("\n"),
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data2,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data3.join("\n"),
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data4,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data6,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data7,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data8,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data9,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data10,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data11,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/main.dart",
              data12,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            //   if (outputPlatform == 0) {
            //     try {
            //       exec(batMobile, (err, stdout, stderr) => {
            //         if (err) {
            //           console.error(err);
            //           return;
            //         }
            //         console.log(stdout);
            //         let test = pCloudy();
            //         test.then((data) => {
            //           let submitResponse = {
            //             "status": 200,
            //             "url": data,
            //             "message": "File execution successfull"
            //           }
            //           resolve(submitResponse);
            //         })
            //       });
            //     } catch (error) {
            //       return error;
            //     }
            //   } else {
            //     console.log('Executing Bat File');
            //     try {
            //       exec(batWeb, (err, stdout, stderr) => {
            //         if (err) {
            //           console.error(err);
            //           return stderr;
            //         }
            //         else {
            //           resolve('App exec started');
            //           console.log(stdout, `${stdout}`);
            //           return stdout;
            //         }
            //       });
            //     } catch (error) {
            //       return error;
            //     }
            //   }
          });
        });
      } catch (error) {
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  welcomeTemplate
};
