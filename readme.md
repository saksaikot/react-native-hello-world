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
  - # 02. Styling native component
    - need to use StyleSheet to give style a component
    - not same as css but the properties are same as react css
    - inline css `{propertyName:value}`
    - `flex:1` is display flex
    - `alignItems` is align in x direction, `justifyContent` is aligned in y direction, value can be `center|flex-start|space-between` and see more in css help
    - `alignItems` and `justifyContent` have value `center` put content in center, `flex-start` put content at start, `flex-end` at end, `space-between` will take full space and evenly put space between elements,
    - `flexDirection:column` default is column, contents will place in y direction form top to bottom
    - `flexDirection:row`, contents will place in x direction from left to right
  - # 03. Managing state with text input and button

    - StyleSheet can be just one level object `style.container` not `style.app.container`
    - Button have `onPress` event props
    - used useState hook to have placeInput and places state
    - see example here https://www.reactnative.guide/8-styling/8.2-common-styles-mixins.html
    - css class like style

      ```js
      style={[styles.one,styles.two]}

      ```

  - # 04. Creating component
    - under src > components created placeView folder
    - there are three files `place.js`, `place.style.js`, `places.js`
    - styles are placed in `place.style.js`
    - vscode is not auto completing need to find extension
  - # 05. Touchable and Scrollable
    - wrapped `place.js` in Pressable component to make it touchable
    - button is by default touchable
    - to make other components touchable we need to wrap the component with Touchable child component, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback
    - there is another component we can use to make component touchable, that is Pressable
    - they all have props, see the documentation
    - used ScrollView instead of View in `app.js`
    - ScrollView is not performance centric, need to use another component
  - # 06. Dynamic list
    - used `FlatList` instead of `ScrollView`
    - required data property, data need array of object with key and value
    - ```js
      [
        {
          key: 1,
          value: 1,
        },
        {
          key: 2,
          value: 2,
        },
      ];
      ```
    - needed renderItem accept a function with info parameter
    - info.item will be the item of given data `info.item.data`
    - no need to use Places component, directly used Place component
  - # 07. Cleaning app.js
    - Created two separate component `FlatPlacesList.js` and `PlaceInput.js`
    - created separate style `placeInput.style.js` for `PlaceInput` component
    - created separate style `app.style.js` for `App.js`
    - removed unused imports
  - # 08. Adding modal
    - Modal is not working as expected in web, working in android
    - Modal is fixed by conditional rendering
    - added styles
  - # 09. Completing modal by adding image and other details
    - created new `ResponsiveImage` element , react native can not use style width:100% and height: auto
    - there is also a bug where for web `Image.resolveAssetSource` don't work and if uri is present then `Image.getSize` needs the uri only not full image object
    - image must have width and height
    - used `View` onLayout props to get the size of image container
    - place added image, used flex:1, and justifyContent:space-between
