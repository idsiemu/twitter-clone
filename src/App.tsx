import React, { useEffect} from 'react';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    // SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
        <Navigation />
      </Provider>
  );
};

export default App;