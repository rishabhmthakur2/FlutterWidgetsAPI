let getWidgets = (widgetName, paramValues) => new Promise((resolve, reject)=>{
    let widgetList = [
        {
          id: 10,
          name: 'FloatingActionButton',
          imports:
            "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-floatingActionButton.dart';",
          call: 'customFloatingActionButton(btnFloatObject, onFloatButtonPress),',
          definitions: `
                  onFloatButtonPress(bool b){
                  print(b);
                  } \n
                  Floatingactionbuttonparam btnFloatObject = Floatingactionbuttonparam(
                  child: ${paramValues.child},
                  foregroundColor: Colors.${paramValues.foregroundColor},
                  backgroundColor: Colors.${paramValues.backgroundColor},
                  mini: ${paramValues.mini},
                  shape: CircleBorder(),
                  hoverColor: Colors.${paramValues.hoverColor},
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
      reject('Widget by that name not found')
});

module.exports = getWidgets
