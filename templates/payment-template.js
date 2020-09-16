const getWidgets = require("../test");
const fs = require("fs");
const batMobile = require.resolve("../flutter-batch-mobile.bat");
const batWeb = require.resolve("../flutter-batch-web.bat");
const { exec } = require("child_process");
const { pCloudy } = require("../pcloudy");

let paymentTemplate = req =>
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
      } else {
        let data = await getWidgets(303, req.body.appbarParams, 0);
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
        "\nvoid main() => runApp(Page7());\nclass Page7 extends StatelessWidget {\n@override\nWidget build(BuildContext context) {\nreturn MaterialApp(\nhome: BoilerPlate());\n}}\nclass BoilerPlate extends StatefulWidget \n{ \n@override \n_BoilerPlate createState() => _BoilerPlate();\n}\nclass _BoilerPlate extends State<BoilerPlate> {\n @override\n  Widget build(BuildContext context) { \n";
      const data4 =
        "\nreturn MaterialApp(\ndebugShowCheckedModeBanner: false,\nhome: Scaffold(\n" +
        appbarCall +
        "\n" +
        drawerCall +
        "\n" +
        bottomNavBarCall +
        "\nbackgroundColor: Colors.white,\nbody: Padding(\npadding: const EdgeInsets.all(0.0),\nchild: Padding(\npadding: const EdgeInsets.all(0.0),\nchild: SingleChildScrollView(\nchild: Column(\nchildren: <Widget>[\nPadding(\npadding: const EdgeInsets.only(left:30.0,right:30),\nchild: Row(children: [";
      //const data6 = '\n ],),)),),),);}}  '

      let container1_1 = "Container()";
      let container1_2 = "Container()";
      let container2 = "Container()";
      let container3 = "Container()";
      let container4_1 = "Container()";
      let container4_2 = "Container()";
      let container5_1 = "Container()";
      let container5_2 = "Container()";
      let container6_1 = "Container()";
      let container6_2 = "Container()";
      let container6_3 = "Container()";
      let container7 = "Container()";
      let container8 = "Container()";
      let container9_1 = "Container()";
      let container9_2 = "Container()";
      let container10 = "Container()";
      let container11_1 = "Container()";
      let container11_2 = "Container()";
      let container11_3 = "Container()";
      let container11_4 = "Container()";
      let container12 = "Container()";
      let container13 = "Container()";

      let dataMap = new Promise(async (resolve, reject) => {
        for (let i = 0; i < widgetsObject.length; i++) {
          if (widgetsObject[i].location == "container1_1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container1_1 = data.call;
          }
          if (widgetsObject[i].location == "container1_2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container1_2 = data.call;
          }
          if (widgetsObject[i].location == "container2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container2 = data.call;
          }
          if (widgetsObject[i].location == "container3") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container3 = data.call;
          }
          if (widgetsObject[i].location == "container4_1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container4_1 = data.call;
          }
          if (widgetsObject[i].location == "container4_2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container4_2 = data.call;
          }
          if (widgetsObject[i].location == "container5_1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container5_1 = data.call;
          }
          if (widgetsObject[i].location == "container5_2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container5_2 = data.call;
          }
          if (widgetsObject[i].location == "container6_1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container6_1 = data.call;
          }
          if (widgetsObject[i].location == "container6_2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container6_2 = data.call;
          }
          if (widgetsObject[i].location == "container6_3") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container6_3 = data.call;
          }
          if (widgetsObject[i].location == "container7") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container7 = data.call;
          }
          if (widgetsObject[i].location == "container8") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container8 = data.call;
          }
          if (widgetsObject[i].location == "container9_1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container9_1 = data.call;
          }
          if (widgetsObject[i].location == "container9_2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container9_2 = data.call;
          }
          if (widgetsObject[i].location == "container10") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container10 = data.call;
          }
          if (widgetsObject[i].location == "container11_1") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container11_1 = data.call;
          }
          if (widgetsObject[i].location == "container11_2") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container11_2 = data.call;
          }
          if (widgetsObject[i].location == "container11_3") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container11_3 = data.call;
          }
          if (widgetsObject[i].location == "container11_4") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container11_4 = data.call;
          }
          if (widgetsObject[i].location == "container12") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container12 = data.call;
          }
          if (widgetsObject[i].location == "container13") {
            let data = await getWidgets(
              widgetsObject[i].widgetId,
              widgetsObject[i].parameters,
              i
            );
            data1.push(data.imports);
            data3.push(data.definitions);
            container13 = data.call;
          }
        }
        resolve("Data added to arrays");
      });

      try {
        dataMap.then(() => {
          let data7 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0,top:30),\nchild: Row(children: [";
          let data8 = "\nExpanded(flex: 1,child:" + container1_1 + "),";
          let data9 = "\nExpanded(flex: 1,child:" + container1_2 + "),";
          let data10 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0),\nchild: Row(children: ["; //Widget2 call
          let data11 = "\nExpanded(flex: 1,child:" + container2 + "),";
          let data12 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0),\nchild: Row(children: ["; //Widget2 call
          let data13 = "\nExpanded(flex: 1,child:" + container3 + "),";
          let data14 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.only(bottom:30.0),\nchild: Row(children: ["; //Widget2 call
          let data15 = "\nExpanded(flex: 1,child:" + container4_1 + "),";
          let data16 = "\nExpanded(flex: 1,child:" + container4_2 + "),";
          let data17 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(0.0),\nchild: Row(children: ["; //Widget2 call
          let data18 = "\nExpanded(flex: 1,child:" + container5_1 + "),";
          let data19 = "\nExpanded(flex: 1,child:" + container5_2 + "),";
          let data20 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data21 = "\nExpanded(flex: 1,child:" + container6_1 + "),";
          let data22 = "\nExpanded(flex: 1,child:" + container6_2 + "),";
          let data23 = "\nExpanded(flex: 1,child:" + container6_3 + "),";
          let data24 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data25 = "\nExpanded(flex: 1,child:" + container7 + "),";
          let data26 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data27 = "\nExpanded(flex: 1,child:" + container8 + "),";
          let data28 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data29 = "\nExpanded(flex: 1,child:" + container9_1 + "),";
          let data30 = "\nExpanded(flex: 1,child:" + container9_2 + "),";
          let data31 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data32 = "\nExpanded(flex: 1,child:" + container10 + "),";
          let data33 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data34 = "\nExpanded(flex: 1,child:" + container11_1 + "),";
          let data35 = "\nExpanded(flex: 1,child:" + container11_2 + "),";
          let data36 = "\nExpanded(flex: 1,child:" + container11_3 + "),";
          let data37 = "\nExpanded(flex: 1,child:" + container11_4 + "),";
          let data38 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data39 = "\nExpanded(flex: 1,child:" + container12 + "),";
          let data40 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data41 = "\nExpanded(flex: 1,child:" + container13 + "),";
          let data42 =
            "\n],),\n),\nPadding(\npadding: const EdgeInsets.all(25.0),\nchild: Row(children: ["; //Widget2 call
          let data43 = "\n ],),\n),\n], \n)  \n))))); \n} \n}";

          let clearFile = () =>
            new Promise(async (resolve, reject) => {
              await fs.truncate(
                "./flutter/api_demo/lib/page7.dart",
                0,
                function() {
                  resolve("File cleared");
                }
              );
            });

          clearFile().then(() => {
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
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
              "./flutter/api_demo/lib/page7.dart",
              data20,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data21,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data22,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data23,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data24,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data25,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data26,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data27,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data28,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data29,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data30,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data31,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data32,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data33,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data34,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data35,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data36,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data37,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data38,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data39,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data40,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data41,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data42,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            fs.appendFileSync(
              "./flutter/api_demo/lib/page7.dart",
              data43,
              "utf8",
              // callback function
              function(err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.");
              }
            );
            if (outputPlatform == 0) {
              try {
                console.log('Execution Started');
                exec(batMobile, (err, stdout, stderr) => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  console.log(stdout);
                });
              } catch (error) {
                return error;
              }
            } 
          });
        });
      } catch (error) {
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });

module.exports = { paymentTemplate };
