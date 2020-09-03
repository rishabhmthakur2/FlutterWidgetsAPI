import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'dart:ui'; 
import 'package:rapid_widgets_library/custom-textField.dart';
import 'package:rapid_widgets_library/custom-dropdownButton.dart';
void main() => runApp(BoilerPlate());
class BoilerPlate extends StatefulWidget 
{ 
@override 
_BoilerPlate createState() => _BoilerPlate();
}
class _BoilerPlate extends State<BoilerPlate> {
 @override
  Widget build(BuildContext context) { 

        AppBarParameters paramobject = new AppBarParameters(
          elevation: 15,
          bottomOpacity: 0.5,
          toolbarOpacity: 0.5,
          titleSpacing: 0.5,
          centerTitle: false,
          automaticallyImplyLeading: false,
          title: Text('Title'));
          List<Widget> appBarIcons = [
          IconButton(
          icon:
          Icon(Icons.search),
          onPressed: () {},
          ),
          IconButton(
          icon:  Icon(Icons.home),
          onPressed: () {},
          ),
          IconButton(
          icon:  Icon(Icons.list),
          onPressed: () {}, 
          ), ];

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
        

            onTextSubmit(String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj = new TextFieldParameters( 
            maxLength: 100, 
            obsecureText: false,
            maxLengthEnforced: true, 
            decoration: InputDecoration(
            hintText: 'hint',
            labelText: 'labelText', 
            prefixIcon: Icon(Icons.search),
            filled: true, 
            fillColor: Colors.white, 
            counterText: "", 
            border: OutlineInputBorder( 
            borderRadius: BorderRadius.circular(20), 
            borderSide: BorderSide( color: Colors.black)), 
            ), 
            cursorColor: Colors.black, 
            cursorWidth: 2, 
            expands: false, 
            maxLines: 1, 
            readOnly: false, 
            showCursor: true, 
            style: TextStyle(color: Colors.black),
            );
        

              DropDownParameters dropdownObject = DropDownParameters(
              itemsList: ['One', 'Two'],
              hintText: 'test',
              listType: 'test',
              fillColor: Colors.grey,
              borderRadius: 20,
              width: 200,
              textColor: Colors.blue,
              itemsBgColor: Colors.black,
              shadowColor: Colors.black,
              shadowBlurRadius: 10,
              shadowSpreadRadius: 5,
              ); 
              onSelect(int i,String s){ 
              print(i); 
              print(s); 
              }
          
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
appBar:customAppBar(appBarIcons,paramobject),
drawer: CustomDrawer(drawerList,onclickDrawer,user1),
body: Padding(
padding: const EdgeInsets.all(20.0),
child: Padding(
padding: const EdgeInsets.all(25.0),
child: SingleChildScrollView(
child: Column(
children: <Widget>[
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:CustomTextField(params: finalTextObj, callbackTextfield: onTextSubmit),),
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:CustomDropdownButton(dropdownObject,onSelect),),
 ],),
),
], 
)  
))))); 
} 
}