@echo off
echo  Welcome to Flutter

cd ./flutter/demo
flutter run -d chrome
cd ./flutter/demo/android && ./gradlew clean && pause>nul
@pause