import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';

class PageOne extends Component {
  renderWi
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
        <Text>Viewer ID: {this.props.viewer.id}</Text>
        <Text>Total widgets: {this.props.viewer.widgets.edges.length}</Text>
        <Text style={{fontSize: 20, paddingTop: 20}}>Widget list (items clickable!)</Text>
        <View>
          {this.props.viewer.widgets.edges.map(edge =>
            <Text style={{padding: 10}} onPress={() => Actions.pageTwo({nodeID: edge.node.id})} key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</Text>
          )}
        </View>
      </View>
    )
  }
}

export default Relay.createContainer(PageOne, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        id,
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});