import { Box, Button as ButtonMui, ButtonProps, styled } from "@mui/material"
import classNames from "classnames"
import { MouseEvent, useState } from "react"
import Popover from "./Popover"

const Button = styled(ButtonMui)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 50,
  paddingInline: 20,

  '&.selected': {
    opacity: 0.6,
  },

  '&:hover': {
    background: 'rgb(255,255,255,0.4)',
  },
}))

interface ComponentProps extends ButtonProps {
  selected?: boolean
  pathname: string
}

const MenuItemButton = ({ children, selected, pathname, ...props }: ComponentProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const popoverOptions = ['/our-school', '/our-programs']

  return (
    <Box key={pathname}>
      <Button
        key={pathname}
        {...props}
        className={classNames({ selected }, "!text-[15px] 2xl:!text-[18px]")}
        onMouseEnter={(e) => handleMenuOpen(e)}
      >
        {children}
      </Button>
      {popoverOptions.includes(pathname) &&
        <Popover pathname={pathname} anchorEl={anchorEl} open={open} handleMenuClose={handleMenuClose} />}
    </Box>
  )
}

export default MenuItemButton
