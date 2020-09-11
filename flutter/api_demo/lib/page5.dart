import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'page4.dart';
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
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'page1.dart';
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
            borderRadius: BorderRadius.circular(20), 
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
            borderRadius: BorderRadius.circular(20), 
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
        

        TextParameters textparam13 = new TextParameters(
          data: 'Forgot Password? /n You can register here',
          fontSize: 14,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.normal,
          textAlign: TextAlign.center
        );
         
onclick26(String sText) { print(sText); }
        CustomImageContents ImageObj126 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/Image6.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 133, width: 237);
         

        TextParameters textparam27 = new TextParameters(
          data: 'Module 1 - Introduction',
          fontSize: 20,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.left
        );
         

        TextParameters textparam28 = new TextParameters(
          data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam nisl orci. Proin faucibus odio tellus, ut tincidunt magna dictum id. Integer porttitor eget magna sit amet feugiat. Ut at ante lobortis, condimentum purus a, auctor urna. Sed volutpat velit accumsan dolor ullamcorper, non condimentum est tristique. Sed sit amet imperdiet ipsum. Nulla ac ante in lorem hendrerit malesuada. Aliquam imperdiet felis velit, sed feugiat elit blandit sed. Cras eget sagittis ante. Maecenas pharetra erat non ullamcorper vestibulum. Cras varius erat tortor, non cursus magna molestie semper. Maecenas ullamcorper a nisl non iaculis. Duis nibh ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam nisl orci. Proin faucibus odio tellus, ut tincidunt magna dictum id. Integer porttitor eget magna sit amet feugiat. Ut at ante lobortis, condimentum purus a, auctor urna. Sed volutpat velit accumsan dolor ullamcorper, non condimentum est tristique. Sed sit amet imperdiet ipsum. Nulla ac ante in lorem hendrerit malesuada. Aliquam imperdiet felis velit, sed feugiat elit blandit sed. Cras eget sagittis ante. Maecenas pharetra erat non ullamcorper vestibulum. Cras varius erat tortor, non cursus magna molestie semper. Maecenas ullamcorper a nisl non iaculis. Duis nibh ipsum.',
          fontSize: 16,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.normal,
          textAlign: TextAlign.left
        );
         

          onFlatButtonPress29 (bool b){ 
          print(b); 
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => Page1()));

          } 
          onFlatButtonLongPress29 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject29 = FlatButtonParameters(
          child:Text('Purchase'),
          color:Colors.pink,
          textColor:Colors.white,
          hoverColor: Colors.pink,
          width: 150,
          focusColor: Colors.pink,
          height: 40,
          highlightColor: Colors.pink,
          splashColor: Colors.pink

          );
      
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
backgroundColor: Colors.white,
body: Padding(
padding: const EdgeInsets.all(0.0),
child: Padding(
padding: const EdgeInsets.all(30.0),
child: SingleChildScrollView(
child: Column(
children: <Widget>[
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:CustomImage(data: ImageObj126),),
],),
),
Padding(
padding: const EdgeInsets.only(top:30,bottom:30),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam27)),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam28)),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30),
child: Row(children: [
],),
),
Padding(
padding: const EdgeInsets.only(bottom:30),
child: Row(children: [
Expanded(flex: 1,child:customFlatButton(buttonFlatObject29, onFlatButtonPress29, onFlatButtonLongPress29),),
 ],),
),
], 
)  
))))); 
} 
}