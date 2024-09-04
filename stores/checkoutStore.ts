import {create} from 'zustand';

type CheckoutStore = {
    isPayActive : boolean;
    setPayActive: (isActive: boolean) => void;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
    isPayActive: false,
    setPayActive: (isActive: boolean) => set({isPayActive: isActive}),
}));