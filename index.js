import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/index";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
