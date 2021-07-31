# react native multi-platform app development

# 01. Intro and setup

- # 01. What is react native

  - There are three types of apps in mobile
    - web app - run in browser
    - webview app - wrap inside webview app
    - native app - native app
  - React native
    - Js app get compiled in native app
      - for ios, android and web a
    - java,android, swift, kotlin, objective c to create native ios and android app

- # 02. Prerequisites and requirements

  - Prerequisites
    - Javascript
    - React
    - Redux
  - Requirements
    - Node
    - Code editor (VS Code)
    - Mobile device to test the application

- # 03. Creating First react native app

  - Search react native getting start in google
  - Visit https://reactnative.dev/docs/getting-started to get information
  - From left sidebar open `Setting up environment development`
  - Run `npm i -g expo-cli` to install expo-cli globally
  - Now to create a new project need to use `expo init ProjectName`
  - Create a HelloWorld project with blank template
  - in package.json there are new dependency other then the react dependency
  - react-native, expo, expo-status-bar
  - devDependency `babel/core`
  - `babel` will convert js code to native code

- # 04. Running application
  - npm start
  - install expo or expo client in mobile device
  - scan qr code and run the app in mobile app

# 02. React native basic

- # 01. React native components
  - The PC that used for developing and the device that is used for viewing the application need to connect in same wifi or network
  - Read the component documentation from https://reactnative.dev/docs/components-and-apis
  - we will learn `View`, `Text`,`TextInput`,`StyleSheet`
  - `View` is a container like div to contain other elements
  - `Text` is like p tag which display text
  - `TextInput` takes input.
    - there are props that can be passed in the element, are in the right side of documentation page
    - onChangeText , take a function with text parameter text=>console.log(text)
    - `value`, `value="default value"`
    - `placeholder='placeholder text'`
    - `keyboardType='default'` other value:
      - default
      - number-pad
      - decimal-pad
      - numeric
      - email-address
      - phone-pad
    - `style={StyleSheet.object}`
  - StyleSheet element
    - size in px in not need to include, same as react style, object name is like class name
      ```js
      const styles = StyleSheet.create({
        object: {
          height: 10,
          width: 30,
          backgroundColor: "#fff",
        },
      });
      ```
    - now we can use the style object like `{style.object}`
