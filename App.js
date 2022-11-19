import React from 'react';
import {Text} from 'react-native';
import Route from './Screens/Navigation/Route';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <RootSiblingParent>
      <Route />
    </RootSiblingParent>
  );
};

export default App;
