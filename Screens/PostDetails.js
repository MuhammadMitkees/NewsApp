import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';
import Styles from '../Constants/Styles';
import Colors from '../Constants/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';
export const PostDetails = () => {
  const post = useRoute().params.item;
  const navigation = useNavigation();
  return (
    <ScrollView style={[Styles.pagePadding, styles.mainContainer]}>
      {/* Header section */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.icons}
            source={require('../Assets/Images/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>News</Text>
        <Image
          style={styles.icons}
          source={require('../Assets/Images/lens.png')}
        />
      </View>
      {/* Main Image Section */}

      <Image
        resizeMode="cover"
        style={[styles.mainImage, styles.marginBetweenSections]}
        source={{uri: post.imageUrl}}
      />
      {/* Topic title section */}

      <Text style={[Styles.topicTitle, styles.marginBetweenSections]}>
        Technology
      </Text>
      {/* Title Section */}

      <Text style={[styles.title, styles.marginBetweenSections]}>
        {post.title}
      </Text>
      {/* Content Section */}

      <Text style={[styles.content, styles.marginBetweenSections]}>
        {post.content}
      </Text>
      <Text
        onPress={() => Linking.openURL(post.readMoreUrl)}
        style={styles.readMore}>
        Read More
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    height: '100%',
    paddingVertical: 25,
  },
  header: {justifyContent: 'space-between', flexDirection: 'row'},
  icons: {height: 25, width: 25},
  headerTitle: {fontSize: 24, fontWeight: '700', color: Colors.titleColor},
  mainImage: {
    height: 250,
    width: '100%',
    borderRadius: 10,
  },
  title: {fontSize: 24, color: Colors.titleColor, fontWeight: 'bold'},
  content: {
    fontSize: 16,
    lineHeight: 25,
  },
  marginBetweenSections: {
    marginTop: 10,
  },
  readMore: {
    textDecorationLine: 'underline',
    color: Colors.mainColor,
  },
});
export default PostDetails;
