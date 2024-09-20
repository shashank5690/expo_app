import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {COLORS, FONTSIZE, SPACING} from '../Utils/theme/theme';
  import OrderItemCard from './OrderItemCard';

interface OrderHistoryCardProps{
    navigationHandler: any;
    CartList:any;
    CardListPrice:string;
    OrderDate:string;
}

const OrderHistoryCard =  ({
    navigationHandler,
    CartList,
    CartListPrice,
    OrderDate,
  })  => {
  return (
    <View style={styles.CardContainer}>
    <View style={styles.CardHeader}>
      <View>
        <Text style={styles.HeaderTitle}>Order Time</Text>
        <Text style={styles.HeaderSubtitle}>{OrderDate}</Text>
      </View>
      <View style={styles.PriceContainer}>
        <Text style={styles.HeaderTitle}>Total Amount</Text>
        <Text style={styles.HeaderPrice}>$ {CartListPrice}</Text>
      </View>
    </View>
    <View style={styles.ListContainer}>
       {CartList.map((data: any, index: any) => (
        <TouchableOpacity
          key={index.toString() + data.id}
          onPress={() => {
            navigationHandler({
              index: data.index,
              id: data.id,
              type: data.type,
            });
          }}>
          <OrderItemCard
            type={data.type}
            name={data.name}
            imagelink_square={data.imagelink_square}
            special_ingredient={data.special_ingredient}
            prices={data.prices}
            ItemPrice={data.ItemPrice}
          />
        </TouchableOpacity>
      ))} 
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    CardContainer: {
      gap: SPACING.space_10,
    },
    CardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: SPACING.space_20,
      alignItems: 'center',
    },
    HeaderTitle: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    HeaderSubtitle: {
      fontFamily: 'Poppins_300Light',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    PriceContainer: {
      alignItems: 'flex-end',
    },
    HeaderPrice: {
      fontFamily: 'Poppins_500Medium',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryOrangeHex,
    },
    ListContainer: {
      gap: SPACING.space_20,
    },
  });

export default OrderHistoryCard
