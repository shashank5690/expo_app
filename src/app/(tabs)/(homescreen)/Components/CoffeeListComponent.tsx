import { FlatList, TouchableOpacity, View, Text } from "react-native";
import CoffeeCard from "@/src/components/CoffeeCard";
import { styles } from "../homeStyle";

const CoffeeListComponent = ({ sortedCoffee, CoffeeCardAddToCart, ListRef, router }: any) => (
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
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
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
    )}
  />
);

export default CoffeeListComponent;
