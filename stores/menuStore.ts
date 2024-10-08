import {create} from 'zustand';

type MenuStore = {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isOpen: boolean) => set({isMenuOpen: isOpen}),
}));