import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart'; 
import 'page3.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-text.dart';
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
        

        TextParameters textparam0 = new TextParameters(
          data: 'hi',
          fontSize: 20,
          color: Colors.black,
          fontStyle: FontStyle.normal,
          fontFamily: 'roboto',
          fontWeight: FontWeight.normal,
          textAlign: TextAlign.right
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
Expanded(flex: 1,child:customText(textparam0)),
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
Expanded(flex: 1,child:Container()),
SizedBox(width:30),
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.only(left:30,right:30,bottom:30),
child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
Expanded(flex: 1,child:Container()),
SizedBox(width:30),
Expanded(flex: 1,child:Container()),
 ],),
),
], 
)  
))))); 
} 
}