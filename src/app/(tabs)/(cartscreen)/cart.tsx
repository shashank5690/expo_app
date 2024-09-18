import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useAppFonts } from "../../../Utils/fonts";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useStore } from "../../../store/store";
import { COLORS, SPACING } from "@/src/Utils/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import HeaderBar from "@/src/components/HeaderBar";
import { router, useRouter } from "expo-router";
import EmptyListAnimation from "@/src/components/EmptyListAnimation";
import PaymentFooter from "@/src/components/PaymentFooter";
import CartItem from "@/src/components/CartItem";

export default function CartScreen() {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity
  );

  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity
  );

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    router.push({
      pathname: '/(payments)/payments',  
      params: { amount: CartPrice },  
    });
  };

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length == 0 ? (
              <EmptyListAnimation title={"Cart is Empty🥐"} />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      router.push({
                        pathname: "/(carddetails)/details",
                        params: {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        },
                      });
                    }}
                    key={data.id}
                  >
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {CartList.length != 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{ price: CartPrice, currency: "$" }}
            />
          ) : (
            <></>
          )}
        </View>
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
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
