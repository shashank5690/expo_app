import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {COLORS, SPACING} from '../Utils/theme/theme';
import { styles } from "./StylesComponent/stylesProfilePic";

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};



export default ProfilePic;