import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const menuPopperState = atom({
  key: 'menuPopperState',
  default: ''
})

export const useMenuPopperState = () => useRecoilValue<string>(menuPopperState)

export const useSetMenuPopperState = () => useSetRecoilState<string>(menuPopperState)
