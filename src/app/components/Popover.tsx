import {
  Box,
  Divider,
  List,
  ListItem as ListItemMui,
  ListItemButton,
  ListItemText,
  Popover as PopoverMui,
  styled
} from '@mui/material'
import { useRouter } from 'next/navigation'

const Container = styled(Box)(() => ({
  width: 200,
}))

const ListItem = styled(ListItemMui)(({ theme }) => ({
  '& .MuiListItemButton-root:hover': {
    '&, & .MuiListItemIcon-root': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const MenuOptions = ({ handleMenuClose, pathname }: { handleMenuClose: () => void; pathname: string }) => {
  const router = useRouter()

  const ourSchoolOptions = [
    {
      pathname: 'our-school',
      label: 'Our School',
      last: false,
    },
    {
      pathname: 'our-school/facility',
      label: 'Our Facility',
      last: false,
    },
    {
      pathname: 'our-school/schedule',
      label: 'Weekly Schedule',
      last: false,
    },
    {
      pathname: 'our-school/instructors',
      label: 'Our Instructors',
      last: true,
    },
  ]

  const ourProgramsOptions = [
    {
      pathname: 'our-programs/kids-and-teens',
      label: 'Kids and Teens',
      last: false,
    },
    {
      pathname: 'our-programs/adults',
      label: 'Adults',
      last: false,
    },
    {
      pathname: 'our-programs/women-self-defense',
      label: 'Women\'s Self-Defense',
      last: false,
    },
    {
      pathname: 'our-programs/private-training',
      label: 'Private Training',
      last: true,
    },
  ]


  const options = pathname === '/our-school'
    ? ourSchoolOptions
    : ourProgramsOptions

  const onClick = (pathname: string) => {
    router.push(pathname)
  }

  return (
    <Container
      onMouseLeave={() => handleMenuClose()}
    >
      <List>
        {options?.map((o, index) => {
          return (
            <>
              <ListItem key={`${index}-${o.pathname}`} disablePadding>
                <ListItemButton onClick={() => onClick(o.pathname)}>
                  <ListItemText primary={o.label} />
                </ListItemButton>
              </ListItem>
              {!o.last && <Divider key={`${index}-${o.pathname}`} />}
            </>
          )
        })}
      </List>
    </Container>
  )
}

interface PopoverProps {
  anchorEl: HTMLButtonElement | null
  open: boolean
  handleMenuClose: () => void
  pathname: string
}

const Popover = ({ anchorEl, open, handleMenuClose, pathname }: PopoverProps) => {
  return (
    <PopoverMui
      key={pathname}
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {(pathname === '/our-school' || pathname === '/our-programs') &&
        <MenuOptions pathname={pathname} handleMenuClose={handleMenuClose} />}
    </PopoverMui>
  )
}

export default Popover
