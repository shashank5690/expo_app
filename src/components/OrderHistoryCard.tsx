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
import { styles } from './StylesComponent/stylesOrderHistoryCard';
import { OrderHistoryCardProps } from '../Utils/types/types';


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




export default OrderHistoryCard
