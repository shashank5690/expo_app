import { View, TouchableOpacity, Text } from "react-native";
import { COLORS, FONTSIZE } from "@/src/Utils/theme/theme";
import styles from "../StylesDetails";

const PriceSizeSelector = ({ prices, price, setPrice, type }: any) => {
  return (
    <View style={styles.SizeOuterContainer}>
      {prices.map((data: any) => (
        <TouchableOpacity
          key={data.size}
          onPress={() => setPrice(data)}
          style={[
            styles.SizeBox,
            {
              borderColor:
                data.size === price.size
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryDarkGreyHex,
            },
          ]}
        >
          <Text
            style={[
              styles.SizeText,
              {
                fontSize: type === "Bean" ? FONTSIZE.size_14 : FONTSIZE.size_16,
                color:
                  data.size === price.size
                    ? COLORS.primaryOrangeHex
                    : COLORS.secondaryLightGreyHex,
              },
            ]}
          >
            {data.size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PriceSizeSelector;
