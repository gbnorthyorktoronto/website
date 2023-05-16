import { Box } from "@mui/material"
import { usePathname, useRouter } from 'next/navigation'

import MenuItemButton from "./MenuItemButton"

const options = [
  {
    pathname: '/home',
    label: 'Home',
  },
  {
    pathname: '/our-school',
    label: 'Our School',
  },
  {
    pathname: '/our-programs',
    label: 'Our Programs',
  },
  {
    pathname: '/we-are-gracie-barra',
    label: 'We are Gracie Barra',
  },
  {
    pathname: '/why-gracie-barra',
    label: 'Why Gracie Barra',
  },
  {
    pathname: '/contact',
    label: 'Contact Us',
  },
]

const HeaderMenu = ({ ...props }) => {
  const pathname = usePathname()
  const router = useRouter()

  const shouldPush = [
    '/home',
    '/our-school',
    '/why-gracie-barra',
    '/we-are-gracie-barra',
    '/contact',
  ]

  return (
    <Box {...props}>
      {options.map((o) => {
        const selected = pathname.includes(o.pathname)

        const onClick = () => {
          if (shouldPush.includes(o.pathname)) {
            router.push(o.pathname)
          }
        }

        return (
          <MenuItemButton
            onClick={onClick}
            selected={selected}
            key={o.label}
            pathname={o.pathname}
          >
            {o.label}
          </MenuItemButton>
        )
      })}
    </Box>
  )
}

export default HeaderMenu
