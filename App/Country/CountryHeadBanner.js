import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';

const overlay = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABACAYAAADbER1AAAAAjklEQVQYV43KobYBUQAAwF1BEhRBEhRBEhRBEhRBEhThJUERJEERJEFRFEESFEESFEESlBckQREkwXXGFyiTJg4hhPg33t4LTzxwxw1X/OOCM0444oA9dthigzVWWGKBOWaYYoIxRhhigD566OIPHbTRQhMN1FFDFRWUUUIRBeSRQxYZpJFCEok4iqLoywcpQNx87VF1swAAAABJRU5ErkJggg==';

class CountryHeadBanner extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{flex: 1, resizeMode: 'cover', top: 0, left: 0, right: 0}}
          source={{ uri: 'http://localhost:3001' + this.props.country.coverImageUrl}}
        />
        <Image
          style={{flex: 1, position: 'absolute', top: -10, left: 0, right: 0, height: 50, resizeMode: 'stretch'}}
          source={{uri: overlay}}
        />
        <TouchableOpacity onPress={Actions.pop}>
          <Text style={{position: 'absolute', left: 10, backgroundColor: 'white', color: 'blue', bottom: 20, fontSize: 20}}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Relay.createContainer(CountryHeadBanner, {
  fragments: {
    country: () => Relay.QL`
      fragment on Country {
        id,
        name,
        coverImageUrl,
      }
    `,
  },
});
