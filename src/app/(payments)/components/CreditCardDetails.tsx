import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, FONTSIZE } from "@/src/Utils/theme/theme";
import styles from "../StylesPayment";

const CreditCardDetails = ({ isActive }: { isActive: boolean }) => {
  return (
    <View
      style={[
        styles.CreditCardContainer,
        {
          borderColor: isActive
            ? COLORS.primaryOrangeHex
            : COLORS.primaryGreyHex,
        },
      ]}
    >
      <Text style={styles.CreditCardTitle}>Credit Card</Text>
      <View style={styles.CreditCardBG}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.LinearGradientStyle}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        >
          <View style={styles.CreditCardRow}>
            <MaterialCommunityIcons
              name="integrated-circuit-chip"
              size={FONTSIZE.size_20 * 2}
              color={COLORS.primaryOrangeHex}
            />
            <FontAwesome6
              name="cc-visa"
              size={FONTSIZE.size_20 * 2}
              color={COLORS.primaryWhiteHex}
            />
          </View>
          <View style={styles.CreditCardNumberContainer}>
            <Text style={styles.CreditCardNumber}>3879</Text>
            <Text style={styles.CreditCardNumber}>8923</Text>
            <Text style={styles.CreditCardNumber}>6745</Text>
            <Text style={styles.CreditCardNumber}>4638</Text>
          </View>
          <View style={styles.CreditCardRow}>
            <View style={styles.CreditCardNameContainer}>
              <Text style={styles.CreditCardNameSubitle}>Card Holder Name</Text>
              <Text style={styles.CreditCardNameTitle}>Robert Evans</Text>
            </View>
            <View style={styles.CreditCardDateContainer}>
              <Text style={styles.CreditCardNameSubitle}>Expiry Date</Text>
              <Text style={styles.CreditCardNameTitle}>02/30</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default CreditCardDetails;
