import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-floatingActionButton.dart';
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

                  child: Widget,

                  foregroundColor: Colors.Red,

                  backgroundColor: Colors.Black,

                  mini: true,

                  shape: CircleBorder(),

                  hoverColor: Colors.Blue,

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
customFloatingActionButton(btnFloatObject, onFloatButtonPress),
 ],),)),),),);}}  