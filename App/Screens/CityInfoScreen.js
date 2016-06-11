import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';


class CityInfoScreen extends Component {
  render() {
    const city = this.props.viewer.city;
    return (
      <View style={{flex: 1, flexDirection: 'column', paddingTop: 64}}>
        <View style={{height: 250}}>
          <ScrollView style={{height: 250}} horizontal>
            {city.images.map(function (image, i) {
              return <View  key={i}><Image style={{height: 250, width: Dimensions.get('window').width - 40}} source={{uri: `http://localhost:3001${image.url}`}} /></View>;
            })}
          </ScrollView>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontSize: 30}}>{city.name}</Text>
          <Text style={{fontSize: 12}}>population: {city.population}</Text>
        </View>
        <ScrollView style={{flex: 5}}>
          {city.hotels.map((hotel, i) => {
            return (<View key={i} style={{padding: 10}}>
              <Text style={{fontSize: 20}}>{hotel.name} ({hotel.stars}*)</Text>
              <Text style={{fontSize: 13}}>{hotel.address}</Text>
            </View>);
          })}
        </ScrollView>
        
      </View>
    )
  }
}

export default Relay.createContainer(CityInfoScreen, {
  initialVariables:{
    cityId: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerQueryType {
        city (id: $cityId) {
          id,
          name,
          population,
          images {
            url
          }
          hotels {
            id,
            stars,
            name,
            address,
          },
        }
      }
    `,
  },
});
