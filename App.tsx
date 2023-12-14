import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import React from 'react';
import store from './redux/store';
import HomePage from './pages';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
