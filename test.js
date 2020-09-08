let getWidgets = (widgetId, paramValues, counter) =>
  new Promise((resolve, reject) => {
    // console.log(paramValues);
    let widgetList = [{
        id: 10,
        name: "FloatingActionButton",
        imports: "import 'package:rapid_widgets_library/custom-floatingActionButton.dart';",
        call: `customFloatingActionButton(btnFloatObject${counter}, onFloatButtonPress${counter}),`,
        definitions: `
                  onFloatButtonPress${counter} (bool b){
                  print(b);
                  }
                  Floatingactionbuttonparam btnFloatObject${counter} = Floatingactionbuttonparam(
                  child: Icon(Icons.${paramValues.icon}),
                  foregroundColor: Colors.${paramValues.foregroundColor},
                  backgroundColor: Colors.${paramValues.backgroundColor},
                  mini: ${paramValues.mini},
                  shape: CircleBorder(),
                  hoverColor: Colors.${paramValues.hoverColor},
                  );
              `
      },
      {
        id: 15,
        name: "Textfield",
        imports: "import 'dart:ui'; \nimport 'package:rapid_widgets_library/custom-textField.dart';",
        call: `CustomTextField(params: finalTextObj${counter}, callbackTextfield: onTextSubmit${counter}),`,
        definitions: `
            onTextSubmit${counter} (String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj${counter} = new TextFieldParameters( 
            maxLength: ${paramValues.maxLength}, 
            obsecureText: ${paramValues.obsecureText},
            maxLengthEnforced: ${paramValues.maxLengthEnforced}, 
            decoration: InputDecoration(
            hintText: '${paramValues.hintText}',
            labelText: '${paramValues.labelText}', 
            prefixIcon: Icon(Icons.${paramValues.prefixIcon}),
            filled: ${paramValues.filled}, 
            fillColor: Colors.${paramValues.fillColor}, 
            counterText: "", 
            border: OutlineInputBorder( 
            borderRadius: BorderRadius.circular(${paramValues.borderRadius}), 
            borderSide: BorderSide( color: Colors.${paramValues.borderSide})), 
            ), 
            cursorColor: Colors.${paramValues.cursorColor}, 
            cursorWidth: ${paramValues.cursorWidth}, 
            expands: ${paramValues.expands}, 
            maxLines: ${paramValues.maxLines}, 
            readOnly: ${paramValues.readOnly}, 
            showCursor: ${paramValues.showCursor}, 
            style: TextStyle(color: Colors.${paramValues.textColor}),
            );
        `
      },
      {
        id: 8,
        name: "DropdownButton",
        imports: "import 'package:rapid_widgets_library/custom-dropdownButton.dart';",
        call: `CustomDropdownButton(dropdownObject${counter},onSelect${counter}),`,
        definitions: `
              DropDownParameters dropdownObject${counter} = DropDownParameters(
              itemsList: ${paramValues.itemsList},
              hintText: '${paramValues.hintText}',
              listType: '${paramValues.listType}',
              fillColor: Colors.${paramValues.fillColor},
              borderRadius: ${paramValues.borderRadius},
              width: ${paramValues.width},
              textColor: Colors.${paramValues.textColor},
              itemsBgColor: Colors.${paramValues.itemsBgColor},
              shadowColor: Colors.${paramValues.shadowColor},
              shadowBlurRadius: ${paramValues.shadowBlurRadius},
              shadowSpreadRadius: ${paramValues.shadowSpreadRadius},
              ); 
              onSelect${counter} (int i,String s){ 
              print(i); 
              print(s); 
              }
          `
      },
      {
        id: 21,
        name: "CompositeCard",
        imports: "import 'package:rapid_widgets_library/custom-compositeCard.dart';",
        call: `compositeCard(listcards${counter}),`,
        definitions: `
            List<CustomcompositeCardParameters> listcards${counter} = []; 
            CustomcompositeCardParameters card1 = new CustomcompositeCardParameters(
            flexColumn1: ${paramValues.flexColumn1},
            flexColumn2: ${paramValues.flexColumn2},
            cardColor: ${paramValues.cardColor},
            rightHandWidgets: ${paramValues.rightHandWidgets},
            leftHandWidgets: ${paramValues.leftHandWidgets},
            ); 
            listcards${counter}.add(card1);
        `
      },
      {
        id: 22,
        name: "Flip Card",
        imports: "import 'package:rapid_widgets_library/custom-flipcard.dart';",
        call: `customFlipCardWidget(FlipObj1${counter}, onclickFlipCardBtn${counter}),`,
        definitions: `
          onclickFlipCardBtn${counter} (int nIndex, String sText) {
          print(nIndex);
          print(sText);
          } 
          MaterialCardData FlipObj1${counter} = new MaterialCardData( 
          title: '${paramValues.title}', 
          subtitle: '${paramValues.subtitle}',
          containerHeight: ${paramValues.containerHeight},
          containerWidth: ${paramValues.containerWidth},
          containerDecoration: BoxDecoration( 
          boxShadow: 
          [ BoxShadow( 
          color: Colors.${paramValues.shadowColor}, blurRadius: ${paramValues.blurRadius}, 
          offset: Offset.zero),
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
          btnText: '${paramValues.btnText}', 
          btnTextColor: Colors.${paramValues.btnTextColor}, 
          btnColor: Colors.${paramValues.btnColor}, 
          margin1: ${paramValues.margin1}, 
          padding1: ${paramValues.padding1},
          imgHeight: ${paramValues.imgHeight},
          imgWidth: ${paramValues.imgWidth},
          imgType: \"Network\",
          imgPath: '${paramValues.imgPath}',
          );
      `
      },
      {
        id: 1,
        name: "Bottom Navigation Bar",
        imports: "import 'package:rapid_widgets_library/custom-bottomnavbar.dart';",
        call: "bottomNavigationBar: BottomNavBar(param),",
        definitions: `
          List<BottomNavigationBarItem> bottomnavitems = []; 
          BottomNavigationBarItem bottomnavitem1= new BottomNavigationBarItem( 
          icon: Icon(Icons.${paramValues.icon1}),
          title: Text('${paramValues.title1}',style: TextStyle(fontSize: 12)),
          ); 
          BottomNavigationBarItem bottomnavitem2= new BottomNavigationBarItem( 
          icon: Icon(Icons.${paramValues.icon2}),
          title: Text('${paramValues.title2}',style: TextStyle(fontSize: 12)),
          ); 
          BottomNavigationBarItem bottomnavitem3= new BottomNavigationBarItem( 
          icon: Icon(Icons.${paramValues.icon3}),
          title: Text('${paramValues.title3}',style: TextStyle(fontSize: 12),),
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

      {
        id: 3,
        name: "SliverAppbar",
        imports: "import 'package:rapid_widgets_library/custom-sliverAppBar.dart';",
        call: "CustomScrollView( \nslivers: <Widget>[ \ncustomSliverAppBar(sliverProducts, params), \nSliverList( delegate: SliverChildListDelegate( \n<Widget>[ \nContainer(height: 1200.0), \n], \n), \n), \n], \n),",
        definitions: `
            SliverAppBarParameters params = new SliverAppBarParameters(
            automaticallyImplyLeading: ${paramValues.automaticallyImplyLeading}, 
            backgroundColor: Colors.${paramValues.backgroundColor}, 
            expandedHeight: ${paramValues.expandedHeight}, 
            elevation: ${paramValues.elevation}, 
            titleSpacing: ${paramValues.titleSpacing}, 
            centerTitle: ${paramValues.centerTitle}, 
            stretch: ${paramValues.stretch}, 
            snap: ${paramValues.snap}, 
            pinned: ${paramValues.pinned}, 
            floating: ${paramValues.floating},
            title:Text('${paramValues.title}')
            ); 
            List<Widget> sliverProducts = [ 
            IconButton( 
            icon:  Icon(Icons.${paramValues.icon1}), 
            onPressed: () {}, 
            ), 
            IconButton( 
            icon:  Icon(Icons.${paramValues.icon2}), 
            onPressed: () {}, 
            ), 
            IconButton( 
            icon:  Icon(Icons.${paramValues.icon3}), 
            onPressed: () {}, 
            ), 
            ];
        `
      },
      {
        id: 9,
        name: "FlatButton",
        imports: "import 'package:rapid_widgets_library/custom-flatButton.dart';",
        call: `customFlatButton(buttonFlatObject${counter}, onFlatButtonPress${counter}, onFlatButtonLongPress${counter}),`,
        definitions: `
          onFlatButtonPress${counter} (bool b){ 
          print(b); 
         

          } 
          onFlatButtonLongPress${counter} (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject${counter} = FlatButtonParameters(
          child:Text('${paramValues.text}'),
          color:Colors.${paramValues.btnColor},
          textColor:Colors.${paramValues.textColor},
          hoverColor: Colors.${paramValues.hoverColor},
          width: ${paramValues.width},
          focusColor: Colors.${paramValues.focusColor},
          height: ${paramValues.height},
          highlightColor: Colors.${paramValues.highlightColor},
          splashColor: Colors.${paramValues.splashColor}

          );
      `
      },
      {
        id: 14,
        name: "Switch",
        imports: "import 'package:rapid_widgets_library/custom_switch.dart';",
        call: `CustomSwitch(param: finalSwitchObj${counter}, callbackSwitch: onSwitchTap${counter}),`,
        definitions: `
        onSwitchTap${counter} (bool sBool) { 
        print(sBool); 
        } 
        SwitchParameters finalSwitchObj${counter} = new SwitchParameters(
        inactiveTrackColor: Colors.${paramValues.inactiveTrackColor}, 
        activeColor: Colors.${paramValues.activeColor}, 
        activeTrackColor: Colors.${paramValues.activeTrackColor}
        );
    `
      },
      {
        id: 24,
        name: "Transparent Card",
        imports: "import 'package:rapid_widgets_library/custom-TransparentCard.dart';",
        call: `imageCardWidget(ImageObj1${counter}, onclickImageCardBtn${counter}),`,
        definitions: `
      onclickImageCardBtn${counter} (int nIndex, String sText) {
      print(nIndex);
      print(sText);
      } 
      MaterialCardData ImageObj1${counter} = new MaterialCardData( 
      title:'${paramValues.title}' , 
      subtitle: '${paramValues.subtitle}', 
      containerHeight: ${paramValues.containerHeight},
      textStyle1: TextStyle( 
      color: Colors.${paramValues.textcolor1}, 
      fontSize: ${paramValues.fontSize1}, 
      fontWeight: FontWeight.bold, 
      ), 
      textStyle2: TextStyle( 
      color: Colors.${paramValues.textcolor2}, 
      fontSize: ${paramValues.fontSize2}, 
      ), 
      imgHeight: ${paramValues.imgHeight}, 
      imgWidth: ${paramValues.imgWidth},
      imgType: \"Network\",
      imgPath: '${paramValues.imgPath}'
      );
  `
      },
      {
        id: 71,
        name: "Text",
        imports: "import 'package:rapid_widgets_library/custom-text.dart';",
        call: `customText(textparam${counter})`,
        definitions: `
        TextParameters textparam${counter} = new TextParameters(
          data: '${paramValues.data}',
          fontSize: ${paramValues.fontSize},
          color: Colors.${paramValues.color},
          fontStyle: FontStyle.normal,
          fontFamily: '${paramValues.fontFamily}',
          fontWeight: FontWeight.${paramValues.fontWeight},
        );
         `
      },
      {
        id: 41,
        name: "Image",
        imports: "import 'package:rapid_widgets_library/custom-image.dart';",
        call: `CustomImage(data: ImageObj1${counter}),`,
        definitions: `onclick${counter}(String sText) { print(sText); }
        CustomImageContents ImageObj1${counter} = new CustomImageContents(
        src:'${paramValues.src}',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: ${paramValues.height}, width: ${paramValues.width});
         `
      },
      {
        id: 46,
        name: "Custom ListTile",
        imports: "import 'package:rapid_widgets_library/custom-listTileWithImage.dart';",
        call: `customListTile(listData${counter}, tileParameters${counter}, onListTapped${counter}),`,
        definitions: `
      List<CustomTileData> listData${counter} = [ 
      CustomTileData( 
      leading: Icon(Icons.${paramValues.leading1}), 
      title: '${paramValues.title1}', 
      subtitle: '${paramValues.subtitle1}', 
      trailingTopText: '${paramValues.trailingTopText1}', 
      trailingBottomText: '${paramValues.trailingBottomText1}', 
      enabled: true,
      selected: ${paramValues.selected1}
      ), 
      CustomTileData( 
      leading: Icon(Icons.${paramValues.leading2}),
      title: '${paramValues.title2}', 
      subtitle: '${paramValues.subtitle2}', 
      trailingTopText:'${paramValues.trailingTopText2}',
      trailingBottomText:'${paramValues.trailingBottomText2}',
      enabled: true,
      selected: ${paramValues.selected2}
      ), 
      CustomTileData( 
        leading: Icon(Icons.${paramValues.leading3}),
        title: '${paramValues.title3}', 
        subtitle: '${paramValues.subtitle3}', 
        trailingTopText: '${paramValues.trailingTopText3}',
        trailingBottomText: '${paramValues.trailingBottomText3}',
        enabled: true,
        selected: ${paramValues.selected3}
      ) 
      ];
      CustomListTileParameters tileParameters${counter} = new CustomListTileParameters( 
      dense: ${paramValues.dense}, 
      isThreeLine: ${paramValues.isThreeLine}, 
      fontWeight: FontWeight.bold,
      fontSize: ${paramValues.fontSize},
      );
      onListTapped${counter} (int index, String title) { 
      print(index); 
      print(title); 
      }
  `
      },
      {
        id: 100,
        name: "Appbar",
        imports: "import 'package:rapid_widgets_library/custom-appBar.dart';",
        call: "appBar:customAppBar(appBarIcons,paramobject),",
        definitions: `
        AppBarParameters paramobject = new AppBarParameters(
        elevation: 5.0,
        bottomOpacity: 1.0,
        toolbarOpacity: 1.0,
        titleSpacing: 1.0,
        centerTitle: true,
        automaticallyImplyLeading: true,
        title: Text('Appbar'));
        List<Widget> appBarIcons = [
        IconButton(
        icon:
        Icon(Icons.search),
        onPressed: () {},
        ),
        IconButton(
        icon:  Icon(Icons.help),
        onPressed: () {},
        )];
 `
      },
      {
        id: 102,
        name: "Drawer",
        imports: "import 'package:rapid_widgets_library/custom-drawer.dart';",
        call: "drawer: CustomDrawer(drawerList,onclickDrawer,user1),",
        definitions: `
            List<DrawerListItems> drawerList = [ 
            DrawerListItems(Icon(Icons.account_circle), 
            Text("Account details")), 
            DrawerListItems(Icon(Icons.history), 
            Text("Order History")), 
            DrawerListItems(Icon(Icons.account_balance_wallet), 
            Text("Wallet")), 
            DrawerListItems(Icon(Icons.cancel), 
            Text("Logout")), 
            ]; 
            DrawerHeaderParameters user1= new DrawerHeaderParameters(
            subtitle: 'abc@xyz.com',
            title: 'Account Name',
            imageType: "Network",
            imagepath:'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png' ,
            headerColor:Colors.white
            ); 
            onclickDrawer(int nIndex) 
            { 
            print(nIndex); 
            }
        `
      },
      {
        id: 72,
        name: "RoutingFlatButton",
        imports: `import 'package:rapid_widgets_library/custom-flatButton.dart';\nimport 'page+${paramValues.onPressed}.dart';`,
        call: `customFlatButton(buttonFlatObject${counter}, onFlatButtonPress${counter}, onFlatButtonLongPress${counter}),`,
        definitions: `
          onFlatButtonPress${counter} (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page${paramValues.onPressed}()));

          } 
          onFlatButtonLongPress${counter} (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject${counter} = FlatButtonParameters(
          child:Text('${paramValues.text}'),
          color:Colors.${paramValues.btnColor},
          textColor:Colors.${paramValues.textColor},
          hoverColor: Colors.${paramValues.hoverColor},
          width: ${paramValues.width},
          focusColor: Colors.${paramValues.focusColor},
          height: ${paramValues.height},
          highlightColor: Colors.${paramValues.highlightColor},
          splashColor: Colors.${paramValues.splashColor}

          );
      `
      },
      {
        id: 0,
        name: "Appbar",
        imports: "import 'package:rapid_widgets_library/custom-appBar.dart';",
        call: "appBar:customAppBar(appBarIcons,paramobject),",
        definitions: `
        AppBarParameters paramobject = new AppBarParameters(
          elevation: ${paramValues.elevation},
          bottomOpacity: ${paramValues.bottomOpacity},
          toolbarOpacity: ${paramValues.toolbarOpacity},
          titleSpacing: ${paramValues.titleSpacing},
          centerTitle: ${paramValues.centerTitle},
          automaticallyImplyLeading: ${paramValues.automaticallyImplyLeading},
          title: Text('${paramValues.title}'));
          List<Widget> appBarIcons = [
          IconButton(
          icon:
          Icon(Icons.${paramValues.icon1}),
          onPressed: () {},
          ),
          IconButton(
          icon:  Icon(Icons.${paramValues.icon2}),
          onPressed: () {},
          ),
          IconButton(
          icon:  Icon(Icons.${paramValues.icon3}),
          onPressed: () {}, 
          ), ];`
      },
      {
        id: 2,
        name: "Drawer",
        imports: "import 'package:rapid_widgets_library/custom-drawer.dart';",
        call: "drawer: CustomDrawer(drawerList,onclickDrawer,user1),",
        definitions: `
        List<DrawerListItems> drawerList = [ 
        DrawerListItems(Icon(Icons.${paramValues.icon1}),
        Text('${paramValues.text1}')), 
        DrawerListItems(Icon(Icons.${paramValues.icon2}), 
        Text('${paramValues.text2}')), 
        DrawerListItems(Icon(Icons.${paramValues.icon3}), 
        Text('${paramValues.text3}')), 
        DrawerListItems(Icon(Icons.${paramValues.icon4}), 
        Text('${paramValues.text4}')), 
        ]; 
        DrawerHeaderParameters user1= new DrawerHeaderParameters(
        subtitle: '${paramValues.subtitle}',
        title: '${paramValues.title}',
        imageType: \"Network\",
        imagepath: '${paramValues.imagepath}',
        headerColor:Colors.${paramValues.headerColor},
        ); 
        onclickDrawer(int nIndex) 
        { 
        print(nIndex); 
        }
    `
      }
    ];
    for (i of widgetList) {
      if (i.id == widgetId) {
        resolve({
          imports: i.imports,
          call: i.call,
          definitions: i.definitions
        });
      }
    }
    reject("Widget by that name not found");
  });

module.exports = getWidgets;