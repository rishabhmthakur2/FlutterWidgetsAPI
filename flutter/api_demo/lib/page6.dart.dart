import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page2.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page3.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-text.dart';
void main() => runApp(Page5());
class Page5 extends StatelessWidget {
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
        

          onFlatButtonPress1 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page2()));

          } 
          onFlatButtonLongPress1 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject1 = FlatButtonParameters(
          child:Text('next'),
          color:Colors.red,
          textColor:Colors.white,
          hoverColor: Colors.red,
          width: 100,
          focusColor: Colors.red,
          height: 40,
          highlightColor: Colors.red,
          splashColor: Colors.red

          );
      

          onFlatButtonPress2 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page3()));

          } 
          onFlatButtonLongPress2 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject2 = FlatButtonParameters(
          child:Text('next'),
          color:Colors.red,
          textColor:Colors.white,
          hoverColor: Colors.red,
          width: 100,
          focusColor: Colors.red,
          height: 40,
          highlightColor: Colors.red,
          splashColor: Colors.red

          );
      

        TextParameters textparam4 = new TextParameters(
          data: 'page5',
          fontSize: 14,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
        );
         

        TextParameters textparam5 = new TextParameters(
          data: 'page6',
          fontSize: 14,
          color: Colors.red,
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
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam5)),
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
Expanded(flex: 1,child:customFlatButton(buttonFlatObject2, onFlatButtonPress2, onFlatButtonLongPress2),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customFlatButton(buttonFlatObject1, onFlatButtonPress1, onFlatButtonLongPress1),),
 ],),
),
], 
)  
))))); 
} 
}