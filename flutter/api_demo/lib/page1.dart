import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page2.dart';
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
        

          onFlatButtonPress0 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page2()));

          } 
          onFlatButtonLongPress0 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject0 = FlatButtonParameters(
          child:Text('Get Started'),
          color:Colors.pink,
          textColor:Colors.white,
          hoverColor: Colors.pink,
          width: 100,
          focusColor: Colors.pink,
          height: 50,
          highlightColor: Colors.pink,
          splashColor: Colors.pink

          );
      
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
backgroundColor: Colors.white,
body: Padding(
padding: const EdgeInsets.only(top:40.0,left:20.0,right:20.0,bottom:0.0),
child: Padding(
padding: const EdgeInsets.all(0.0),
child: SingleChildScrollView(
child: Column(
children: <Widget>[
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:0),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(20.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:20),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(20.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:0),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:0),Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(mainAxisAlignment: MainAxisAlignment.center,children: [
SizedBox(height:60),Expanded(flex: 1,child:customFlatButton(buttonFlatObject0, onFlatButtonPress0, onFlatButtonLongPress0),),
 ],),
),
], 
)  
))))); 
} 
}