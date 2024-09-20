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
import { useFonts } from "@expo-google-fonts/poppins";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./homeStyle";
import { useStore } from "@/src/store/store";
import { useRef, useState } from "react";
import { COLORS, FONTSIZE } from "@/src/Utils/theme/theme";
import { StatusBar } from "expo-status-bar";
import HeaderBar from "@/src/components/HeaderBar";
import CoffeeCard from "@/src/components/CoffeeCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { getCategoriesFromData, getCoffeeList } from "./Components/getList";
import BeanListComponent from "./Components/BeanListComponent";
import CoffeeListComponent from "./Components/CoffeeListComponent";
import SearchBar from "./Components/SearchBar";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold: Poppins_600SemiBold,
    Poppins_500Medium: Poppins_500Medium,
    Poppins_300Light: Poppins_300Light,
  });

  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const router = useRouter();
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
    if (search != "") {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedCoffee([...CoffeeList]);
    setSearchText("");
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
      type: "success",
      text1: `${name} added to cart`,
      position: "top",
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

        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          searchCoffee={searchCoffee}
          resetSearchCoffee={resetSearchCoffee}
        />

        {/* Category */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}
            >
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({
                    index: index,
                    category: categories[index],
                  });
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}
              >
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? { color: COLORS.primaryOrangeHex }
                      : {},
                  ]}
                >
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

        <CoffeeListComponent
          sortedCoffee={sortedCoffee}
          CoffeeCardAddToCart={CoffeeCardAddToCart}
          ListRef={ListRef}
          router={router}
        />
        <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>
        <BeanListComponent
          BeanList={BeanList}
          CoffeeCardAddToCart={CoffeeCardAddToCart}
          router={router}
        />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
