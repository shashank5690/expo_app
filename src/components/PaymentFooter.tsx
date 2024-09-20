import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../Utils/theme/theme";
import { useAppFonts } from "../Utils/fonts";
import { styles } from "./StylesComponent/stylesPaymentFooter";
import { PriceProps,PaymentFooterProps } from "../Utils/types/types";


const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.PriceFooter}>
      <View style={styles.PriceContainer}>
        <Text style={styles.PriceTitle}>Price</Text>
        <Text style={styles.PriceText}>
          {price.currency} <Text style={styles.Price}>{price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.PayButton}
        onPress={() => buttonPressHandler()}
      >
        <Text style={styles.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default PaymentFooter;
