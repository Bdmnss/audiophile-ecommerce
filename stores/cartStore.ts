import {create} from 'zustand';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    originalPrice: number;
}

type CartStore = {
    isCartOpen: boolean;
    itemsQuantity: number;
    cartItemsQuantity: number;
    totalPrice: number;
    cartItems: CartItem[];
    setCartItems: (cartItems: CartItem[]) => void;
    addItemsQuantity: () => void;
    removeItemsQuantity: () => void;
    setCartOpen: (isOpen: boolean) => void;
    setCartItemsQuantity: (quantity: number) => void;
    setTotalPrice: (price: number) => void;
    setItemsQuantity: (quantity: number) => void;
  };

export const useCartStore = create<CartStore>((set) => ({
    isCartOpen: false,
    itemsQuantity: 1,
    cartItemsQuantity: 0,
    totalPrice: 0,
    cartItems: [],
    setCartItems: (cartItems: CartItem[]) => set({cartItems: cartItems}),
    setCartOpen: (isOpen: boolean) => set({isCartOpen: isOpen}),
    addItemsQuantity: () => set((state) => ({itemsQuantity: state.itemsQuantity + 1})),
    removeItemsQuantity: () => set((state) => ({
  itemsQuantity: state.itemsQuantity > 1 ? state.itemsQuantity - 1 : state.itemsQuantity
})),
  setCartItemsQuantity: (quantity: number) => set({cartItemsQuantity: quantity}),
  setTotalPrice: (price: number) => set({totalPrice: price}),
  setItemsQuantity: (quantity: number) => set({itemsQuantity: quantity}),
}))