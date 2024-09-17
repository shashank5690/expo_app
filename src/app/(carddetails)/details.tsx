import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '@/src/Utils/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import ImageBackgroundInfo from '@/src/components/ImageBackgroundInfo';
import { useStore } from '@/src/store/store';

const  CardDetailScreen = ({navigation,route}: any) => {

  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

 
  return (
       <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <ScrollView
         showsVerticalScrollIndicator={false}
         contentContainerStyle={styles.ScrollViewFlex}>

          <ImageBackgroundInfo EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler= {() => {}}
          ToggleFavourite={() => {}}
          />
        </ScrollView>
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


export default CardDetailScreen;