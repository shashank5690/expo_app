import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
} from '../Utils/theme/theme';
import { styles } from './StylesComponent/stylesOrderItemCard';
import { OrderItemCardProps } from '../Utils/types/types';

const OrderItemCard = ({
    type,
    name,
    imagelink_square,
    special_ingredient,
    prices,
    ItemPrice,
  }) => {
  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    style={styles.CardLinearGradient}>
    <View style={styles.CardInfoContainer}>
      <View style={styles.CardImageInfoContainer}>
        <Image source={imagelink_square} style={styles.Image} />
        <View>
          <Text style={styles.CardTitle}>{name}</Text>
          <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.CardCurrency}>
          $ <Text style={styles.CardPrice}>{ItemPrice}</Text>
        </Text>
      </View>
    </View>
    {prices.map((data: any, index: any) => (
      <View key={index.toString()} style={styles.CardTableRow}>
        <View style={styles.CardTableRow}>
          <View style={styles.SizeBoxLeft}>
            <Text
              style={[
                styles.SizeText,
                {
                  fontSize:
                    type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                },
              ]}>
              {data.size}
            </Text>
          </View>
          <View style={styles.PriceBoxRight}>
            <Text style={styles.PriceCurrency}>
              {data.currency}
              <Text style={styles.Price}> {data.price}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.CardTableRow}>
          <Text style={styles.CardQuantityPriceText}>
            X <Text style={styles.Price}>{data.quantity}</Text>
          </Text>
          <Text style={styles.CardQuantityPriceText}>
            $ {(data.quantity * data.price).toFixed(2).toString()}
          </Text>
        </View>
      </View>
    ))}
  </LinearGradient>
  )
}



export default OrderItemCard
