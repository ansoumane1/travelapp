/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Title from '../../components/title';

import styles from './style';
import Categories from '../../components/categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = 'All';
const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setData(jsonData);
    } else {
      setData(
        jsonData.filter(item => item.categories?.includes(selectedCategory)),
      );
    }
  }, [selectedCategory]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}></View>
      {/* <View style={styles.row}>
          <AttractionCard
            title="Entertainment Park"
            subtitle="Rome"
            imageSrc="https://media.routard.com/image/84/3/firewhip-tratamento.1509843.142.jpg"
          />

        </View> */}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found !</Text>
        }
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go ?" />
              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>
            <Categories
              onCategoryPress={setSelectedCategory}
              selectedCategory={selectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        renderItem={({item, index}) => (
          <AttractionCard
            onPress={() =>
              navigation.navigate('AttractionDetails', {item: item})
            }
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.[0]}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
