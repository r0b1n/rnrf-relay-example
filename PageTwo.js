import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';

class PageTwo extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
        <Text style={{paddingBottom: 20}}>I am PageTwo.js. This data fetched from Relay's Node!</Text>

        <Text>Widget ID: {this.props.node.id}</Text>
        <Text>Widget name: {this.props.node.name}</Text>
      </View>
    )
  }
}

export default Relay.createContainer(PageTwo, {

  fragments: {
    node: () => Relay.QL`
      fragment on Widget {
        id,
        name,
      }
    `,
  },
});