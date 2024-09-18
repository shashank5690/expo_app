import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./homeStyle";
import { useStore } from "@/src/store/store";
import { useRef, useState } from "react";
import { COLORS, FONTSIZE } from "@/src/Utils/theme/theme";
import { StatusBar } from "expo-status-bar";
import HeaderBar from "@/src/components/HeaderBar";
import CoffeeCard from "@/src/components/CoffeeCard";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from "expo-router";
import Toast from 'react-native-toast-message';


const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift("All");
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == "All") {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const HomeScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold: Poppins_600SemiBold,
    Poppins_500Medium: Poppins_500Medium,
    Poppins_300Light: Poppins_300Light,
  });


  // const [fontsLoaded] = useFonts({
  //   Poppins_600SemiBold: Poppins_600SemiBold,
  //   Poppins_500Medium: Poppins_500Medium,
  //   Poppins_300Light: Poppins_300Light,
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }


  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
   const router=useRouter();
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList)
  );
  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 1,
    category: categories[1],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const ListRef: any = useRef<FlatList>();
  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  const CoffeeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    Toast.show({
      type: 'success', 
      text1: `${name} added to cart`,
      position: 'top', 
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Find the best{"\n"}coffee for you
        </Text>

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => {
            searchCoffee(searchText);
          }}>
            <AntDesign
              style={styles.InputIcon}
              name="search1"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          { searchText.length > 0 ? (<TouchableOpacity  onPress={() => {
                resetSearchCoffee();
              }}>
            <MaterialCommunityIcons  style={styles.InputIcon} 
            name="close" 
            size={FONTSIZE.size_16}
            color={COLORS.primaryLightGreyHex}/>
          </TouchableOpacity>):
          (<></ >)

          }
        </View>

        {/* Category */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((data, index) => (
            <View key={index.toString()} style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity style={styles.CategoryScrollViewItem} onPress={()=>
                {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index:index,category:categories[index]})
                setSortedCoffee([
                  ...getCoffeeList(categories[index], CoffeeList),
                ]);
                }}>
              <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
         
      {/* coffee flatlist */}
     <FlatList 
     ref={ListRef}
     horizontal
     ListEmptyComponent={
      <View style={styles.EmptyListContainer}>
        <Text style={styles.CategoryText}>No Coffee Available</Text>
      </View>
    }
     showsHorizontalScrollIndicator={false}
      data={sortedCoffee}
      contentContainerStyle={styles.FlatListContainer}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          //navigation
          <TouchableOpacity
          onPress={() => {
            router.navigate({
              pathname: "/(carddetails)/details",
              params: {
                index: item.index,
                id: item.id,
                type: item.type,
              },
            });
          }}
    >
             <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeeCardAddToCart}
                />
          </TouchableOpacity>
        );
      }}
      />
      
      {/* Bean */}
      <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>

      <FlatList 
     horizontal
     showsHorizontalScrollIndicator={false}
      data={BeanList}
      contentContainerStyle={[
        styles.FlatListContainer,
        {marginBottom: 50},
      ]}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={()=>{
            router.navigate({
              pathname: "/(carddetails)/details",
              params: {
                index: item.index,
                id: item.id,
                type: item.type,
              },
            });
            }}>
             <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeeCardAddToCart}
                />
          </TouchableOpacity>
        );
      }}
      />

      </ScrollView>
    </View>
  );
};
export default HomeScreen;
