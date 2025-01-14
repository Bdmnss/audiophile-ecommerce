'use client'

import { useMenuStore } from '@/stores/menuStore'
import Navigation from './Navigation'
import ThemeToggleButton from './ThemeToggleButton'
import LanguageChanger from './LanguageChanger'

export default function BurgerMenu() {
  const menuStore = useMenuStore()
  return (
    <div
      className={`fixed z-10 h-[100%] w-[100%] overflow-y-scroll rounded-xl bg-white px-[4rem] dark:bg-[#101010] md:h-[56%] ${
        menuStore.isMenuOpen
          ? 'animate-slide-top-to-bottom'
          : 'animate-slide-bottom-to-top'
      }`}
    >
      <div className="mt-[16rem]">
        <div className="absolute right-12 top-36 flex items-center md:hidden">
          <ThemeToggleButton />
          <LanguageChanger />
        </div>
        <Navigation />
      </div>
    </div>
  )
}
