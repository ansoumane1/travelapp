/* eslint-disable prettier/prettier */
import React from 'react';
import ImgToBase64 from 'react-native-image-base64';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import {Marker} from 'react-native-maps';
import Share from 'react-native-share';
import styles from './style';
import Title from '../../components/title';
import InfoCard from '../../components/infoCard';
import {ScrollView} from 'react-native-gesture-handler';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const openingHours = `OPEN 
${item?.opening_time} - ${item?.closing_time}`;

  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    longitudeDelta: 0.5,
    latitudeDelta: 0.5,
  };
  // console.log(item);
  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  const onShare = async () => {
    try {
      const imageWithoutParams = mainImage?.split('?')[0];
      const imageParts = imageWithoutParams?.split('.');
      const imageExtension = imageParts[imageParts.length - 1];
      console.log();

      const base64Image = await ImgToBase64.getBase64String(mainImage);
      // .then(base64String => doSomethingWith(base64String))
      // .catch(err => doSomethingWith(err));
      console.log(base64Image);
      Share.open({
        title: item?.name,
        message: 'Hey, I want to share with you this amazing attraction',
        url: `data:image/${imageExtension || 'jpg'};base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (e) {
      console.log('sharing error :=>', e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          source={{uri: mainImage}}
          imageStyle={{borderRadius: 20}}>
          <View style={styles.header}>
            <Pressable onPress={onBack} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
            <Pressable onPress={onShare} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/share.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View style={{maxWidth: '70%'}}>
            <Title style={styles.title} text={item?.name} />
            <Title style={styles.city} text={item?.city} />
          </View>
          <Title style={styles.price} text={item?.entry_price} />
        </View>
        <InfoCard
          text={item?.address}
          icon={require('../../assets/location_circle.png')}
        />
        <InfoCard
          text={openingHours}
          icon={require('../../assets/schedule.png')}
        />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name} />
        </MapView>
        <Text
          style={styles.mapText}
          onPress={() => navigation.navigate('Map', {item})}>
          Show full screen map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

0;
export default React.memo(AttractionDetails);
