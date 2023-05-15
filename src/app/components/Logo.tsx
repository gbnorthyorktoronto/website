import { Button as ButtonMui, styled } from '@mui/material'
import { useRouter } from 'next/navigation'

import logo from '../images/gb-logo.png'
import Image from 'next/image'

const Button = styled(ButtonMui)(() => ({
  position: 'absolute',
  left: 80,
  zIndex: 1,
}))

const Logo = () => {
  const router = useRouter()

  const onClick = () => {
    router.push('/')
  }

  return (
    <Button onClick={onClick}>
      <Image
        src={logo.src}
        alt="Gracie Barra Logo"
        width={195}
        height={200}
      />
    </Button>
  )
}

export default Logo
