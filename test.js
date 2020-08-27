let getWidgets = (widgetId, paramValues) =>
  new Promise((resolve, reject) => {
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
                  }
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
      {
        id: 15,
        name: 'Textfield',
        imports:
          "import 'dart:ui'; \nimport 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-textField.dart';",
        call:
          'CustomTextField(params: finalTextObj, callbackTextfield: onTextSubmit),',
        definitions: `
            onTextSubmit(String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj = new TextFieldParameters( 
            maxLength: ${paramValues.maxLength}, 
            obsecureText: ${paramValues.obsecureText},
            maxLengthEnforced: ${paramValues.maxLengthEnforced}, 
            decoration: InputDecoration(
            hintText: ${paramValues.hintText},
            labelText: ${paramValues.labelText}, 
            prefixIcon: Icon(Icons.${paramValues.prefixIcon}),
            filled: ${paramValues.filled}, 
            fillColor: Colors.${paramValues.fillColor}, 
            counterText: "", 
            border: OutlineInputBorder( 
            borderRadius: BorderRadius.circular(${paramValues.borderRadius}), 
            borderSide: BorderSide( color: Colors.${paramValues.borderColor})), 
            ), 
            cursorColor: Colors.${paramValues.cursorColor}, 
            cursorWidth: ${paramValues.cursorWidth}, 
            expands: ${paramValues.expands}, 
            maxLines: ${paramValues.maxLines}, 
            readOnly: ${paramValues.readOnly}, 
            showCursor: ${paramValues.showCursor}, 
            style: TextStyle(color: Colors.${paramValues.textColor}),
            );
        `,
      },
      {
        id: 8,
        name: 'DropdownButton',
        imports:
          "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-dropdownButton.dart';",
        call: 'CustomDropdownButton(dropdownObject,onSelect),',
        definitions: `
              DropDownParameters dropdownObject = DropDownParameters(
              itemsList: ${paramValues.itemsList},
              hintText: ${paramValues.hintText},
              listType: ${paramValues.listType},
              fillColor: Colors.${paramValues.fillColor},
              borderRadius: ${paramValues.borderRadius},
              width: ${paramValues.width},
              textColor: Colors.${paramValues.textColor},
              itemsBgColor: Colors.${paramValues.itemsBgColor},
              shadowColor: Colors.${paramValues.shadowColor},
              shadowBlurRadius: ${paramValues.shadowBlurRadius},
              shadowSpreadRadius: ${paramValues.itemsBgColor},
              ); 
              onSelect(int i,String s){ 
              print(i); 
              print(s); 
              }
          `,
      },
      {
        id: 21,
        name: 'CompositeCard',
        imports:
          "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-compositeCard.dart';",
        call: 'compositeCard(listcards),',
        definitions: `
            List<CustomcompositeCardParameters> listcards = []; 
            CustomcompositeCardParameters card1 = new CustomcompositeCardParameters(
            flexColumn1: ${paramValues.flexColumn1},
            flexColumn2: ${paramValues.flexColumn2},
            cardColor: ${paramValues.cardColor},
            rightHandWidgets: ${paramValues.rightHandWidgets},
            leftHandWidgets: ${paramValues.leftHandWidgets},
            ); 
            listcards.add(card1);
        `,
      },
      {
        id: 22,
        name: 'Flip Card',
        imports:
          "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-flipcard.dart';",
        call: 'customFlipCardWidget(FlipObj1, onclickFlipCardBtn),',
        definitions: `
          onclickFlipCardBtn(int nIndex, String sText) {
          print(nIndex);
          print(sText);
          } 
          MaterialCardData FlipObj1 = new MaterialCardData( 
          title: ${paramValues.title}, 
          subtitle: ${paramValues.leftHandWidgets},
          containerHeight: ${paramValues.containerHeight},
          containerWidth: ${paramValues.containerWidth},
          containerDecoration: BoxDecoration( 
          boxShadow: 
          [ BoxShadow( 
          color: Colors.${paramValues.shadowColor}, blurRadius: ${paramValues.blurRadius}, 
          offset: ${paramValues.shadowOffset}),
          ], 
          borderRadius: BorderRadius.circular(${paramValues.borderRadius}), 
          color: Colors.${paramValues.backgroundColor}, ), 
          textStyle1: TextStyle( 
          color: Colors.${paramValues.textColor1}, 
          fontSize:${paramValues.fontSize1}, 
          fontWeight: FontWeight.bold, 
          ), 
          textStyle2: TextStyle( 
          color: Colors.${paramValues.textColor2}, 
          fontSize: ${paramValues.fontSize2}, 
          ), 
          textStyle3: TextStyle( 
          color: Colors.${paramValues.textColor3},
          fontSize: ${paramValues.fontSize3}, 
          ), 
          btnText:${paramValues.btnText}, 
          btnTextColor: Colors.${paramValues.btnTextColor}, 
          btnColor: Colors.${paramValues.btnColor}, 
          margin1: ${paramValues.margin1}, 
          padding1: ${paramValues.padding1},
          imgHeight: ${paramValues.imgHeight},
          imgWidth: ${paramValues.imgWidth},
          imgType: \"Network\",
          imgPath: ${paramValues.imgPath},
          );
      `,
      },
      {
        id: 0,
        name: "Appbar",
        imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart';\n import 'package:rapid_widgets_library/custom-appBar.dart';",
        call: "appBar:customAppBar(appBarIcons,paramobject),",
        definitions: `
            AppBarParameters paramobject = new AppBarParameters(
            elevation: ${paramValues.elevation}, 
            bottomOpacity: ${paramValues.bottomOpacity},
            toolbarOpacity: ${paramValues.toolbarOpacity},
            titleSpacing: ${paramValues.titleSpacing},
            centerTitle: ${paramValues.centerTitle},
            automaticallyImplyLeading: ${paramValues.automaticallyImplyLeading},
            title: Text(${paramValues.title}));
            List<Widget> appBarIcons = [ 
            IconButton( 
            icon:  
            Icon(Icons.${paramValues.icon1}), 
            onPressed: () {}, 
            ), 
            IconButton( ",
            icon:  Icon(Icons.${paramValues.icon2}), ",
            onPressed: () {}, ",
            ), 
            IconButton( 
            icon:  Icon(Icons.${paramValues.icon3}), 
            onPressed: () {}, 
            ), ];
        `
    },
    {
      id: 1,
      name: "Bottom Navigation Bar",
      imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-bottomnavbar.dart';",
      call: "bottomNavigationBar: BottomNavBar(param),",
      definitions: `
          List<BottomNavigationBarItem> bottomnavitems = []; 
          BottomNavigationBarItem bottomnavitem1= new BottomNavigationBarItem( 
          icon: Icon(Icons.${paramValues.icon1}),
          title: Text(${paramValues.title1},style: TextStyle(fontSize: 12)),
          ); 
          BottomNavigationBarItem bottomnavitem2= new BottomNavigationBarItem( 
          icon: Icon(Icons.${paramValues.icon2}),
          title: Text(${paramValues.title2},style: TextStyle(fontSize: 12)),
          ); 
          BottomNavigationBarItem bottomnavitem3= new BottomNavigationBarItem( 
          icon: Icon(Icons.${paramValues.icon3}),
          title: Text(${paramValues.title3},style: TextStyle(fontSize: 12),),
          ); 
          bottomnavitems.add(bottomnavitem1); 
          bottomnavitems.add(bottomnavitem2); 
          bottomnavitems.add(bottomnavitem3); 
          BottomNavBarParameters param = new BottomNavBarParameters(
          items: bottomnavitems, 
          selectedItemColor: Colors.${paramValues.selectedItemColor}, 
          backgroundColor: Colors.${paramValues.backgroundColor}, 
          unselectedItemColor: Colors.${paramValues.unselectedItemColor}, 
          showUnselectedLabels: ${paramValues.showUnselectedLabels}, 
          showSelectedLabels: ${paramValues.showSelectedLabels}, 
          selectedIconTheme: IconThemeData(color: Colors.${paramValues.selectedIconTheme}));
      `
  },
    ]
    for (i of widgetList) {
      if (i.id == widgetId) {
        resolve({
          imports: i.imports,
          call: i.call,
          definitions: i.definitions,
        });
      }
    }
    reject('Widget by that name not found');
  });

module.exports = getWidgets;
