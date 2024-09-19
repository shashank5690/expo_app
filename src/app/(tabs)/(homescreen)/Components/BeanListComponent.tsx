import { FlatList, TouchableOpacity } from "react-native";
import CoffeeCard from "@/src/components/CoffeeCard";
import { styles } from "../homeStyle";

const BeanListComponent = ({ BeanList, CoffeeCardAddToCart, router }: any) => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={BeanList}
    contentContainerStyle={[styles.FlatListContainer, { marginBottom: 50 }]}
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

export default BeanListComponent;
