# Reactnative.github.io
# done this Assignment before the deadline 
step by step explaination of this assignment which was created by Avnish Kumar Paliwal


Set up a new React Native project:

The first step is to create a new React Native project using the react-native init command.
We navigate to the project directory using cd.
This sets up the basic structure of a React Native project.
Install required dependencies:

We need to install several dependencies to enable the required functionality in our app.
The dependencies include react-native-maps, @react-native-community/geolocation, react-navigation, react-navigation-stack, react-native-gesture-handler, react-native-reanimated, and react-native-safe-area-context.
These libraries provide map integration, geolocation services, navigation capabilities, and UI components.
Create the login screen:

We create a new file called LoginScreen.js to define the login screen component.
The component is a functional component that uses the useState hook to manage the state of the user ID and password fields.
The handleLogin function is called when the user clicks the login button.
Inside handleLogin, you can add your own logic to validate user credentials.
Upon successful login, the navigation.navigate function is used to navigate to the home screen.
Create the home screen:

We create a new file called HomeScreen.js to define the home screen component.
The component is a functional component that uses the useState and useEffect hooks.
Inside the useEffect hook, we call Geolocation.getCurrentPosition to retrieve the current user's location.
The currentLocation state is updated with the latitude and longitude obtained from the geolocation service.
The MapView component from react-native-maps is used to display the map.
The Marker component is used to display a marker on the map at the user's current location.
Update the App.js file:

The App.js file is the entry point of the app.
We import the necessary components and libraries, including NavigationContainer and createStackNavigator from react-navigation.
We define a stack navigator using createStackNavigator.
The stack navigator is configured with two screens: the login screen and the home screen.
The NavigationContainer wraps the stack navigator and provides the navigation functionality.
Run the app:

We start the Metro bundler using the npx react-native start command.
In a separate terminal, we run the app on either an Android or iOS device/emulator using the npx react-native run-android or npx react-native run-ios command.
The app is launched on the device/emulator, and you can interact with the login and map functionalities.
