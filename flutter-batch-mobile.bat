@echo off
echo  Welcome to Flutter

cd flutter/api_demo
flutter run
cd flutter/api_demo/android && ./gradlew clean && pause>nul
@pause