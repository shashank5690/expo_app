import { Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
//  import { useAppFonts } from "../Utils/fonts";
import { styles } from "./StylesComponent/stylesPaymentMethods";
import { COLORS,FONTSIZE } from "../Utils/theme/theme";
import {PaymentMethodProps} from '../Utils/types/types'; 


const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  // const fontsLoaded = useAppFonts();

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View
      style={[
        styles.PaymentCardContainer,
        {
          borderColor:
            paymentMode == name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}
    >
      {isIcon ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientWallet}
        >
          <View style={styles.WalletRow}>
            <FontAwesome5
              name={"wallet"}
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_30}
            />
            <Text style={styles.PaymentTitle}>{name}</Text>
          </View>
          <Text style={styles.PaymentPrice}>$ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientRegular}
        >
          <Image source={icon} style={styles.PaymentImage} />
          <Text style={styles.PaymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  );
};



export default PaymentMethod;
