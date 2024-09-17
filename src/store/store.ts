import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../Utils/data/CoffeeData';
import BeansData from '../Utils/data/BeansData';

export const useStore=create(
    persist(
        (set,get)=>({
            CoffeeList:CoffeeData,
            BeanList:BeansData,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: [],
        }),{
            name: 'expo_app-1',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)