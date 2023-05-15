import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface stateType {
  src: string
  open: boolean
}

export const imagePopperState = atom({
  key: 'imagePopperState',
  default: {
    src: '',
    open: false,
  },
})

export const useImagePopperState = () => useRecoilValue<stateType>(imagePopperState)

export const useSetImagePopperState = () => useSetRecoilState<stateType>(imagePopperState)
