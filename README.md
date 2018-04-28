# Urcards

A basic React Native flashcards app for the [Udacity React Developer Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). This app has been tested for iOS only and focuses on meeting minimal functionality standards for the course. 

## Demo
<img src="https://github.com/tyhopp/urcards/blob/master/urcards-demo.gif" width="375px" alt="Demo for Urcards project" />

## Usage
- `git clone https://github.com/tyhopp/urcards`
- `cd urcards`

## Run
- `npm install`
- `npm start`
- Then scan the Expo QR code using the Expo Client app for [iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en).

--OR--

- Follow the prompt to launch the projects on the Xcode or Android simulators.

*Make sure you have CLI tools selected in Xcode to run*. 

## Debug
This project uses `remote-redux-devtools` by [zalmoxisus](https://github.com/zalmoxisus/remote-redux-devtools), whereby the Redux developer tools are made available at [http://remotedev.io/local/](http://remotedev.io/local/). React developer tools are available via the Expo client by enabling them in the developer menu. 

## Storage & Native Features
This project uses `redux-persist` by [rt2zz](https://github.com/rt2zz/redux-persist) to interact with the [AsyncStorage API](https://facebook.github.io/react-native/docs/asyncstorage.html) and store data locally on the device. [Expo push notifications](https://docs.expo.io/versions/latest/guides/push-notifications.html) are used to remind the user at 8AM every day to complete a quiz. 

## Credits

This project was built with [React Native](https://facebook.github.io/react-native/)/[Redux](https://github.com/reactjs/redux)/[Expo](https://expo.io/) and bootstrapped with [`create-react-native-app`](https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html), alongside the incredible work of many other open source contributors.

## License

MIT License

Copyright (c) 2018 Ty Hopp
