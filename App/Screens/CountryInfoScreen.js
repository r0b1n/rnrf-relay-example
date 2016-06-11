import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Relay from 'react-relay';

import CountryHeadBanner from '../Country/CountryHeadBanner';
import CityListItem from '../City/CityListItem';

class CountryInfoScreen extends Component {
  render() {
    const country = this.props.viewer.country;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      
        <CountryHeadBanner country={country} />

        <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>{country.name}</Text>
          <Text>{country.description}</Text>
        </View>
        
      </View>
    )
  }
}

export default Relay.createContainer(CountryInfoScreen, {
  initialVariables:{
    countryId: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerQueryType {
        country (id: $countryId) {
          ${CountryHeadBanner.getFragment('country')},
          id,
          name,
          description,
        }
      }
    `,
  },
});
