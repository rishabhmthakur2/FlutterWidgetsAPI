@echo off
echo  Welcome to Flutter

cd D:\Cms\NewAPI\FlutterWidgetsAPI\flutter\api_demo
flutter run
cd D:\Cms\NewAPI\FlutterWidgetsAPI\flutter\api_demo\android && ./gradlew clean && pause>nul
@pause