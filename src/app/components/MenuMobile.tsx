import { Menu } from "@mui/icons-material"
import { Divider, List, ListItem, ListItemButton, ListItemText, styled } from "@mui/material"
import { ReactNode } from "react"

import { MainMenu, menuOptions as menuOptionsConst } from '../constants'
import { useRouter } from "next/navigation"

const Icon = styled(Menu)(() => ({
  height: 50,
  width: 50,
  padding: 15,
  borderRadius: 15,
}))

const MenuOptions = () => {
  const options = Object.keys(menuOptionsConst)
  const menuOptions:MainMenu = menuOptionsConst
  const router = useRouter()

  const onClick = (pathname: string) => {
    router.push(pathname)
  }

  return (
    <List>
      {options?.map((o) => {
        const opt = menuOptions[o as keyof MainMenu]
        return (
          <>
            <ListItem key={opt.pathname} disablePadding>
              <ListItemButton onClick={() => onClick(opt.pathname)}>
                <ListItemText primary={opt.label} />
              </ListItemButton>
            </ListItem>
            {!opt.last && <Divider key={opt.pathname} />}
          </>
        )
      })}
    </List>
  )
}

const MenuMobile = () => {
  return (
    <Icon />
  )
}

export default MenuMobile
