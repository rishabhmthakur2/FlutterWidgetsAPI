import 'package:flutter/material.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart';
import 'package:rapid_widgets_library/custom-appBar.dart';
import 'package:rapid_widgets_library/custom-bottomnavbar.dart';
import 'package:rapid_widgets_library/custom-drawer.dart';
import 'package:rapid_widgets_library/custom-image.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-compositeCard.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-compositeCard.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-compositeCard.dart';
import 'package:rapid_widgets_library/widget-classesUsed.dart'; 
import 'package:rapid_widgets_library/custom-compositeCard.dart';
void main() => runApp(Page3());
class Page3 extends StatelessWidget {
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
 

                  List<BottomNavigationBarItem> bottomnavitems = [];
                  BottomNavigationBarItem bottomnavitem1= new BottomNavigationBarItem(
                    icon: Image.network('http://104.40.75.137:9003/assets/cms/bottomnav_home.png',height: 20,width: 20,),
                    title: Text('Home',style: TextStyle(fontSize: 14)),
                  );
                  BottomNavigationBarItem bottomnavitem2= new BottomNavigationBarItem(
                    icon: Image.network('http://104.40.75.137:9003/assets/cms/bottomnav_bookmark.png',height: 20,width: 20,),
                    title: Text('Bookmark',style: TextStyle(fontSize: 14)),
                  );
                  BottomNavigationBarItem bottomnavitem3= new BottomNavigationBarItem(
                    icon: Icon(Icons.search,color: Colors.black,size: 20,),
                    title: Text('Search',style: TextStyle(fontSize: 14),),
                  );
                  BottomNavigationBarItem bottomnavitem4= new BottomNavigationBarItem(
                    icon: Image.network('http://104.40.75.137:9003/assets/cms/bottomnav_profile.png',height: 20,width: 20,),
                    title: Text('Profile',style: TextStyle(fontSize: 14),),
                  );
                  bottomnavitems.add(bottomnavitem1);
                  bottomnavitems.add(bottomnavitem2);
                  bottomnavitems.add(bottomnavitem3);
                  bottomnavitems.add(bottomnavitem4);
                  BottomNavBarParameters param = new BottomNavBarParameters(
                      items: bottomnavitems,
                      selectedItemColor: Colors.black,
                      unselectedItemColor: Colors.black,
                      backgroundColor: Color(0xffF9F9F9),
                      showUnselectedLabels: true,
                      showSelectedLabels: true,
                  );
            

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
        src:'http://104.40.75.137:9003/assets/cms/image3.png',
         semanticLabel: 'Random Network', 
         imageType: 'Network', 
         height: 302, width: 414);
         

              List<CustomcompositeCardParameters> listcards5 = [];
                  CustomcompositeCardParameters card15 = new CustomcompositeCardParameters(
                      flexColumn1: 6,
                      flexColumn2: 4,
                      cardColor: Colors.white,
                      rightHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(right: 18.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Align(
                                  alignment: Alignment.centerRight,
                                  child: Image.network('http://104.40.75.137:9003/assets/cms/image3.png',height: 102,width: 65,)
                              ),
                              SizedBox(height: 19,),
                              Container(
                                height: 41,
                                width: 123,
                                child: FlatButton(child: Text('Add to Cart',
                                  style: TextStyle(color: Colors.white, fontSize: 16, fontFamily: 'Segoe UI'),),
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(21.0)),
                                  disabledColor: Color(0xffD93954),),
                              )
                            ],
                          ),
                        ),
                      ],
                      leftHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(left: 13.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Text('title1',textAlign: TextAlign.left,
                              style: TextStyle(fontSize: 20,color: Color(0xff707070)),),
                              SizedBox(height: 4,),
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Text('subtitle1',
                                  style: TextStyle(fontSize: 14.0,color: Color(0xff707070)),),
                              ),
                              SizedBox(height: 46,),
                              Row(
                                children: <Widget>[
                                  Text('3',
                                  style: TextStyle(fontSize: 20.0, color: Color(0xff707070)),),
                                  SizedBox(width: 10,),
                                  Text('5',
                                  style: TextStyle(color: Color(0xffD93954), decoration: TextDecoration.lineThrough,fontSize: 20.0),),
                                ],
                              )
                            ],
                          ),
                        ),
                      ],
                  );
                  listcards5.add(card15);
              

              List<CustomcompositeCardParameters> listcards6 = [];
                  CustomcompositeCardParameters card16 = new CustomcompositeCardParameters(
                      flexColumn1: 6,
                      flexColumn2: 4,
                      cardColor: Colors.white,
                      rightHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(right: 18.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Align(
                                  alignment: Alignment.centerRight,
                                  child: Image.network('http://104.40.75.137:9003/assets/cms/image3.png',height: 102,width: 65,)
                              ),
                              SizedBox(height: 19,),
                              Container(
                                height: 41,
                                width: 123,
                                child: FlatButton(child: Text('Add to Cart',
                                  style: TextStyle(color: Colors.white, fontSize: 16, fontFamily: 'Segoe UI'),),
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(21.0)),
                                  disabledColor: Color(0xffD93954),),
                              )
                            ],
                          ),
                        ),
                      ],
                      leftHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(left: 13.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Text('card2',textAlign: TextAlign.left,
                              style: TextStyle(fontSize: 20,color: Color(0xff707070)),),
                              SizedBox(height: 4,),
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Text('card2',
                                  style: TextStyle(fontSize: 14.0,color: Color(0xff707070)),),
                              ),
                              SizedBox(height: 46,),
                              Row(
                                children: <Widget>[
                                  Text('2',
                                  style: TextStyle(fontSize: 20.0, color: Color(0xff707070)),),
                                  SizedBox(width: 10,),
                                  Text('2',
                                  style: TextStyle(color: Color(0xffD93954), decoration: TextDecoration.lineThrough,fontSize: 20.0),),
                                ],
                              )
                            ],
                          ),
                        ),
                      ],
                  );
                  listcards6.add(card16);
              

              List<CustomcompositeCardParameters> listcards7 = [];
                  CustomcompositeCardParameters card17 = new CustomcompositeCardParameters(
                      flexColumn1: 6,
                      flexColumn2: 4,
                      cardColor: Colors.white,
                      rightHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(right: 18.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Align(
                                  alignment: Alignment.centerRight,
                                  child: Image.network('http://104.40.75.137:9003/assets/cms/image3.png',height: 102,width: 65,)
                              ),
                              SizedBox(height: 19,),
                              Container(
                                height: 41,
                                width: 123,
                                child: FlatButton(child: Text('Add to Cart',
                                  style: TextStyle(color: Colors.white, fontSize: 16, fontFamily: 'Segoe UI'),),
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(21.0)),
                                  disabledColor: Color(0xffD93954),),
                              )
                            ],
                          ),
                        ),
                      ],
                      leftHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(left: 13.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Text('card3',textAlign: TextAlign.left,
                              style: TextStyle(fontSize: 20,color: Color(0xff707070)),),
                              SizedBox(height: 4,),
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Text('card3',
                                  style: TextStyle(fontSize: 14.0,color: Color(0xff707070)),),
                              ),
                              SizedBox(height: 46,),
                              Row(
                                children: <Widget>[
                                  Text('4',
                                  style: TextStyle(fontSize: 20.0, color: Color(0xff707070)),),
                                  SizedBox(width: 10,),
                                  Text('3',
                                  style: TextStyle(color: Color(0xffD93954), decoration: TextDecoration.lineThrough,fontSize: 20.0),),
                                ],
                              )
                            ],
                          ),
                        ),
                      ],
                  );
                  listcards7.add(card17);
              

              List<CustomcompositeCardParameters> listcards8 = [];
                  CustomcompositeCardParameters card18 = new CustomcompositeCardParameters(
                      flexColumn1: 6,
                      flexColumn2: 4,
                      cardColor: Colors.white,
                      rightHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(right: 18.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Align(
                                  alignment: Alignment.centerRight,
                                  child: Image.network('http://104.40.75.137:9003/assets/cms/image3.png',height: 102,width: 65,)
                              ),
                              SizedBox(height: 19,),
                              Container(
                                height: 41,
                                width: 123,
                                child: FlatButton(child: Text('Add to Cart',
                                  style: TextStyle(color: Colors.white, fontSize: 16, fontFamily: 'Segoe UI'),),
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(21.0)),
                                  disabledColor: Color(0xffD93954),),
                              )
                            ],
                          ),
                        ),
                      ],
                      leftHandWidgets: [
                        Padding(
                          padding: const EdgeInsets.only(left: 13.0, bottom: 20.5),
                          child: Column(
                            children: <Widget>[
                              Text('card4',textAlign: TextAlign.left,
                              style: TextStyle(fontSize: 20,color: Color(0xff707070)),),
                              SizedBox(height: 4,),
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Text('card4',
                                  style: TextStyle(fontSize: 14.0,color: Color(0xff707070)),),
                              ),
                              SizedBox(height: 46,),
                              Row(
                                children: <Widget>[
                                  Text('2',
                                  style: TextStyle(fontSize: 20.0, color: Color(0xff707070)),),
                                  SizedBox(width: 10,),
                                  Text('3',
                                  style: TextStyle(color: Color(0xffD93954), decoration: TextDecoration.lineThrough,fontSize: 20.0),),
                                ],
                              )
                            ],
                          ),
                        ),
                      ],
                  );
                  listcards8.add(card18);
              
return MaterialApp(
debugShowCheckedModeBanner: false,
home: Scaffold(
appBar:customAppBar(appBarIcons,paramobject),
drawer: CustomDrawer(drawerList,onclickDrawer,user1),
bottomNavigationBar: BottomNavBar(param),
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
Expanded(flex: 1,child:CustomImage(data: ImageObj10),),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:33.0),
child: Row(children: [
Expanded(flex: 1,child:compositeCard(listcards5),),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:33.0),
child: Row(children: [
Expanded(flex: 1,child:compositeCard(listcards6),),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:33.0),
child: Row(children: [
Expanded(flex: 1,child:compositeCard(listcards7),),
],),
),
Padding(
padding: const EdgeInsets.only(bottom:33.0),
child: Row(children: [
Expanded(flex: 1,child:compositeCard(listcards8),),
],),
),
Padding(
padding: const EdgeInsets.all(0.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
Expanded(flex: 1,child:Container()),
],),
),
Padding(
padding: const EdgeInsets.all(25.0),
child: Row(children: [
 ],),
),
], 
)  
))))); 
} 
}