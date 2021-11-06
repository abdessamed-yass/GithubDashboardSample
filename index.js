/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import { AppRegistry } from 'react-native'
import Routes from './src/routes/Routes'
import React from 'react';
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Routes)
