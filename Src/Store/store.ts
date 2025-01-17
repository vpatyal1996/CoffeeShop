import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist((set, get) => ({
    CoffeeList:CoffeeData,
    BeansData:BeansData,
    CartPrice:0,
    FavritesList:[],
    cartList:[],
    OrderHistoryList:[]
  }), {
    name: 'coffe-app',
    storage: createJSONStorage(() => AsyncStorage),
  }),
);
