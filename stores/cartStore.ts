import {create} from 'zustand';

type CartStore = {
    itemsQuantity: number;
    addItemsQuantity: () => void;
    removeItemsQuantity: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
    itemsQuantity: 1,
    addItemsQuantity: () => set((state) => ({itemsQuantity: state.itemsQuantity + 1})),
    removeItemsQuantity: () => set((state) => ({
  itemsQuantity: state.itemsQuantity > 1 ? state.itemsQuantity - 1 : state.itemsQuantity
})),
    

}))