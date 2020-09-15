const getWidgets = require("../test");
const fs = require("fs");
const batMobile = require.resolve("../flutter-batch-mobile.bat");
const batWeb = require.resolve("../flutter-batch-web.bat");
const { pCloudy } = require("../pcloudy");
const { exec, execSync } = require("child_process");

let homeTemplate = req =>
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
        let data = await getWidgets(301, {}, 0);
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
        "\nvoid main() => runApp(Page4());\nclass Page4 extends StatelessWidget {\n@override\nWidget build(BuildContext context) {\nreturn MaterialApp(\nhome: BoilerPlate());\n}}\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate>{\n @override\n  Widget build(BuildContext context) { \n";
      const data4 =
        "\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\n" +
        appbarCall +
        "\n" +
        drawerCall +
        "\nbackgroundColor: Colors.white,\nbody: Padding(\npadding: const EdgeInsets.all(0.0),\nchild: Padding(\npadding: const EdgeInsets.all(0.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\nPadding(\npadding: const EdgeInsets.all(0.0),\nchild: Row(children: [";

      let topImage = "Container()";
      let middleHeading = "Container()";
      let middleCard = "Container()";
      let bottomHeading = "Container()";
      let gridCard1 = "Container()";
      let gridCard2 = "Container()";
      let gridCard3 = "Container()";
      let gridCard4 = "Container()";

      let dataMap = new Promise(async (resolve, reject) => {
        for (let i = 0; i < widgetsObject.length; i++) {
          if (widgetsObject[i].location == "topImage") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            topImage = data.call;
          }
          if (widgetsObject[i].location == "middleHeading") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            middleHeading = data.call;
          }
          if (widgetsObject[i].location == "middleCard") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            middleCard = data.call;
          }
          if (widgetsObject[i].location == "bottomHeading") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            bottomHeading = data.call;
          }
          if (widgetsObject[i].location == "gridCard1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            gridCard1 = data.call;
          }
          if (widgetsObject[i].location == "gridCard2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            gridCard2 = data.call;
          }
          if (widgetsObject[i].location == "gridCard3") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            gridCard3 = data.call;
          }
          if (widgetsObject[i].location == "gridCard4") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            gridCard4 = data.call;
          }
        }
        resolve("Data added to arrays");
      });

      try {
        dataMap.then(() => {
          let data6 = "\nExpanded(flex: 1,child:" + topImage + "),"; //Widget1 call
          let data7 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(30.0),\nchild: Row(children: [";
          let data8 = "\nExpanded(flex: 1,child:" + middleHeading + "),"; //Widget3 call
          let data9 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(left:30,right:30,bottom:30),\nchild: Row(children: [";
          let data10 = "\nExpanded(flex: 1,child:" + middleCard + "),";
          let data11 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(left:30,right:30,bottom:30),\nchild: Row(children: ["; //Widget6 call
          let data12 = "\nExpanded(flex: 1,child:" + bottomHeading + "),";
          let data13 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(left:30,right:30,bottom:30),\nchild: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [";
          let data14 = "\nExpanded(flex: 1,child:" + gridCard1 + "),\nSizedBox(width:30),"; //Widget1 call
          let data15 = "\nExpanded(flex: 1,child:" + gridCard2 + "),"; //Widget1 call
          let data16 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(left:30,right:30,bottom:30),\nchild: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [";
          let data17 = "\nExpanded(flex: 1,child:" + gridCard3 + "),\nSizedBox(width:30),"; //Widget1 call
          let data18 = "\nExpanded(flex: 1,child:" + gridCard4 + "),"; //Widget1 call
          let data19 = "\n ],),\n),\n], \n)  \n))))); \n} \n}";

          let clearFile = () =>
            new Promise(async (resolve, reject) => {
              await fs.truncate(
                "./flutter/api_demo/lib/page4.dart",
                0,
                function() {
                  resolve("File cleared");
                }
              );
            });

          clearFile().then(() => {
            fs.appendFileSync(
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
              "./flutter/api_demo/lib/page4.dart",
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
                "./flutter/api_demo/lib/page4.dart",
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
                "./flutter/api_demo/lib/page4.dart",
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
                "./flutter/api_demo/lib/page4.dart",
                data19,
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

module.exports = {
  homeTemplate
};
