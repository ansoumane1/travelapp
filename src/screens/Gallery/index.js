/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';

const Gallery = ({navigation, route}) => {
  const {images} = route?.params || {};
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={{paddingHorizontal: 24, marginBottom: 24}}
          data={images}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
        />
        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
