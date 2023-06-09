import { Menu } from "@mui/icons-material"
import { Box, Collapse, Dialog, Divider, List, ListItem, ListItemButton, ListItemText, styled } from "@mui/material"

import { MainMenu, MainMenuItem, MainSecondaryItem, menuOptions } from '../constants'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSetMenuMobileState } from "../state/menu-mobile"
import { useMenuMobileState } from "../state/menu-mobile"

const Icon = styled(Menu)(({ theme }) => ({
  height: 50,
  width: 50,
  marginLeft: 10,
  marginTop: 10,
  color: theme.palette.primary.main
}))

const MenuOptions = () => {
  const isMenuOpen = useMenuMobileState()
  const setMenuMobileState = useSetMenuMobileState()
  const [itemPathnameOpened, setItemPathnameOpened] = useState('')
  const [secondaryMenu, setSecondaryMenu] = useState<MainSecondaryItem[]>([])

  const mainOptions = Object.keys(menuOptions)

  const router = useRouter()

  const openSecondaryOption = (pathname: string) => {
    handleCloseMenu()
    router.push(pathname)
  }

  const onClick = (mainOption: MainMenuItem) => {
    if (!mainOption?.options) {
      handleCloseMenu()
      router.push(mainOption.pathname)
      return
    }

    if (itemPathnameOpened === mainOption.pathname) {
      setItemPathnameOpened('')
      return
    }

    setItemPathnameOpened(mainOption.pathname)
    setSecondaryMenu(mainOption.options)
  }

  const handleCloseMenu = () => {
    setMenuMobileState(false)
  }

  return (
    <Dialog open={isMenuOpen} onClose={handleCloseMenu} fullWidth>
      <List>
        {mainOptions?.map((opt) => {
          const mainOption = menuOptions[opt as keyof MainMenu]
          const open = !!(itemPathnameOpened === mainOption.pathname && mainOption?.options)

          return (
            <Box key={`${mainOption.pathname}-${mainOption.label}`}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => onClick(mainOption)}>
                  <ListItemText primary={mainOption.label} />
                </ListItemButton>
              </ListItem>
              <Collapse sx={{ marginInline: 3 }} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {secondaryMenu.map((secOpt) => {
                    return (
                      <Box key={`${secOpt.pathname}-${secOpt.label}-${secOpt.last}`}>
                        <ListItemButton onClick={() => openSecondaryOption(secOpt.pathname)}>
                          <ListItemText primary={secOpt.label} />
                        </ListItemButton>
                        {!secOpt.last && <Divider />}
                      </Box>
                    )
                  })}
                </List>
              </Collapse>
              {!mainOption.last && <Divider key={`${mainOption.pathname}`} />}
            </Box>
          )
        })}
      </List>
    </Dialog>
  )
}

const MenuMobile = () => {
  const setMenuMobileState = useSetMenuMobileState()

  const handleClickMenu = () => {
    setMenuMobileState(true)
  }

  return (
    <Box className="sm:hidden">
      <MenuOptions />
      <Icon onClick={handleClickMenu} className="sm:hidden" />
    </Box>
  )
}

export default MenuMobile
