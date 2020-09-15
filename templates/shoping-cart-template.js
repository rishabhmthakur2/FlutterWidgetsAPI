const getWidgets = require("../test");
const fs = require("fs");
const batMobile = require.resolve("../flutter-batch-mobile.bat");
const batWeb = require.resolve("../flutter-batch-web.bat");
const { exec } = require("child_process");
const { pCloudy } = require("../pcloudy");

let shoppingCartTemplate = req =>
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
        let data = await getWidgets(300, {}, 0);
        data1.push(data.imports);
        data3.push(data.definitions);
        appbarCall = data.call;
      } else {
        let data = await getWidgets(0, req.body.appbarParams, 0);
        data1.push(data.imports);
        data3.push(data.definitions);
        appbarCall = data.call;
      }
      if (!req.body.bottomNavBar) {
        let btmnavdata = await getWidgets(101, {}, 0);
        data1.push(btmnavdata.imports);
        data3.push(btmnavdata.definitions);
        bottomNavBarCall = btmnavdata.call;
      } else {
        let btmnavdata = await getWidgets(1, req.body.bottomNavParams, 0);
        data1.push(btmnavdata.imports);
        data3.push(btmnavdata.definitions);
        bottomNavBarCall = btmnavdata.call;
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
      // let data = await getWidgets(id, paramsValue);
      const data0 =
        "import 'package:flutter/material.dart';\nimport 'package:rapid_widgets_library/widget-classesUsed.dart';\n";
      const data2 =
        "\nvoid main() => runApp(Page3());\nclass Page3 extends StatelessWidget {\n@override\nWidget build(BuildContext context) {\nreturn MaterialApp(\nhome: BoilerPlate());\n}}\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate> {\n @override\n  Widget build(BuildContext context) { \n";
      const data4 =
        "\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\n" +
        appbarCall +
        "\n" +
        drawerCall +
        "\n" +
        bottomNavBarCall +
        "\nbackgroundColor: Colors.white,\nbody: Padding(\npadding: const EdgeInsets.all(0.0),\nchild: Padding(\npadding: const EdgeInsets.all(0.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\nPadding(\npadding: const EdgeInsets.only(left:30.0,right:30),\nchild: Row(children: [";
      //const data6 = '\n ],),)),),),);}}  '

    
      let card1 = "Container()";
      let card2 = "Container()";
      let card3 = "Container()";
      let card4 = "Container()";
      let card5 = "Container()";
      let card6 = "Container()";
      let card7 = "Container()";

      let dataMap = new Promise(async (resolve, reject) => {
        for (let i = 0; i < widgetsObject.length; i++) {
         
          if (widgetsObject[i].location == "card1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card1 = data.call;
          }
          if (widgetsObject[i].location == "card2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card2 = data.call;
          }
          if (widgetsObject[i].location == "card3") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card3 = data.call;
          }
          if (widgetsObject[i].location == "card4") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card4 = data.call;
          }
          if (widgetsObject[i].location == "card5") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card5 = data.call;
          }
          if (widgetsObject[i].location == "card6") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card6 = data.call;
          }
          if (widgetsObject[i].location == "card7") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            card7 = data.call;
          }
        }
        resolve("Data added to arrays");
      });

      try {
        dataMap.then(() => {
      
          let data7 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0,top:30),\nchild: Row(children: [";
          let data8 = "\nExpanded(flex: 1,child:" + card1 + "),";
          let data9 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0),\nchild: Row(children: ["; //Widget2 call
          let data10 = "\nExpanded(flex: 1,child:" + card2 + "),";
          let data11 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0),\nchild: Row(children: ["; //Widget2 call
          let data12 = "\nExpanded(flex: 1,child:" + card3 + "),";
          let data13 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0),\nchild: Row(children: ["; //Widget2 call
          let data14 = "\nExpanded(flex: 1,child:" + card4 + "),";
          let data15 = "\nExpanded(flex: 1,child:" + card5 + "),";
          let data16 = "\nExpanded(flex: 1,child:" + card6 + "),";
          let data17 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(0.0),\nchild: Row(children: ["; //Widget2 call
          let data18 = "\nExpanded(flex: 1,child:" + card7 + "),";
          let data19 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data20 = "\n ],),\n),\n], \n)  \n))))); \n} \n}";

          let clearFile = () =>
            new Promise(async (resolve, reject) => {
              await fs.truncate(
                "./flutter/api_demo/lib/page6.dart",
                0,
                function() {
                  resolve("File cleared");
                }
              );
            });

          clearFile().then(() => {
            fs.appendFileSync(
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
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
              "./flutter/api_demo/lib/page6.dart",
              data12,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page6.dart",
              data13,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page6.dart",
              data14,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
                "./flutter/api_demo/lib/page6.dart",
                data15,
                "utf8",
                // callback function
                function(err) {
                  if (err) throw err;
                  // if no error
                  console.log("Data is appended to file successfully.");
                }
              );
              fs.appendFileSync(
                "./flutter/api_demo/lib/page6.dart",
                data16,
                "utf8",
                // callback function
                function(err) {
                  if (err) throw err;
                  // if no error
                  console.log("Data is appended to file successfully.");
                }
              );
              fs.appendFileSync(
                "./flutter/api_demo/lib/page6.dart",
                data17,
                "utf8",
                // callback function
                function(err) {
                  if (err) throw err;
                  // if no error
                  console.log("Data is appended to file successfully.");
                }
              );
              fs.appendFileSync(
                "./flutter/api_demo/lib/page6.dart",
                data18,
                "utf8",
                // callback function
                function(err) {
                  if (err) throw err;
                  // if no error
                  console.log("Data is appended to file successfully.");
                }
              );
              fs.appendFileSync(
                "./flutter/api_demo/lib/page6.dart",
                data19,
                "utf8",
                // callback function
                function(err) {
                  if (err) throw err;
                  // if no error
                  console.log("Data is appended to file successfully.");
                }
              );
              fs.appendFileSync(
                "./flutter/api_demo/lib/page6.dart",
                data20,
                "utf8",
                // callback function
                function(err) {
                  if (err) throw err;
                  // if no error
                  console.log("Data is appended to file successfully.");
                }
              );
          });
        });
      } catch (error) {
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });

module.exports = { shoppingCartTemplate };
