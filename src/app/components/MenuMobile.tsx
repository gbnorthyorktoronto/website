import { Menu } from "@mui/icons-material"
import { Divider, List, ListItem, ListItemButton, ListItemText, styled } from "@mui/material"

import { MainMenu, menuOptions as menuOptionsConst } from '../constants'
import { useRouter } from "next/navigation"

const Icon = styled(Menu)(({ theme }) => ({
  height: 50,
  width: 50,
  marginLeft: 10,
  marginTop: 10,
  color: theme.palette.primary.main
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
    <Icon className="sm:hidden" />
  )
}

export default MenuMobile
