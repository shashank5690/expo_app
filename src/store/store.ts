import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../Utils/data/CoffeeData";
import BeansData from "../Utils/data/BeansData";

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],

      addToCart: (cartItem) =>
        set(
          produce((state) => {
            const foundItem = state.CartList.find(item => item.id === cartItem.id);

            if (foundItem) {
              const foundSize = foundItem.prices.find(
                (price) => price.size === cartItem.prices[0].size
              );

              if (foundSize) {
                foundSize.quantity++;
              } else {
                foundItem.prices.push(cartItem.prices[0]);
              }

              foundItem.prices.sort((a, b) => b.size - a.size);
            } else {
              state.CartList.push(cartItem);
            }
          })
        ),

      calculateCartPrice: () =>
        set(
          produce((state) => {
            state.CartPrice = state.CartList.reduce((total, item) => {
              const itemPrice = item.prices.reduce(
                (sum, price) => sum + parseFloat(price.price) * price.quantity,
                0
              );

              item.ItemPrice = itemPrice.toFixed(2).toString();
              return total + itemPrice;
            }, 0).toFixed(2).toString();
          })
        ),

      addToFavoriteList: (type, id) =>
        set(
          produce((state) => {
            const list = type === "Coffee" ? state.CoffeeList : state.BeanList;
            const item = list.find((item) => item.id === id);

            if (item) {
              item.favourite = !item.favourite;
              if (item.favourite) {
                state.FavoritesList.unshift(item);
              } else {
                state.FavoritesList = state.FavoritesList.filter(
                  (favItem) => favItem.id !== id
                );
              }
            }
          })
        ),

      deleteFromFavoriteList: (type, id) =>
        set(
          produce((state) => {
            const list = type === "Coffee" ? state.CoffeeList : state.BeanList;
            const item = list.find((item) => item.id === id);

            if (item) {
              item.favourite = false;
              state.FavoritesList = state.FavoritesList.filter(
                (favItem) => favItem.id !== id
              );
            }
          })
        ),

      incrementCartItemQuantity: (id, size) =>
        set(
          produce((state) => {
            const cartItem = state.CartList.find((item) => item.id === id);
            if (cartItem) {
              const priceItem = cartItem.prices.find((price) => price.size === size);
              if (priceItem) priceItem.quantity++;
            }
          })
        ),

      decrementCartItemQuantity: (id, size) =>
        set(
          produce((state) => {
            const cartItem = state.CartList.find((item) => item.id === id);
            if (cartItem) {
              const priceIndex = cartItem.prices.findIndex((price) => price.size === size);
              if (priceIndex !== -1) {
                const priceItem = cartItem.prices[priceIndex];
                if (priceItem.quantity > 1) {
                  priceItem.quantity--;
                } else {
                  cartItem.prices.length > 1
                    ? cartItem.prices.splice(priceIndex, 1)
                    : state.CartList.splice(state.CartList.indexOf(cartItem), 1);
                }
              }
            }
          })
        ),

      addToOrderHistoryListFromCart: () =>
        set(
          produce((state) => {
            const total = state.CartList.reduce(
              (sum, item) => sum + parseFloat(item.ItemPrice),
              0
            ).toFixed(2);

            const newOrder = {
              OrderDate: new Date().toDateString(),
              CartList: [...state.CartList],
              CartListPrice: total,
            };

            state.OrderHistoryList.unshift(newOrder);
            state.CartList = [];
          })
        ),
    }),
    {
      name: "expo_app-1",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
