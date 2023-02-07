import { create } from 'zustand';

export const useStore = create<{
  sideMenuOpen: boolean;
}>((set) => ({
  sideMenuOpen: true,
}));
