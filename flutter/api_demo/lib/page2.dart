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
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page2.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'dart:ui'; 
import 'package:rapid_widgets_library/custom-textField.dart';
import 'dart:ui'; 
import 'package:rapid_widgets_library/custom-textField.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page3.dart';
import 'package:rapid_widgets_library/custom-text.dart';
void main() => runApp(Page2());
class Page2 extends StatelessWidget {
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
        src:'http://104.40.75.137:9003/assets/cms/image1.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 170, width: 180);
         

        TextParameters textparam1 = new TextParameters(
          data: 'Web content',
          fontSize: 26,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.center
        );
         

        TextParameters textparam2 = new TextParameters(
          data: 'Web content is the textual, visual, or aural content that is encountered as part of the user experience on websites',
          fontSize: 16,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.normal,
          textAlign: TextAlign.center
        );
         
onclick5(String sText) { print(sText); }
        CustomImageContents ImageObj15 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/image2.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 170, width: 180);
         

        TextParameters textparam6 = new TextParameters(
          data: 'Teacher learning education',
          fontSize: 26,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.center
        );
         

        TextParameters textparam7 = new TextParameters(
          data: 'Training teacher for the lesson for online student interaction',
          fontSize: 16,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.normal,
          textAlign: TextAlign.center
        );
         

          onFlatButtonPress8 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page2()));

          } 
          onFlatButtonLongPress8 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject8 = FlatButtonParameters(
          child:Text('Get Started'),
          color:Colors.pink,
          textColor:Colors.white,
          hoverColor: Colors.pink,
          width: 150,
          focusColor: Colors.pink,
          height: 40,
          highlightColor: Colors.pink,
          splashColor: Colors.pink

          );
      
onclick9(String sText) { print(sText); }
        CustomImageContents ImageObj19 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/image3.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 302, width: 414);
         

            onTextSubmit10 (String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj10 = new TextFieldParameters( 
            maxLength: 100, 
            obsecureText: false,
            maxLengthEnforced: true, 
            decoration: InputDecoration(
            hintText: 'Email',
            labelText: 'Email', 
  
            filled: false, 
            fillColor: Colors.white, 
            counterText: "", 
            border: OutlineInputBorder( 
            borderRadius: BorderRadius.circular(30), 
            borderSide: BorderSide( color: Colors.white70)), 
            ), 
            cursorColor: Colors.black, 
            cursorWidth: 2, 
            expands: false, 
            maxLines: 1, 
            readOnly: false, 
            showCursor: true, 
            style: TextStyle(color: Colors.black),
            );
        

            onTextSubmit11 (String sText) { 
            print(sText); 
            }
            TextFieldParameters finalTextObj11 = new TextFieldParameters( 
            maxLength: 100, 
            obsecureText: true,
            maxLengthEnforced: true, 
            decoration: InputDecoration(
            hintText: 'Password',
            labelText: 'Password', 
  
            filled: false, 
            fillColor: Colors.white, 
            counterText: "", 
            border: OutlineInputBorder( 
            borderRadius: BorderRadius.circular(30), 
            borderSide: BorderSide( color: Colors.white70)), 
            ), 
            cursorColor: Colors.black, 
            cursorWidth: 2, 
            expands: false, 
            maxLines: 1, 
            readOnly: false, 
            showCursor: true, 
            style: TextStyle(color: Colors.black),
            );
        

          onFlatButtonPress12 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page3()));

          } 
          onFlatButtonLongPress12 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject12 = FlatButtonParameters(
          child:Text('Login'),
          color:Colors.pink,
          textColor:Colors.white,
          hoverColor: Colors.pink,
          width: 274,
          focusColor: Colors.pink,
          height: 50,
          highlightColor: Colors.pink,
          splashColor: Colors.pink

          );
      

        TextParameters textparam13 = new TextParameters(
          data: 'Forgot Password? /n You can register here',
          fontSize: 14,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.normal,
          textAlign: TextAlign.center
        );
         
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
backgroundColor: Colors.white,
body: Padding(
padding: const EdgeInsets.all(0.0),
child: Padding(
padding: const EdgeInsets.all(0.0),
child: SingleChildScrollView(
child: Column(
children: <Widget>[
Padding(
padding: const EdgeInsets.all(0.0),
child: Row(children: [
Expanded(flex: 1,child:CustomImage(data: ImageObj19),),
],),
),
Padding(
padding: const EdgeInsets.only(right:60.0,left:60,top:66),
child: Row(children: [
Expanded(flex: 1,child:CustomTextField(params: finalTextObj10, callbackTextfield: onTextSubmit10),),
],),
),
Padding(
padding: const EdgeInsets.only(right:60.0,left:60,top:25),
child: Row(children: [
Expanded(flex: 1,child:CustomTextField(params: finalTextObj11, callbackTextfield: onTextSubmit11),),
],),
),
Padding(
padding: const EdgeInsets.only(right:60.0,left:60,top:35,bottom:35),
child: Row(children: [
Expanded(flex: 1,child:customFlatButton(buttonFlatObject12, onFlatButtonPress12, onFlatButtonLongPress12),),
],),
),
Padding(
padding: const EdgeInsets.only(right:60,left:60),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam13)),
 ],),
),
], 
)  
))))); 
} 
}