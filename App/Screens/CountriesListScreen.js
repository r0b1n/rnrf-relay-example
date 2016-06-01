import React, { Component } from 'react';

import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';

class PageOne extends Component {
  render() {
    console.log(this.props);
    return (
      <ScrollView style={{flex: 1, padding: 10, paddingTop: 24}}>
          {this.props.viewer.countries.map(country =>
            <View style={{flex: 1, borderWidth: 1, margin: 10}} key={country._id}>
              <TouchableOpacity onPress={() => Actions.Country({countryId: country._id})}>
              <Image
                style={{flex: 1, resizeMode: 'cover', height: 150}}
                source={{ uri: 'http://localhost:3001' + country.coverImageUrl}}
              />
              <Text style={{
                backgroundColor: 'gray',
                color: 'white',
                padding: 10,
                position: 'absolute',
                left: 0,
                bottom: 0
              }}>
                {country.name} (ID: {country._id})
              </Text>
              </TouchableOpacity>
            </View>
          )}
      </ScrollView>
    )
  }
}

export default Relay.createContainer(PageOne, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerQueryType {
        countries {
          _id,
          name,
          coverImageUrl,
          cities {
            name,
          },
        }
      }
    `,
  },
});