import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../Constants/Styles';
import Colors from '../Constants/Colors';
import NewsCard from '../Components/NewsCard';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const Navigation = useNavigation();
  const [newsData, setNewsData] = useState([]);
  //Function to call the api

  const getNews = () => {
    fetch('https://inshorts.deta.dev/news?category=technology', {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        JSON.stringify(data);
        setNewsData(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <ScrollView style={[Styles.pagePadding, styles.mainContainer]}>
      {/* Headr section */}

      <View style={styles.header}>
        <Text style={styles.logo}>News</Text>
        <Image
          style={styles.searchIcon}
          source={require('../Assets/Images/lens.png')}
        />
      </View>
      {/* topic title section */}

      <Text style={Styles.topicTitle}>Technology</Text>
      {/* Articles section */}

      <TouchableOpacity
        onPress={() => {
          Navigation.navigate('PostDetails', {item: newsData?.data?.[0]});
        }}
        style={styles.firstArticleContainer}>
        <Text style={styles.firstArticleTitle}>
          {newsData?.data?.[0]?.title}
        </Text>
        <Image
          style={styles.bigImage}
          source={{uri: newsData?.data?.[0]?.imageUrl}}
        />
      </TouchableOpacity>
      <FlatList
        data={newsData.data}
        renderItem={({item, index}) =>
          //the condition to escape first post

          index == 0 ? null : <NewsCard id={item.id} data={item} />
        }
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  searchIcon: {width: 25, height: 25, alignSelf: 'center'},
  logo: {
    fontSize: 34,
    fontWeight: Styles.titleArticleFontWieght,
    color: Colors.titleColor,
  },
  firstArticleContainer: {flexDirection: 'column', marginBottom: 20},
  firstArticleTitle: {
    fontWeight: Styles.titleArticleFontWieght,
    fontSize: 24,
    color: Colors.titleColor,
  },
  bigImage: {height: 200, borderRadius: 10, marginTop: 10},

  mainContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    height: '100%',
  },
});
export default Home;
