import 'package:flutter/material.dart';
import 'dart:ui'; 
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-textField.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-dropdownButton.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-flipcard.dart';
void main() => runApp(BoilerPlate());
class BoilerPlate extends StatefulWidget 
{ 
@override 
_BoilerPlate createState() => _BoilerPlate();
}
class _BoilerPlate extends State<BoilerPlate> {
 @override
  Widget build(BuildContext context) { 

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
              hintText: 'Hint',
              listType: 'Text',
              fillColor: Colors.red,
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
          

          onclickFlipCardBtn(int nIndex, String sText) {
          print(nIndex);
          print(sText);
          } 
          MaterialCardData FlipObj1 = new MaterialCardData( 
          title: 'Lionel Messi', 
          subtitle: 'Greatest of all Time',
          containerHeight: 290,
          containerWidth: 250,
          containerDecoration: BoxDecoration( 
          boxShadow: 
          [ BoxShadow( 
          color: Colors.white, blurRadius: 10, 
          offset: Offset.zero),
          ], 
          borderRadius: BorderRadius.circular(20), 
          color: Colors.grey, ), 
          textStyle1: TextStyle( 
          color: Colors.black, 
          fontSize:20, 
          fontWeight: FontWeight.bold, 
          ), 
          textStyle2: TextStyle( 
          color: Colors.black, 
          fontSize: 16, 
          ), 
          textStyle3: TextStyle( 
          color: Colors.white,
          fontSize: 16, 
          ), 
          btnText:'Click Me', 
          btnTextColor: Colors.black, 
          btnColor: Colors.black, 
          margin1: 0, 
          padding1: 0,
          imgHeight: 170,
          imgWidth: 170,
          imgType: "Network",
          imgPath: 'https://www.freewalldownload.com/lionel-messi/beautiful-lionel-messi-hd-free-football-soccer-player-background-mobile-desktop-download-photos.jpg',
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
CustomTextField(params: finalTextObj, callbackTextfield: onTextSubmit),
SizedBox(height:20),
CustomDropdownButton(dropdownObject,onSelect),
SizedBox(height:20),
customFlipCardWidget(FlipObj1, onclickFlipCardBtn),
 ],),)),),),);}}  