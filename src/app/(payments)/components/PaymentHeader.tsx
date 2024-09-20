import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { COLORS, FONTSIZE } from "@/src/Utils/theme/theme";
import styles from "../StylesPayment";

const PaymentHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity
        onPress={() => {
          router.back();
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
      <Text style={styles.HeaderText}>Payments</Text>
      <View style={styles.EmptyView} />
    </View>
  );
};

export default PaymentHeader;
