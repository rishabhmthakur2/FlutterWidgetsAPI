import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page1.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
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
        

          onFlatButtonPress0 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page1()));

          } 
          onFlatButtonLongPress0 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject0 = FlatButtonParameters(
          child:Text('next'),
          color:Colors.yellow,
          textColor:Colors.black,
          hoverColor: Colors.yellow,
          width: 100,
          focusColor: Colors.yellow,
          height: 40,
          highlightColor: Colors.yellow,
          splashColor: Colors.yellow

          );
      
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
body: Padding(
padding: const EdgeInsets.all(5.0),
child: Padding(
padding: const EdgeInsets.all(5.0),
child: SingleChildScrollView(
child: Column(
children: <Widget>[
Padding(
padding: const EdgeInsets.only(top:65.0,left: 25.0,right: 25.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:40),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:35),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:20),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(15.0),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween,children: [
SizedBox(height:200),Expanded(flex: 1,child:customFlatButton(buttonFlatObject0, onFlatButtonPress0, onFlatButtonLongPress0),),SizedBox(width:30),
Expanded(flex: 1,child:Container()),
 ],),
),
], 
)  
))))); 
} 
}