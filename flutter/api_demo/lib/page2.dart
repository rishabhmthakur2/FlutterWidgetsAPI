import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page3.dart';
import 'package:rapid_widgets_library/custom-text.dart';
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
        src:'imagepath page 3',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 100, width: 100);
         

        TextParameters textparam1 = new TextParameters(
          data: 'title',
          fontSize: 12,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
        );
         

        TextParameters textparam2 = new TextParameters(
          data: 'subtitle',
          fontSize: 14,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'roboto',
          fontWeight: FontWeight.bold,
        );
         

          onFlatButtonPress3 (bool b){ 
          print(b); 
          // Navigator.pushReplacement(
          //   context,
          //   MaterialPageRoute(
          //       builder: (context) => Page3()));

          } 
          onFlatButtonLongPress3 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject3 = FlatButtonParameters(
          child:Text('login'),
          color:Colors.yellow,
          textColor:Colors.black,
          hoverColor: Colors.yellow,
          width: 150,
          focusColor: Colors.yellow,
          height: 40,
          highlightColor: Colors.yellow,
          splashColor: Colors.yellow

          );
      

        TextParameters textparam4 = new TextParameters(
          data: 'login',
          fontSize: 12,
          color: Colors.red,
          fontStyle: FontStyle.normal,
          fontFamily: 'roboto',
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
Expanded(flex: 1,child:CustomImage(data: ImageObj10),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam1)),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam2)),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customFlatButton(buttonFlatObject3, onFlatButtonPress3, onFlatButtonLongPress3),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam4)),
 ],),
),
], 
)  
))))); 
} 
}