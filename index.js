/**
 * @format
 */
import { AppRegistry, YellowBox } from "react-native";

import App from "./src/App";

YellowBox.ignoreWarnings(["Remote debugger"]);
AppRegistry.registerComponent("CultureShock", () => App);
