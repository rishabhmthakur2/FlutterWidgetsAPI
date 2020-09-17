import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart'; 
import 'page3.dart';
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
                                                builder: (context) => Page3()));
                                        
                                      }),
                                      title: Text('Hello Bhaskar!',
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
        
onclick6(String sText) { print(sText); }
        CustomImageContents ImageObj16 = new CustomImageContents(
        src:'http://104.40.75.137:9003/assets/cms/image4.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 300, width: 400);
         

        TextParameters textparam7 = new TextParameters(
          data: 'My Course',
          fontSize: 26,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.left
        );
         

                CustomLinearProgressBarParameters linearBarParameters =
                    new CustomLinearProgressBarParameters(
                        value: 0.4,
                        backgroundColor: Colors.grey,
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.green));
                    callback(dynamic s, int i) {
                    }
                    MaterialCardData data = new MaterialCardData(
                      title: 'Programming with JavaScript',
                      subtitle: 'Chapter 3 - The Period',
                      bodyText: 'JavaScript is a powerful and versatile scripting  language used in web applic...',
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
            

        TextParameters textparam9 = new TextParameters(
          data: 'Learning Type',
          fontSize: 26,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          textAlign: TextAlign.left
        );
         

                      callbackSolid10(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters10 = new MaterialCardData(
                            title: 'E-Books',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.red
                          );
                  

                      callbackSolid11(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters11 = new MaterialCardData(
                            title: 'Video Courses',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.yellow
                          );
                  

                      callbackSolid12(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters12 = new MaterialCardData(
                            title: 'Audio Books',
                            containerHeight: 53,
                            containerWidth: 135,
                            imgHeight: 145,
                            imgWidth: 145,
                            imgPath: 'http://104.40.75.137:9003/assets/cms/image5.png',
                            containerbgColor: Colors.orange
                          );
                  

                      callbackSolid13(dynamic s, int i) {
                          }
                          MaterialCardData solidParameters13 = new MaterialCardData(
                            title: 'Downloads',
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
Expanded(flex: 1,child:CustomImage(data: ImageObj16),),
],),
),
Padding(
padding: const EdgeInsets.all(30.0),
child: Row(children: [
Expanded(flex: 1,child:customText(textparam7)),
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
Expanded(flex: 1,child:customText(textparam9)),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:customSolidCard(solidParameters10, callbackSolid10),),
SizedBox(width:30),
Expanded(flex: 1,child:customSolidCard(solidParameters11, callbackSolid11),),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:customSolidCard(solidParameters12, callbackSolid12),),
SizedBox(width:30),
Expanded(flex: 1,child:customSolidCard(solidParameters13, callbackSolid13),),
 ],),
),
], 
)  
))))); 
} 
}