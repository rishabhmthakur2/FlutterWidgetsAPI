@echo off
echo  Welcome to Flutter

cd D:\Cms\Backend\flutter-cms\flutter\demo
flutter run
cd D:\Cms\Backend\flutter-cms\flutter\demo\android && ./gradlew clean && pause>nul
@pause