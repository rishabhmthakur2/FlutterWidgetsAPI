import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-text.dart';
void main() => runApp(Page1());
class Page1 extends StatelessWidget {
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
        
onclick0(String sText) { print(sText); }
        CustomImageContents ImageObj10 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/image5.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 160, width: 180);
         

        TextParameters textparam1 = new TextParameters(
          data: 'Title',
          fontSize: 18,
          color: Colors.pink,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
        );
         

        TextParameters textparam2 = new TextParameters(
          data: 'subTitle',
          fontSize: 14,
          color: Colors.pink,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
        );
         
onclick5(String sText) { print(sText); }
        CustomImageContents ImageObj15 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/image5.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 150, width: 180);
         

        TextParameters textparam6 = new TextParameters(
          data: 'title1',
          fontSize: 16,
          color: Colors.pink,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
        );
         

        TextParameters textparam7 = new TextParameters(
          data: 'title2',
          fontSize: 16,
          color: Colors.yellow,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
        );
         
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
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
SizedBox(height:30),Expanded(flex: 1,child:CustomImage(data: ImageObj15),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
SizedBox(height:30),Expanded(flex: 1,child:customText(textparam6)),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
SizedBox(height:30),Expanded(flex: 1,child:customText(textparam7)),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
SizedBox(height:30),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
SizedBox(height:30),Expanded(flex: 1,child:Container()),
 ],),
),
], 
)  
))))); 
} 
}