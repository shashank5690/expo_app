import { Text, View, StatusBar, ScrollView } from "react-native";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS } from "@/src/Utils/theme/theme";
import { useStore } from "@/src/store/store";
import { useState } from "react";
import PaymentFooter from "@/src/components/PaymentFooter";
import ImageSection from "./components/ImageSection";
import PriceSizeSelector from "./components/PriceSizeSelector";
import DescriptionSection from "./components/DescriptionSection";
import styles from "./StylesDetails";

const CardDetailScreen = () => {
  const { type, index } = useLocalSearchParams();
  const itemIndex = Number(index);

  const ItemOfIndex = useStore((state: any) =>
    type === "Coffee" ? state.CoffeeList : state.BeanList
  )[itemIndex];

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(ItemOfIndex.prices[0]);

  const addToCarthandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...price, quantity: 1 }],
    });
    calculateCartPrice();
    router.push("/(cartscreen)/cart");
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <ImageSection ItemOfIndex={ItemOfIndex} />
        <View style={styles.FooterInfoArea}>
          <DescriptionSection description={ItemOfIndex.description} />
          <Text style={styles.InfoTitle}>Size</Text>
          <PriceSizeSelector
            prices={ItemOfIndex.prices}
            price={price}
            setPrice={setPrice}
            type={ItemOfIndex.type}
          />
        </View>
        <PaymentFooter
          price={price}
          buttonTitle="Add to Cart"
          buttonPressHandler={() =>
            addToCarthandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              roasted: ItemOfIndex.roasted,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
            })
          }
        />
      </ScrollView>
    </View>
  );
};

export default CardDetailScreen;
