import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-flatButton.dart';
import 'package:rapid_widgets_library/custom-floatingActionButton.dart';
import 'package:rapid_widgets_library/custom_switch.dart';
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

        AppBarParameters paramobject = new AppBarParameters(
          elevation: 10,
          bottomOpacity: 0.5,
          toolbarOpacity: 0.5,
          titleSpacing: 0.5,
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
          icon:  Icon(Icons.home),
          onPressed: () {},
          ),
          IconButton(
          icon:  Icon(Icons.list),
          onPressed: () {}, 
          ), ];

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
          } 
          onFlatButtonLongPress0 (bool b){ 
          print(b); 
          } 
          FlatButtonParameters buttonFlatObject0 = FlatButtonParameters(
          child:Text('Button'),
          color:Colors.red,
          textColor:Colors.white,
          hoverColor: Colors.black,
          width: 20,
          focusColor: Colors.yellow,
          height: 20,
          highlightColor: Colors.grey,
          splashColor: Colors.black
          );
      

                  onFloatButtonPress1 (bool b){
                  print(b);
                  }
                  Floatingactionbuttonparam btnFloatObject1 = Floatingactionbuttonparam(
                  child: Icon(Icons.search),
                  foregroundColor: Colors.blue,
                  backgroundColor: Colors.red,
                  mini: false,
                  shape: CircleBorder(),
                  hoverColor: Colors.yellow,
                  );
              

        onSwitchTap2 (bool sBool) { 
        print(sBool); 
        } 
        SwitchParameters finalSwitchObj2 = new SwitchParameters(
        inactiveTrackColor: Colors.red, 
        activeColor: Colors.yellow, 
        activeTrackColor: Colors.black
        );
    

          onclickFlipCardBtn3 (int nIndex, String sText) {
          print(nIndex);
          print(sText);
          } 
          MaterialCardData FlipObj13 = new MaterialCardData( 
          title: 'Flip Card', 
          subtitle: 'ST',
          containerHeight: 100,
          containerWidth: 100,
          containerDecoration: BoxDecoration( 
          boxShadow: 
          [ BoxShadow( 
          color: Colors.black, blurRadius: 2, 
          offset: Offset.zero),
          ], 
          borderRadius: BorderRadius.circular(10), 
          color: Colors.red, ), 
          textStyle1: TextStyle( 
          color: Colors.black, 
          fontSize:20, 
          fontWeight: FontWeight.bold, 
          ), 
          textStyle2: TextStyle( 
          color: Colors.red, 
          fontSize: 14, 
          ), 
          textStyle3: TextStyle( 
          color: Colors.green,
          fontSize: 12, 
          ), 
          btnText: 'Btn1', 
          btnTextColor: Colors.red, 
          btnColor: Colors.black, 
          margin1: 20, 
          padding1: 10,
          imgHeight: 70,
          imgWidth: 70,
          imgType: "Network",
          imgPath: 'https://cdn.britannica.com/75/75775-050-1FC4B34B/Colosseum-Rome.jpg',
          );
      
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
appBar:customAppBar(appBarIcons,paramobject),
drawer: CustomDrawer(drawerList,onclickDrawer,user1),
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
Expanded(flex: 1,child:customFlatButton(buttonFlatObject0, onFlatButtonPress0, onFlatButtonLongPress0),),
Expanded(flex: 1,child:customFloatingActionButton(btnFloatObject1, onFloatButtonPress1),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:CustomSwitch(param: finalSwitchObj2, callbackSwitch: onSwitchTap2),),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:customFlipCardWidget(FlipObj13, onclickFlipCardBtn3),),
 ],),
),
], 
)  
))))); 
} 
}