import { View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { COLORS, FONTSIZE } from "@/src/Utils/theme/theme";
import { styles } from "../homeStyle";

const SearchBar = ({ searchText, setSearchText, searchCoffee, resetSearchCoffee }: any) => (
  <View style={styles.InputContainerComponent}>
    <TouchableOpacity onPress={() => searchCoffee(searchText)}>
      <AntDesign
        style={styles.InputIcon}
        name="search1"
        size={FONTSIZE.size_18}
        color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
      />
    </TouchableOpacity>
    <TextInput
      placeholder="Find Your Coffee..."
      value={searchText}
      onChangeText={(text) => {
        setSearchText(text);
        searchCoffee(text);
      }}
      placeholderTextColor={COLORS.primaryLightGreyHex}
      style={styles.TextInputContainer}
    />
    {searchText.length > 0 && (
      <TouchableOpacity onPress={resetSearchCoffee}>
        <MaterialCommunityIcons
          style={styles.InputIcon}
          name="close"
          size={FONTSIZE.size_16}
          color={COLORS.primaryLightGreyHex}
        />
      </TouchableOpacity>
    )}
  </View>
);

export default SearchBar;
