@echo off
echo  Welcome to Flutter

cd ./flutter/demo
flutter run
cd ./flutter/demo/android && ./gradlew clean && pause>nul
@pause