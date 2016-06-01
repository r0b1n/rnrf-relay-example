import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import Relay from 'react-relay';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);

import { Reducer } from 'react-native-router-flux';

import { Router, Scene, Actions } from 'react-native-router-flux';

import RelayRenderer from 'rnrf-relay-renderer';


import PageOne from './PageOne';
import PageTwo from './PageTwo';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

class App extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} sceneStyle={{flex: 1}} wrapBy={RelayRenderer()}>
        <Scene key="root">
          <Scene
            key="pageOne"
            component={PageOne}
            title="PageOne"
            initial={true}
            queries={{viewer: () => Relay.QL`query { viewer } `,}}
          />
          
          <Scene
            key="pageTwo"
            component={PageTwo}
            title="PageTwo"
            queries={{node: () => Relay.QL`query { node(id: $nodeID) } `,}}
          />
          
        </Scene>
      </Router>
    )
  }
}

export default () => {
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
