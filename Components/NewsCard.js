import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Constants/Colors';
import Styles from '../Constants/Styles';
import {useNavigation} from '@react-navigation/native';

const NewsCard = props => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        Navigation.navigate('PostDetails', {item: props.data});
      }}
      style={styles.mainContainer}>
      <Image
        source={{
          uri: props.data.imageUrl,
        }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.textContaier}>
        <Text style={styles.articleTitle}>{props.data?.title}</Text>
        <Text numberOfLines={2} style={styles.articleContent}>
          {props.data?.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 100,
    marginTop: 15,
  },
  cardImage: {
    width: '25%',
    borderRadius: 10,
    height: 100,
  },
  articleTitle: {
    fontSize: 16,
    color: Colors.titleColor,
    fontWeight: Styles.titleArticleFontWieght,
    flexBasis: 65,
  },
  articleContent: {
    fontSize: 12,
    marginTop: 2,
    flexBasis: 30,
  },
  textContaier: {
    flexDirection: 'column',
    width: '70%',
    marginStart: '5%',
    height: '50%',
  },
});
export default NewsCard;
