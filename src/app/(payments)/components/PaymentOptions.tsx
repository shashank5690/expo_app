// components/PaymentOptions.tsx
import { View, TouchableOpacity } from "react-native";
import PaymentMethod from "../../../components/PaymentMethod";
import { PaymentList } from "./PaymentList";
import styles from "../StylesPayment";

const PaymentOptions = ({
  paymentMode,
  setPaymentMode,
}: {
  paymentMode: string;
  setPaymentMode: (mode: string) => void;
}) => {
  return (
    <View style={styles.PaymentOptionsContainer}>
      {PaymentList.map((data) => (
        <TouchableOpacity
          key={data.name}
          onPress={() => {
            setPaymentMode(data.name);
          }}
        >
          <PaymentMethod
            paymentMode={paymentMode}
            name={data.name}
            icon={data.icon}
            isIcon={data.isIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentOptions;
