import { Button as ButtonMui, styled } from '@mui/material'
import { useRouter } from 'next/navigation'

import logo from '../images/gb-logo.png'
import Image from 'next/image'

const Button = styled(ButtonMui)(() => ({
  position: 'absolute',
  zIndex: 1,
}))

const Logo = () => {
  const router = useRouter()

  const onClick = () => {
    router.push('/')
  }

  return (
    <Button
      className="h-[165px] sm:h-[200px] w-[160px] sm:w-[195px] left-0 right-0 top-[75px] m-auto sm:left-[80px] sm:m-0 sm:top-[20px]"
      onClick={onClick}
    >
      <Image
        src={logo.src}
        alt="Gracie Barra Logo"
        fill={true}
      />
    </Button>
  )
}

export default Logo
