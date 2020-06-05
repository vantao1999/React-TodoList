/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import TodoAppContainer from './src/containers/todoApp';
import App from './src/containers/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
