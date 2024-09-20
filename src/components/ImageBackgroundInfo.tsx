import React from "react";
import {
  
  Text,
  View,
  ImageProps,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS, FONTSIZE, SPACING } from "../Utils/theme/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useAppFonts } from "../Utils/fonts";
import styles from "./StylesComponent/stylesImagegroundInfo";



interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}
      >
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}
            >
              <View style={styles.IconContainer}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.LinearGradientBG}
                >
                  <AntDesign
                    name="left"
                    color={COLORS.primaryLightGreyHex}
                    size={FONTSIZE.size_16}
                  />
                </LinearGradient>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}
            >
              <View style={styles.IconContainer2}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.LinearGradientBG}
                >
                  <Fontisto
                    name="heart"
                    color={
                      favourite
                        ? COLORS.primaryRedHex
                        : COLORS.primaryLightGreyHex
                    }
                    size={FONTSIZE.size_16}
                  />
                </LinearGradient>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}
            >
              <View style={styles.IconContainer2}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.LinearGradientBG}
                >
                  <Fontisto
                    name="heart"
                    color={
                      favourite
                        ? COLORS.primaryRedHex
                        : COLORS.primaryLightGreyHex
                    }
                    size={FONTSIZE.size_16}
                  />
                </LinearGradient>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <MaterialCommunityIcons
                    name={type == "Bean" ? "seed" : "coffee"}
                    size={type == "Bean" ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == "Bean"
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}
                  >
                    {type}
                  </Text>
                </View>
                <View style={styles.ProperFirst}>
                  <MaterialIcons
                    name={type == "Bean" ? "location-on" : "water-drop"}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <Fontisto
                  name={"star"}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.RatingText}>{average_rating}</Text>
                <Text style={styles.RatingCountText}>({ratings_count})</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default ImageBackgroundInfo;
