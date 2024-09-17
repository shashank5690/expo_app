import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '@/src/Utils/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import ImageBackgroundInfo from '@/src/components/ImageBackgroundInfo';

export default function CardDetailScreen() {
  const router = useRouter();

  const goToHomeScreen = () => {
    //router.push('/(tabs)/(homescreen)/homescreen'); 
  };

  return (
       <View style={{backgroundColor:'green',flex:1}}>
       <Text style={{color:'red'}}>hiibhbfr edbjdhbjdm </Text>
       <Text> hhjojiedhbxe </Text>
       </View>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
