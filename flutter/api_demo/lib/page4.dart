import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-solid-card.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-solid-card.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-solid-card.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-solid-card.dart';
void main() => runApp(Page4());
class Page4 extends StatelessWidget {
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
class _BoilerPlate extends State<BoilerPlate>{
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
                                      leading: Icon(Icons.arrow_back, color: Color(0xff707070),),
                                      title: Text('Featured',
                                      style: TextStyle(fontSize: 26, color: Color(0xff707070)),));
                                  List<Widget> appBarIcons = [
                                    IconButton(
                                      icon: Image.network('http://104.40.75.137:9003/assets/cms/cart.png',width: 20,height: 14,),
                                      onPressed: () {},
                                    ),
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
        

                      callbackSolid0(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters0 = new MaterialCardData(
                            title: 'card1',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'img1',
                            containerbgColor: Colors.red
                          );
                  

                      callbackSolid1(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters1 = new MaterialCardData(
                            title: 'card2',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'img2',
                            containerbgColor: Colors.yellow
                          );
                  

                      callbackSolid2(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters2 = new MaterialCardData(
                            title: 'card3',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'img3',
                            containerbgColor: Colors.grey
                          );
                  

                      callbackSolid3(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters3 = new MaterialCardData(
                            title: 'card4',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'img4',
                            containerbgColor: Colors.orange
                          );
                  
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
appBar:customAppBar(appBarIcons,paramobject),
drawer: CustomDrawer(drawerList,onclickDrawer,user1),
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
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(30.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:customSolidCard(solidParameters0, callbackSolid0),),
SizedBox(width:30),
Expanded(flex: 1,child:customSolidCard(solidParameters1, callbackSolid1),),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:customSolidCard(solidParameters2, callbackSolid2),),
SizedBox(width:30),
Expanded(flex: 1,child:customSolidCard(solidParameters3, callbackSolid3),),
 ],),
),
], 
)  
))))); 
} 
}