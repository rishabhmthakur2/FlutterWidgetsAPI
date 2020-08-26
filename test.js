let getWidgets = (widgetName, paramValues) => new Promise((resolve, reject)=>{
    let widgetList = [
        {
          id: 10,
          name: 'FloatingActionButton',
          imports:
            "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-floatingActionButton.dart';",
          call: 'customFloatingActionButton(btnFloatObject, onFloatButtonPress),',
          definitions: `
                  onFloatButtonPress(bool b){ \n
                  print(b); \n
                  } \n
                  Floatingactionbuttonparam btnFloatObject = Floatingactionbuttonparam(\n
                  child: ${paramValues.child},\n
                  foregroundColor: Colors.${paramValues.foregroundColor},\n
                  backgroundColor: Colors.${paramValues.backgroundColor},\n
                  mini: ${paramValues.mini},\n
                  shape: CircleBorder(),\n
                  hoverColor: Colors.${paramValues.hoverColor},\n
                  );
              `,
        },
      ];
      for (i of widgetList){
          if (i.name == widgetName){
            resolve({
                imports: i.imports,
                call: i.call,
                definitions: i.definitions
            });
          }
      }
});

module.exports = getWidgets
