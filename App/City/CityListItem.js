import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';

class CityListItem extends Component {
  render() {
    const city = this.props.city;
    return (
      <View style={{padding: 10}}>
        <TouchableOpacity onPress={() => Actions.City({cityId: city._id})}>
          <Image
            style={{flex: 1, resizeMode: 'cover', height: 150}}
            source={{ uri: 'http://localhost:3001' + city.images[0].url}} 
          />
          <Text style={{fontSize: 20}}>{city.name}, {city.hotelsCount} hotels</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Relay.createContainer(CityListItem, {
  fragments: {
    city: () => Relay.QL`
      fragment on City {
        _id,
        name,
        hotelsCount,
        images {
          url,
        }
      }
    `,
  },
});