/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Map = ({navigation, route}) => {
  const {item} = route?.params || {};

  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    longitudeDelta: 0.5,
    latitudeDelta: 0.5,
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>

        <Text style={styles.title} onPress={onBack}>
          {`${item?.name}, ${item?.city}`}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Map);
