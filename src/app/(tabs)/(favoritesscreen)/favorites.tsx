import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "@expo-google-fonts/poppins";
import { styles } from "./favoritesStyle";
import { useStore } from "@/src/store/store";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/src/Utils/theme/theme";
import EmptyListAnimation from "@/src/components/EmptyListAnimation";
import FavoritesItemCard from "@/src/components/FavoritesItemCard";
import HeaderBar from "@/src/components/HeaderBar";
import { useRouter } from "expo-router";

 const FavoritesScreen = () => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
 const router=useRouter();
 const [expandedItem,setExpandedItem]=useState<{[key:string]:boolean}>({})

 const truncateDescription = (description: string, wordLimit: number) => {
  const words = description.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : description;
};

 const toggleDescription = (id: string) => {
  setExpandedItem((prevState) => ({
    ...prevState,
    [id]: !prevState[id],
  }));
};

  return (
    <View style={styles.ScreenContainer}>
     <StatusBar backgroundColor={COLORS.primaryBlackHex} />
     <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: 100}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favourites" />

            {FavoritesList.length == 0 ? (
              <EmptyListAnimation title={'No Favourites'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      router.navigate({
                        pathname: "/(carddetails)/details",
                        params: {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        },
                      });
                    }}
                    key={data.id}>
                    <FavoritesItemCard
                      id={data.id}
                      imagelink_portrait={data.imagelink_portrait}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={expandedItem[data.id]?(
                        <TouchableWithoutFeedback onPress={()=>{
                          toggleDescription(data.id);
                        }}>
                           <Text >{data.description}</Text>
                        </TouchableWithoutFeedback>
                      ):(<TouchableWithoutFeedback onPress={()=>{
                          toggleDescription(data.id);
                      }}>
                          <Text >
                            {truncateDescription(data.description, 18)}
                          </Text>
                        </TouchableWithoutFeedback>

                      )}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavourite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
