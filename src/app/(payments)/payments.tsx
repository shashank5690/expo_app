import { View, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import PopUpAnimation from "@/src/components/PopUpAnimation";
import { useStore } from "@/src/store/store";
import PaymentFooter from "../../components/PaymentFooter";
import { useAppFonts } from "../../Utils/fonts";
import { COLORS } from "@/src/Utils/theme/theme";
import styles from "./StylesPayment";
import PaymentHeader from "./components/PaymentHeader";
import CreditCardDetails from "./components/CreditCardDetails";
import PaymentOptions from "./components/PaymentOptions";

const PaymentsScreen = () => {
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart
  );
  const router = useRouter();
  const { amount } = useLocalSearchParams();

  const [paymentMode, setPaymentMode] = useState("Credit Card");
  const [showAnimation, setShowAnimation] = useState(false);

  const amountString = Array.isArray(amount) ? amount[0] : amount || "0";

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      router.push("/(tabs)/(orderhistoryscreen)");
    }, 2000);
  };

  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation && (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require("../../Utils/lottie/splash.json")}
        />
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <PaymentHeader />

        <TouchableOpacity onPress={() => setPaymentMode("Credit Card")}>
          <CreditCardDetails isActive={paymentMode === "Credit Card"} />
        </TouchableOpacity>

        <PaymentOptions
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />
      </ScrollView>

      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{ currency: "$", price: amountString }}
        buttonPressHandler={buttonPressHandler}
      />
    </View>
  );
};

export default PaymentsScreen;
