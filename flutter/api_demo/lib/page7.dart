import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-bottomnavbar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'dart:ui'; 
import 'package:rapid_widgets_library/custom-textField.dart';
import 'dart:ui'; 
import 'package:rapid_widgets_library/custom-textField.dart';
import 'package:rapid_widgets_library/custom-dropdownButton.dart';
void main() => runApp(Page3());
class Page3 extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
home: BoilerPlate());
}}
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
          bottomOpacity: 10,
          toolbarOpacity: 10,
          titleSpacing: 10,
          centerTitle: false,
          automaticallyImplyLeading: false,
          title: Text('Title'));
          backgroundColor: Colors.undefined,
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
        

            onTextSubmit0 (String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj0 = new TextFieldParameters( 
            maxLength: 100, 
            obsecureText: false,
            maxLengthEnforced: true, 
            decoration: InputDecoration(
            hintText: 'hint',
            labelText: 'labelText', 
  
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
        

            onTextSubmit1 (String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj1 = new TextFieldParameters( 
            maxLength: 100, 
            obsecureText: false,
            maxLengthEnforced: true, 
            decoration: InputDecoration(
            hintText: 'hint',
            labelText: 'labelText', 
  
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
        

              DropDownParameters dropdownObject2 = DropDownParameters(
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
              onSelect2 (int i,String s){ 
              print(i); 
              print(s); 
              }
          
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
appBar:customAppBar(appBarIcons,paramobject),
drawer: CustomDrawer(drawerList,onclickDrawer,user1),
bottomNavigationBar: BottomNavBar(param),
backgroundColor: Colors.white,
body: Padding(
padding: const EdgeInsets.all(0.0),
child: Padding(
padding: const EdgeInsets.all(0.0),
child: SingleChildScrollView(
child: Column(
children: <Widget>[
Padding(
padding: const EdgeInsets.only(left:30.0,right:30),
child: Row(children: [
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30.0,top:30),
child: Row(children: [
Expanded(flex: 1,child:CustomTextField(params: finalTextObj0, callbackTextfield: onTextSubmit0),),
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(0.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
Expanded(flex: 1,child:Container()),
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
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
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
Expanded(flex: 1,child:Container()),
Expanded(flex: 1,child:Container()),
Expanded(flex: 1,child:Container()),
Expanded(flex: 1,child:CustomTextField(params: finalTextObj1, callbackTextfield: onTextSubmit1),),
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
Expanded(flex: 1,child:CustomDropdownButton(dropdownObject2,onSelect2),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
 ],),
),
], 
)  
))))); 
} 
}