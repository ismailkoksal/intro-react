import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomePage from './views/HomePage';
import ResultPage from "./views/ResultPage";
import VisitPage from "./views/Visit";

const MainNavigator = createStackNavigator({
  Search: {screen: HomePage},
  Result: {screen: ResultPage},
  Visit: {screen: VisitPage}

});

const App = createAppContainer(MainNavigator);

export default App;
