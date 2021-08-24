import React from 'react';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/Store';
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;