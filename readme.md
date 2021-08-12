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

# 03. Redux refresh

- # 01. Complexity of managing state

  - often we may need to access a child component state that is not a direct children or that state need to put in the root component. for bigger project this can be very difficult to make the state up for many component.
  - the solution is to have a global state manager or global store
  - redux provide this global store feature

- # 2. Redux flow

  - react component->dispatch->Action->Reducer->Update state->[[Store]]->trigger Automatic Subscription-> pass the state as props -> react component

- # 3. Store and Reducer

  - `npm init --yes` to initialize npm
  - `npm i redux` to install redux
  - in `index.js` import redux.
  - `const redux=require('redux')`
  - we need to create store, and store need a reducer function
  - a reducer function takes two object, state and action
  - `const reducer=(state,action)=>return state;`
  - the state parameter can have default state initialization,
    like (state=initState,action)
  - this reducer function need to pass in createStore method of redux to create the store
  - `redux.createStore(reducer)`, just the function reference.
  - then if we want to see or get the current state then call `store.getState()`

- # 4. Dispatching Action

  - `store` have a method called dispatch
  - dispatch takes an object
  - the `type` key is required
  - we put the action type name in `type` key, like INCREMENT , DECREMENT
  - we can also pass an object optionally
  - the key for optional object can be anything but for convenience we use payload as key
  - so call dispatch like `store.dispatch({type:'INCREMENT_NUM',payload:{num:100}})`
  - the reducer will perform separate action depending on type.
  - this dispatch object will received by reducer action variable or parameter
  - so in reducer function
    ```js
    action = { type: "INCREMENT_NUM", payload: { num: 100 } };
    ```
  - now in reducer we can use switch case to perform task depending on action.type
  - then finally return the state
  - when returning state alway make a copy of state using spread operation then update the state.
  - `return {...state, number:state.number+1}`
  - switch case basic:

    ```js
    switch (variableToCheck) {
      case "ifMatchThis":
      //perform tasks
      //return or break

      case "match2":
      //...same

      default:
      //return
    }
    ```

  - 5. Store subscription
    - call subscribe after store and before dispatch
    - then each time dispatch is called then the given function in subscribe will be call

- # 04. Using redux in our app

  - # 1. Creating and connecting redux store

    - Moved `App.js`, under `components`>`MainComponent.js`
    - created `redux` folder under `src`
    - created `actionType`, `reducer` and `store` file
    - created store with the reducer
    - in App.js the MainComponent is wrapped in Provider component of react-redux
    - passed store object as store attribute

  - # 2-3. Dispatching action to add place and delete place

    - imported `useSelector,useDispatch` from react-redux
    - to get the state property ` const places = useSelector((state) => state.places);`
    - to use the dispatch `const dispatch=useDispatch()`
    - adding action , `const addPlace=place=> dispatch(actions.addPlace(place))`
    - or can call the dispatch directly
    - `dispatch(actions.addPlace(place))`

  - # 4. dispatching in actionCreator
  - imported dispatch from store
  - used dispatch in actionCreator

- # 06. Using third party library for icons

  - # 1. Adding icon library

    - run `npm run eject` to separate android and web configuration
    - before running `npm run eject` it is important to commit any changes and push the commit
    - while running android project name will be asked
    - the project name will be the reverse domain name of the app
    - we named it io.helloWorld.client which is reverse of client.helloWorld.io
    - after eject we need to `npm run web` instead of `npm start`
    - we need to install `npm install --save react-native-vector-icons`
    - then for android configuration we need to add this line `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` in `android/app/build.gradle` file where `apply from` line are.
    - then import Icon from this library
    - `import Icon from "react-native-vector-icons/FontAwesome5";`
    - use of Icon Component
    - `<Icon name="name-of-icon" size={50} color="red" />`

  - # 2. Completing icon
    - wrap Icon component with `Pressable` component
    - add Button `onPress` attribute to `Pressable`
    - for delete button used `name='times-circle'`
    - added style `cursor:"pointer"`

- # 07. navigation

  - # 01. Setting up navigation

    - follow reactNavigation.org more installation details https://reactnavigation.org/docs/getting-started/
    - exit from server if running
    - install react-navigation/native `npm install @react-navigation/native`
    - install dependency `expo install react-native-screens react-native-safe-area-context`
    - code did not compiled, missing `react-navigation/stack`
    - need to install react native stack `npm install @react-navigation/stack`
    - uses:
      - first import at first line of the App component `import "react-native-gesture-handler";`
      - import NavigationContainer `import { NavigationContainer } from "@react-navigation/native";`
      - wrap all Component under NavigationContainer component
      - import createStackNavigator from react-navigation/stack `import { createStackNavigator } from "@react-navigation/stack";`
      - make Stack component from createStackNavigator `const Stack = createStackNavigator();`
      - ## to make stack component create component <Stack.Screen> with name and component property, name is the name of component and component is the imported component.Then wrap it with Stack.Navigator
        ```jsx
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
        ```
      - Created Login component under login folder

  - # 02. Navigate to a Screen

    - create a `NavigationTab` component under `navigationTab` folder
    - add a button with `title` Login and `onPress` call props.navigation.navigate('login');
    - add the `NavigationTab` component to `Stack.Screen`

  - # 03. Tab navigation

    - install react-navigation/bottom-tabs `npm install @react-navigation/bottom-tabs`
    - import `import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";`
    - create Tab component `const Tab = createBottomTabNavigator();`
    - Inside `Tab.Navigator` create the `Tab.Screen`

    ```js
    <Tab.Navigator>
      <Tab.Screen name="Find Places" component={FindPlaces} />
      <Tab.Screen name="Share Places" component={SharePlaces} />
    </Tab.Navigator>
    ```

    - `Tab.Navigator` must wrapped with `NavigationContainer`
    - but here it is already in App Component
    - here only return `Tab.Navigator` element otherwise tab will not work properly
    - ## can not use cursor:"pointer" as style

  - # 04. Adding Icons in tab
    - See icon details or name at https://oblador.github.io/react-native-vector-icons/
    - import Icons from ionicons `import Icons from "react-native-vector-icons/Ionicons";`
    - use `options` attribute to add icon option
    - `options` is an object, one property of this option is `tabBarIcon` which takes a function with `{size,color}` parameter.
    - there we can return our icon object
    - `<Icons name="map" color={color} size={size} />`

- # 08. Adding image picker

  - # 1. Splitting MainComponent
    - moved `MainComponent.js` to `homeTabs/FindPlaces.js`
    - moved `places` view and modal to SharePlaces
  - # 2. Setting up Image picker

        - Image picker doc https://docs.expo.dev/versions/latest/sdk/imagepicker/
        - Installation in bare React Native projects
          - `expo install expo-image-picker`
          - # Configure for Android
            - edit `.\android\app\src\main\AndroidManifest.xml`
            - add these permission if is not already there
              ```jsx
                <uses-permission android:name="android.permission.CAMERA" />
                <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
                <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
              ```
            - add activity within application
              -
                ```jsx
                <activity android:name="com.theartofdev.edmodo.cropper.CropImageActivity" android:theme="@style/Base.Theme.AppCompat" />


                ```
            - create a `PickImage` Component with a `Button` under `pickImage` folder

  - # 3&4.Building Share Place Component

    - import imagePicker `import * as imagePicker from "expo-image-picker";`
    - install await-of `npm i await-of ` to handle async-await without try/catch block
    - import await-of `import { of } from "await-of";`
    - use async `imagePicker.launchImageLibraryAsync(options)` to get image from user library
    - ```js
      const options = {
        mediaTypes: imagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      };
      ```
    - swap FindPlace and SharePage , that was a mistake
    - ## Note: always put text inside Text component

- # 10. managing data using rest api
  - use firebase library to load place and add place
  - used react-native-dotenv
  - used await-of library
  - for getAllAsArray return promise
  - firebase need to install using expo `expo install firebase`
  - to update expo-cli `npm install -g expo-cli`
