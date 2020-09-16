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
        id: 16,
        name: "Alert Dialog Box",
        imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom_AlertDialogs.dart';",
        call: `CustomAlertDialog(dialogContent: alertObj1${counter}, param: alertobj2${counter}, callbackAlert: onAlertButtonTap${counter}),`,
        definitions: `
            AlertDialogContents alertObj1${counter} = new AlertDialogContents(
              <Widget>[
                Padding(
                  padding: const EdgeInsets.only(left:30.0, right: 30, top: 25, bottom: 20),
                  child: Container(
                    height: 41,
                    width: 220,
                    child: FlatButton(
                      child: Text('${paramValues.btnText}',
                        style: TextStyle(color: Colors.white),),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(21.0),
                      ),
                      color: Colors.${paramValues.btnColor},
                      onPressed: (){},
                    ),
                  ),
                ),
              ],"",
              Text('${paramValues.text}', textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16, color: Color(0xff707070)),),
            );
            AlertDialogParameters alertobj2${counter} = new AlertDialogParameters(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0)),
              backgroundColor: Colors.${paramValues.backgroundColor},
              elevation: 30,
              contentTextStyle: TextStyle( fontSize: 18.0, color: Colors.blueGrey),
              height: 254,
              width: 354,
              titleTextStyle: TextStyle( fontSize: 18.0, color: Colors.white),
            );
            onAlertButtonTap${counter}(String s){
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
          textAlign: TextAlign.${paramValues.textAlign}
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
              id: 101,
              name: "Bottom Navigation Bar",
              imports: "import 'package:rapid_widgets_library/custom-bottomnavbar.dart';",
              call: "bottomNavigationBar: BottomNavBar(param),",
              definitions: `
                  List<BottomNavigationBarItem> bottomnavitems = [];
                  BottomNavigationBarItem bottomnavitem1= new BottomNavigationBarItem(
                    icon: Image.network('http://104.40.75.137:9003/assets/cms/bottomnav_home.png',height: 20,width: 20,),
                    title: Text('Home',style: TextStyle(fontSize: 14)),
                  );
                  BottomNavigationBarItem bottomnavitem2= new BottomNavigationBarItem(
                    icon: Image.network('http://104.40.75.137:9003/assets/cms/bottomnav_bookmark.png',height: 20,width: 20,),
                    title: Text('Bookmark',style: TextStyle(fontSize: 14)),
                  );
                  BottomNavigationBarItem bottomnavitem3= new BottomNavigationBarItem(
                    icon: Icon(Icons.search,color: Colors.black,size: 20,),
                    title: Text('Search',style: TextStyle(fontSize: 14),),
                  );
                  BottomNavigationBarItem bottomnavitem4= new BottomNavigationBarItem(
                    icon: Image.network('http://104.40.75.137:9003/assets/cms/bottomnav_profile.png',height: 20,width: 20,),
                    title: Text('Profile',style: TextStyle(fontSize: 14),),
                  );
                  bottomnavitems.add(bottomnavitem1);
                  bottomnavitems.add(bottomnavitem2);
                  bottomnavitems.add(bottomnavitem3);
                  bottomnavitems.add(bottomnavitem4);
                  BottomNavBarParameters param = new BottomNavBarParameters(
                      items: bottomnavitems,
                      selectedItemColor: Colors.black,
                      unselectedItemColor: Colors.black,
                      backgroundColor: Color(0xffF9F9F9),
                      showUnselectedLabels: true,
                      showSelectedLabels: true,
                  );
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
        imports: `import 'package:rapid_widgets_library/custom-flatButton.dart';\nimport 'page${paramValues.onPressed}.dart';`,
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
          title: Text('${paramValues.title}'),
          backgroundColor: Colors.${paramValues.backgroundColor});
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
      },
      {
              id: 121,
              name: "Composite Card",
              imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-compositeCard.dart';\nimport 'page5.dart';",
              call: `compositeCard(listcards${counter}),`,
              definitions: `
              List<CustomcompositeCardParameters> listcards${counter} = [];
                  CustomcompositeCardParameters card1${counter} = new CustomcompositeCardParameters(
                      flexColumn1: 6,
                      flexColumn2: 4,
                      cardColor: Colors.white,
                      rightHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(right: 10.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Align(
                                  alignment: Alignment.centerRight,
                                  child: Image.network('${paramValues.imgPath}',height: 102,width: 65,)
                              ),
                              SizedBox(height: 19,),
                              Container(
                                height: 41,
                                width: 123,
                                child: FlatButton(color: Color(0xffD93954),child: Text('View',
                                  style: TextStyle(color: Colors.white, fontSize: 13, fontFamily: 'Segoe UI'),),
                                  onPressed: (){ Navigator.pushReplacement(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => Page5()));},
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(21.0)),
                                  disabledColor: Color(0xffD93954),),
                              )
                            ],
                          ),
                        ),
                      ],
                      leftHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(left: 13.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Text('${paramValues.title}',textAlign: TextAlign.left,
                              style: TextStyle(fontSize: 20,color: Color(0xff707070)),),
                              SizedBox(height: 4,),
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Text('${paramValues.subtitle}',
                                  style: TextStyle(fontSize: 14.0,color: Color(0xff707070)),),
                              ),
                              SizedBox(height: 46,),
                              Row(
                                children: <Widget>[
                                  Text('${paramValues.newPrice}',
                                  style: TextStyle(fontSize: 20.0, color: Color(0xff707070)),),
                                  SizedBox(width: 10,),
                                  Text('${paramValues.oldPrice}',
                                  style: TextStyle(color: Color(0xffD93954), decoration: TextDecoration.lineThrough,fontSize: 20.0),),
                                ],
                              )
                            ],
                          ),
                        ),
                      ],
                  );
                  listcards${counter}.add(card1${counter});
              `
            },
              {
                id: 5,
                name: "TabBar View",
                imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-tab-bar-view.dart';",
                call: "showTabBarView(TabBarViewParameters(listTabs:tabviews, backgroundColor: Colors.white,labelColor: Color(0xff707070),boxColor: Colors.white,borderColor: Color(0xffD93954),unselectedLabelColor: Color(0xff707070),boxShadowColor: Colors.white,),TabBarViewCallback),",
                definitions: `
                List<TabBarProducts> tabviews = [];
                    TabBarProducts tabview1= new TabBarProducts(
                        '${paramValues.title1}',
                        Icon(Icons.fastfood, color: Colors.transparent,),
                        Container()
                    );
                    TabBarProducts tabview2= new TabBarProducts(
                        '${paramValues.title2}',
                        Icon(Icons.fastfood, color: Colors.transparent,),
                        Container(height: 0, width: 0,)
                    );
                    TabBarProducts tabview3= new TabBarProducts(
                        '${paramValues.title3}',
                        Icon(Icons.fastfood, color: Colors.transparent,),
                        Container(height: 0, width: 0,)
                    );
                    TabBarProducts tabview4 = new TabBarProducts(
                        '${paramValues.title4}',
                        Icon(Icons.ac_unit,color: Colors.transparent,),
                        Container(height: 0, width: 0,)
                    );
                    tabviews.add(tabview1);
                    tabviews.add(tabview2);
                    tabviews.add(tabview3);
                    tabviews.add(tabview4);
                    TabBarViewCallback(int tabprint) {
                      print(tabprint);
                    }
            `
              },
              {
                id: 200,
                name: "Progress Card",
                imports: "import 'package:rapid_widgets_library/custom-linearProgressIndicator.dart'; \nimport 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-progress-card.dart';",
                call: "customProgressCard(data, callback),",
                definitions: `
                CustomLinearProgressBarParameters linearBarParameters =
                    new CustomLinearProgressBarParameters(
                        value: ${paramValues.linearProgressVal},
                        backgroundColor: Colors.${paramValues.linearProgressColor2},
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.${paramValues.linearProgressColor1}));
                    callback(dynamic s, int i) {
                    }
                    MaterialCardData data = new MaterialCardData(
                      title: '${paramValues.title}',
                      subtitle: '${paramValues.subtitle}',
                      bodyText: '${paramValues.bodyText}',
                      footerText: '${paramValues.footerText}',
                      btnGrpList1: [
                        FlatButton(
                          shape: new RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(30.0)),
                          disabledColor: Color(0xffD93954),
                          color: Color(0xffD93954),
                          child: Text(
                            '${paramValues.btnText}',
                            style: TextStyle(
                                fontFamily: 'Segoe UI',
                                fontSize: 12.0,
                                color: Colors.white),
                          ),
                          onPressed: () {},
                        )
                      ],
                      btnGrpList2: [
                        customLinearProgressBarIndicator(linearBarParameters),
                      ]
                    );
            `
              },
              {
                      id: 201,
                      name: "Solid Card",
                      imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-solid-card.dart';",
                      call: `customSolidCard(solidParameters${counter}, callbackSolid${counter}),`,
                      definitions: `
                      callbackSolid${counter}(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters${counter} = new MaterialCardData(
                            title: '${paramValues.title}',
                            containerHeight: ${paramValues.containerHeight},
                            containerWidth: ${paramValues.containerWidth},
                            imgHeight: ${paramValues.imgHeight},
                            imgWidth: ${paramValues.imgWidth},
                            imgPath: '${paramValues.imgPath}',
                            containerbgColor: Colors.${paramValues.bgColor}
                          );
                  `
                    },
                    {
                      id: 202,
                      name: "Borderless Card",
                      imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-borderless-card.dart';",
                      call: `customBorderlessCard(borderdata${counter},borderlessCallback${counter}),`,
                      definitions: `
                      borderlessCallback${counter}(String s, int i){};
                      MaterialCardData borderdata${counter} = new MaterialCardData(
                        title: '${paramValues.title}',
                        subtitle: '${paramValues.subtitle}',
                        containerHeight: ${paramValues.containerHeight},
                        containerWidth: ${paramValues.containerWidth},
                        imgPath: '${paramValues.imgPath}',
                        containerbgColor: Colors.${paramValues.bgColor},
                        footerText: '${paramValues.price}',
                        btnText: '${paramValues.btnText}',
                      );
                  `
                    },
                    {
                      id: 75,
                      name: "CheckBox",
                      imports: "import 'package:rapid_widgets_library/custom-checkbox.dart';",
                      call: `CustomCheckBox(checkparam)`,
                      definitions: `
                      CheckBoxParameters checkparam = new CheckBoxParameters(
                        activeColor: Colors.${paramValues.selectedColor},
                      );
                  `
                    },
                    {
                      id: 40,
                      name: "Icon",
                      imports: "import 'package:rapid_widgets_library/custom-icon.dart'; \nimport 'package:rapid_widgets_library/widget-classesUsed.dart';",
                      call: `customisedIcon(icon${counter}),`,
                      definitions: `
                      IconState icon${counter} =new IconState(icon: Icons.${paramValues.icon},
                        color: Colors.${paramValues.color},
                        size: ${paramValues.size});
                  `
                    },
             {
                     id: 300,
                     name: "Appbar",
                     imports: "import 'package:rapid_widgets_library/custom-appBar.dart'; \nimport 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-tab-bar.dart';",
                     call: "appBar:customAppBar(appBarIcons,paramobject),",
                     definitions: `
                     onTap(int s) {
                                             print(s);
                                           }
                                           List<TabBarList> tabs = [];
                                           TabBarList tab1 = new TabBarList(

                                               "e-Books",
                                               Icon(Icons.fastfood,color: Colors.transparent,size: 0,),
                                           );
                     TabBarList tab2 = new TabBarList(
                                               "Video Course",
                                               Icon(Icons.fastfood,color: Colors.transparent,size: 0,)
                                           );
                     TabBarList tab3 = new TabBarList(
                                               "Audio Books",
                                               Icon(Icons.fastfood,color: Colors.transparent,size: 0,)
                                           );
                     TabBarList tab4 = new TabBarList(
                                               "My Course",
                                               Icon(Icons.fastfood,color: Colors.transparent,size: 0,)
                                           );
                                           tabs.add(tab1);
                                           tabs.add(tab2);
                                           tabs.add(tab3);
                                           tabs.add(tab4);
                     AppBarParameters paramobject = new AppBarParameters(
                           backgroundColor: Colors.white,
                             elevation: 0,
                             bottomOpacity: 1.0,
                             toolbarOpacity: 1.0,
                             titleSpacing: 1.0,
                             centerTitle: false,
                             automaticallyImplyLeading: true,
                             bottom: PreferredSize(preferredSize:Size.fromHeight(80),child: Container(height:75,child:showTabBar(TabBarParameters(tablist: tabs,backgroundColor: Colors.white,labelColor: Color(0xff707070),boxColor: Colors.white,borderColor: Color(0xffD93954),unselectedLabelColor: Color(0xff707070),boxShadowColor: Colors.white,),onTap,)),),
                             leading: Icon(Icons.arrow_back, color: Color(0xff707070),),
                             title: Text('Featured',
                             style: TextStyle(fontSize: 26, color: Color(0xff707070)),));
                         List<Widget> appBarIcons = [
                           IconButton(
                             icon: Image.network('http://104.40.75.137:9003/assets/cms/cart.png',width: 20,height: 14,),
                             onPressed: () {},
                           ),
                           Padding(
                             padding: const EdgeInsets.only(right: 30.0),
                             child: IconButton(
                               icon: Image.network('http://104.40.75.137:9003/assets/cms/drawer_icon.png',width: 20,height: 14,),
                               onPressed: () {},
                             ),
                           )];
              `
                   },
         {
                              id: 301,
                              name: "Appbar",
                              imports: "import 'package:rapid_widgets_library/custom-appBar.dart';",
                              call: "appBar:customAppBar(appBarIcons,paramobject),",
                              definitions: `
                              AppBarParameters paramobject = new AppBarParameters(
                                    backgroundColor: Colors.white,
                                      elevation: 0,
                                      bottomOpacity: 1.0,
                                      toolbarOpacity: 1.0,
                                      titleSpacing: 1.0,
                                      centerTitle: false,
                                      automaticallyImplyLeading: true,
                                      leading: Icon(Icons.arrow_back, color: Color(0xff707070),),
                                      title: Text('Featured',
                                      style: TextStyle(fontSize: 26, color: Color(0xff707070)),));
                                  List<Widget> appBarIcons = [
                                    IconButton(
                                      icon: Image.network('http://104.40.75.137:9003/assets/cms/cart.png',width: 20,height: 14,),
                                      onPressed: () {},
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.only(right: 30.0),
                                      child: IconButton(
                                        icon: Image.network('http://104.40.75.137:9003/assets/cms/drawer_icon.png',width: 20,height: 14,),
                                        onPressed: () {},
                                      ),
                                    )];
                       `
                            },
                            {
                                         id: 302,
                                         name: "Appbar",
                                         imports: "import 'package:rapid_widgets_library/custom-appBar.dart';\nimport 'page4.dart';",
                                         call: "appBar:customAppBar(appBarIcons,paramobject),",
                                         definitions: `
                                         AppBarParameters paramobject = new AppBarParameters(
                                               backgroundColor: Colors.white,
                                                 elevation: 0,
                                                 bottomOpacity: 1.0,
                                                 toolbarOpacity: 1.0,
                                                 titleSpacing: 1.0,
                                                 centerTitle: false,
                                                 automaticallyImplyLeading: true,
                                                 leading: IconButton(icon: (Icon(Icons.arrow_back,color: Color(0xff707070))), onPressed: (){
                                                  Navigator.pushReplacement(
                                                      context,
                                                      MaterialPageRoute(
                                                          builder: (context) => Page4()));
                                                  
                                                }),
                                                 title: Text('React Fullstack with node/express',
                                                 style: TextStyle(fontSize: 26, color: Color(0xff707070)),));
                                             List<Widget> appBarIcons = [
                                               Padding(
                                                 padding: const EdgeInsets.only(right: 30.0),
                                                 child: IconButton(
                                                   icon: Image.network('http://104.40.75.137:9003/assets/cms/drawer_icon.png',width: 20,height: 14,),
                                                   onPressed: () {},
                                                 ),
                                               )];
                                  `
                                       },
                                       {
                                        id: 303,
                                        name: "Appbar",
                                        imports: "import 'package:rapid_widgets_library/widget-classesUsed.dart'; \nimport 'package:rapid_widgets_library/custom-appBar.dart';",
                                        call: "appBar:customAppBar(appBarIcons,paramobject),",
                                        definitions: `
                                          AppBarParameters paramobject = new AppBarParameters(
                                            backgroundColor: Colors.white,
                                            elevation: 0,
                                            bottomOpacity: 1.0,
                                            toolbarOpacity: 1.0,
                                            titleSpacing: 1.0,
                                            centerTitle: false,
                                            automaticallyImplyLeading: true,
                                            leading: Icon(Icons.arrow_back, color: Color(0xff707070),),
                                            title: Text('${paramValues.title}',
                                              style: TextStyle(fontSize: 26, color: Color(0xff707070)),));
                                        List<Widget> appBarIcons = [
                                          IconButton(
                                            icon: Image.network('http://104.40.75.137:9003/assets/cms/cart.png',width: 20,height: 14,),
                                            onPressed: () {},
                                          ),
                                          Padding(
                                            padding: const EdgeInsets.only(right: 30.0),
                                            child: IconButton(
                                              icon: Image.network('http://104.40.75.137:9003/assets/cms/drawer_icon.png',width: 20,height: 14,),
                                              onPressed: () {},
                                            ),
                                          )];
                                 `
                                      },

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