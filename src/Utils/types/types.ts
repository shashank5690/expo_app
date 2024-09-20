import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ImageProps } from "react-native";

export interface PopUpAnimationProps {
    style: any;
    source: any;
  }
export interface PaymentMethodProps {
    paymentMode: string;
    name: string;
    icon: any;
    isIcon: boolean;
  }
  export interface PriceProps {
    price: string;
    currency: string;
  }
  
   export interface PaymentFooterProps {
    price: PriceProps;
    buttonPressHandler: any;
    buttonTitle: string;
  }
  export interface OrderItemCardProps {
    type: string;
    name: string;
    imagelink_square: ImageProps;
    special_ingredient: string;
    prices: any;
    ItemPrice: string;
  }
  export interface OrderHistoryCardProps{
    navigationHandler: any;
    CartList:any;
    CardListPrice:string;
    OrderDate:string;
}
export interface ImageBackgroundInfoProps {
    EnableBackHandler: boolean;
    imagelink_portrait: ImageProps;
    type: string;
    id: string;
    favourite: boolean;
    name: string;
    special_ingredient: string;
    ingredients: string;
    average_rating: number;
    ratings_count: string;
    roasted: string;
    BackHandler?: any;
    ToggleFavourite: any;
  }
export interface HeaderBarProps {
    title?: string;
  }
export interface GradientBGIconProps {
    name: string;
    color: string;
    size: number;
  }
export interface FavoritesItemCardProps {
    id: string;
    imagelink_portrait: ImageProps;
    name: string;
    special_ingredient: string;
    type: string;
    ingredients: string;
    average_rating: number;
    ratings_count: string;
    roasted: string;
    description: any;
    favourite: boolean;
    ToggleFavouriteItem: any;
  }
  export interface EmptyListAnimationProps{
    title:string;
}
export interface CoffeeCardProps {
    id: string;
    index: number;
    type: string;
    roasted: string;
    imagelink_square: ImageProps;
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: any;
    buttonPressHandler: any;
  }
  export interface CartItemProps {
    id: string;
    name: string;
    imagelink_square: ImageProps;
    special_ingredient: string;
    roasted: string;
    prices: any;
    type: string;
    incrementCartItemQuantityHandler: any;
    decrementCartItemQuantityHandler: any;
  }
  export interface BGIconProps {
    name: keyof typeof MaterialIcons.glyphMap;
    color: string;
    size: number;
    BGColor: string;
  }