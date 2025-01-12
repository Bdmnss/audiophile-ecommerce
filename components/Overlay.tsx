import { useMenuStore } from '@/stores/menuStore'
import { useCartStore } from '@/stores/cartStore'

export default function Overlay() {
  const menuStore = useMenuStore()
  const cartStore = useCartStore()
  return (
    <div
      className={`fixed z-[1] h-[100%] w-[100%] cursor-pointer bg-black opacity-75 ${
        menuStore.isMenuOpen ? 'flex' : cartStore.isCartOpen ? 'flex' : 'hidden'
      }`}
      onClick={() => {
        menuStore.setMenuOpen(false)
        cartStore.setCartOpen(false)
      }}
    ></div>
  )
}
