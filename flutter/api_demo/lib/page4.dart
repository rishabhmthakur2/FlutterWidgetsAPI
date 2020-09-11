import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'package:rapid_widgets_library/custom-text.dart';
import 'package:rapid_widgets_library/custom-linearProgressIndicator.dart'; 
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-progress-card.dart';
import 'package:rapid_widgets_library/custom-text.dart';
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
        
onclick11(String sText) { print(sText); }
        CustomImageContents ImageObj111 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/image4.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 158, width: 235);
         

        TextParameters textparam12 = new TextParameters(
          data: 'My Course',
          fontSize: 26,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.start
        );
         

                CustomLinearProgressBarParameters linearBarParameters =
                    new CustomLinearProgressBarParameters(
                        value: 0.4,
                        backgroundColor: Colors.undefined,
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.blue));
                    callback(dynamic s, int i) {
                    }
                    MaterialCardData data = new MaterialCardData(
                      title: 'Programming with Javascript',
                      subtitle: 'Chapter 3-The Period',
                      bodyText: 'JavaScript is a powerful and versatile scripting language used in web applic...',
                      footerText: 'Progress',
                      btnGrpList1: [
                        FlatButton(
                          shape: new RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(30.0)),
                          disabledColor: Color(0xffD93954),
                          color: Color(0xffD93954),
                          child: Text(
                            'Continue Course',
                            style: TextStyle(
                                fontFamily: 'Segoe UI',
                                fontSize: 12.0,
                                color: Colors.white),
                          ),
                          onPressed: () {},
                        )
                      ],
                      btnGrpList2: [
                        customLinearProgressBarIndicator(linearBarParameters),
                      ]
                    );
            

        TextParameters textparam14 = new TextParameters(
          data: 'Learning Type',
          fontSize: 26,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.center
        );
         

                      callbackSolid15(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters15 = new MaterialCardData(
                            title: 'Ebooks',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.red
                          );
                  

                      callbackSolid16(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters16 = new MaterialCardData(
                            title: 'Card 2',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.yellow
                          );
                  

                      callbackSolid17(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters17 = new MaterialCardData(
                            title: 'Card 3',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.blue
                          );
                  

                      callbackSolid18(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters18 = new MaterialCardData(
                            title: 'card 4',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.grey
                          );
                  
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
appBar:customAppBar(appBarIcons,paramobject),
drawer: CustomDrawer(drawerList,onclickDrawer,user1),
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
Expanded(flex: 1,child:CustomImage(data: ImageObj111),),
],),
),
Padding(
padding: const EdgeInsets.all(30.0),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam12)),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(children: [
Expanded(flex: 1,child:customProgressCard(data, callback),),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam14)),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:customSolidCard15(solidParameters15, callbackSolid15),),
Expanded(flex: 1,child:customSolidCard16(solidParameters16, callbackSolid16),),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:customSolidCard17(solidParameters17, callbackSolid17),),
Expanded(flex: 1,child:customSolidCard18(solidParameters18, callbackSolid18),),
 ],),
),
], 
)  
))))); 
} 
}