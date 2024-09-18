import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./favoritesStyle";
import { useStore } from "@/src/store/store";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/src/Utils/theme/theme";
import EmptyListAnimation from "@/src/components/EmptyListAnimation";
import FavoritesItemCard from "@/src/components/FavoritesItemCard";

const FavoritesScreen = () => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <View style={styles.ScreenContainer}>
     <StatusBar backgroundColor={COLORS.primaryBlackHex} />

    </View>
  );
};

export default FavoritesScreen;
