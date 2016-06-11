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
  new Relay.DefaultNetworkLayer('http://localhost:3001/graphql')
);

import { Reducer } from 'react-native-router-flux';

import { Router, Scene, Actions } from 'react-native-router-flux';

import RelayComponentRenderer from 'rnrf-relay-renderer';

// screens
import CountriesListScreen from './App/Screens/CountriesListScreen';
import CountryInfoScreen from './App/Screens/CountryInfoScreen';
import CountryCitiesScreen from './App/Screens/CountryCitiesScreen';
import CityInfoScreen from './App/Screens/CityInfoScreen';


const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} sceneStyle={{flex: 1}} wrapBy={RelayComponentRenderer()}>
        <Scene key="root">
          <Scene
            key="Countries"
            component={CountriesListScreen}
            title="Countries List"
            hideNavBar
            initial={true}
            queries={{viewer: () => Relay.QL`query { viewer } `,}}
          />

          <Scene key="Country" tabs>
            <Scene
              key="CountryInfo"
              component={CountryInfoScreen}
              hideNavBar
              title="Info"
              queries={{viewer: () => Relay.QL`query { viewer } `,}}
              icon={TabIcon}
            />
            <Scene
              key="CountryCities"
              component={CountryCitiesScreen}
              hideNavBar
              title="Cities"
              queries={{viewer: () => Relay.QL`query { viewer } `,}}
              icon={TabIcon}
            />
          </Scene>

          <Scene
            key="City"
            component={CityInfoScreen}
            hideNavBar={false}
            title="City Info"
            queries={{viewer: () => Relay.QL`query { viewer } `,}}
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
