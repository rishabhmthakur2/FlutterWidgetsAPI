import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-floatingActionButton.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
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

                  onFloatButtonPress(bool b){
                  print(b);
                  }
                  Floatingactionbuttonparam btnFloatObject = Floatingactionbuttonparam(
                  child: Icon(Icons.list),
                  foregroundColor: Colors.green,
                  backgroundColor: Colors.blue,
                  mini: false,
                  shape: CircleBorder(),
                  hoverColor: Colors.red,
                  );
              

              DropDownParameters dropdownObject = DropDownParameters(
              itemsList: ['One', 'Two'],
              hintText: 'Hint',
              listType: 'Text',
              fillColor: Colors.red,
              borderRadius: 20,
              width: 10,
              textColor: Colors.blue,
              itemsBgColor: Colors.black,
              shadowColor: Colors.blue,
              shadowBlurRadius: 10,
              shadowSpreadRadius: black,
              ); 
              onSelect(int i,String s){ 
              print(i); 
              print(s); 
              }
          
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
customFloatingActionButton(btnFloatObject, onFloatButtonPress),
CustomDropdownButton(dropdownObject,onSelect),
 ],),)),),),);}}  