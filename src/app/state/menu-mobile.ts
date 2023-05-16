import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const menuMobileState = atom({
  key: 'menuMobileState',
  default: false
})

export const useMenuMobileState = () => useRecoilValue<boolean>(menuMobileState)

export const useSetMenuMobileState = () => useSetRecoilState<boolean>(menuMobileState)
