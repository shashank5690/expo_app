import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./orderhistoryStyle";
import { useStore } from "@/src/store/store";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/src/Utils/theme/theme";
import HeaderBar from "@/src/components/HeaderBar";
import EmptyListAnimation from "@/src/components/EmptyListAnimation";
import { useRouter } from "expo-router";
import PopUpAnimation from "@/src/components/PopUpAnimation";
import OrderHistoryCard from "@/src/components/OrderHistoryCard";

const OrderHistory = () => {
 
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(false);
  const navigationHandler = ({ index, id, type }: any) => {
    router.navigate({
      pathname: "/(carddetails)/details",
      params: {
        index,
        id,
        type,
      },
    });
  };
  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={[styles.ScrollViewInnerView, { marginBottom: 100 }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={"No Order History"} />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => {
                buttonPressHandler();
              }}
            >
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
