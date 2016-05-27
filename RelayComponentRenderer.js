import {
  View,
  Text,
} from 'react-native';

import React, { Component, PropTypes } from 'react';

import Relay from 'react-relay';

export default class RelayComponentRenderer extends Component {
  static propTypes = {
    component: PropTypes.func,
    navigationState: PropTypes.object,
  };

  render() {
    return (<Relay.Renderer
      Container={this.props.component}
      queryConfig={{
        queries: this.props.navigationState.queries,
        params: this.props.navigationState, // TODO: not sure if it is correct to pass all the data.
        name: 'rn-router-flux-queries_' + Math.random(), // TODO: look like wrong
      }}
      environment={Relay.Store}
      render={({done, error, props, retry, stale}) => {
        if (error) {
          // render error
          return (<View style={{padding: 30}}>
            <Text>Error while fetching data from the server</Text>
            <TouchableHighlight onPress={retry}>
              <Text>Retry?</Text>
            </TouchableHighlight>
          </View>);
        }

        if (props) {
        // render component itself
          return (
            <this.props.component {...props} />
          );
        }

        // render loading
        return (<View>
          <Text>Loading...</Text>
        </View>);
      }}
    />);
  }
}

export default (Component) =>
  !Relay.isContainer(Component)
  ?
    Component // not a Relay container, return component itself
  :
    (props) => // relay container - wrap it with renderer
      <RelayComponentRenderer
        {...props}
        component={Component}
      />;