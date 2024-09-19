import { useState } from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";
import styles from "../StylesDetails";

const DescriptionSection = ({ description }: { description: string }) => {
  const [fullDesc, setFullDesc] = useState(false);

  return (
    <View>
      <Text style={styles.InfoTitle}>Description</Text>
      <TouchableWithoutFeedback
        onPress={() => setFullDesc((prev) => !prev)}
      >
        <Text
          numberOfLines={fullDesc ? undefined : 3}
          style={styles.DescriptionText}
        >
          {description}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DescriptionSection;
