import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256, 256, 256, 0.35)',
    margin: 16,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 4,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    color: '#000000',
  },
  city: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    marginTop: 8,
  },
  price: {
    color: '#000000',
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  mapText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4681A3',
    textAlign: 'center',
    padding: 16,
    marginBottom: 60,
  },
});

export default styles;
