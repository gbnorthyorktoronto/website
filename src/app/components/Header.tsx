import { Box, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: 330,
  paddingRight: 80,
  width: '100%',
}))

const Header = ({ children }: { children: ReactNode }) => (
  <Container
    className="h-[90px] sm:h-20"
  >{children}</Container>
)

export default Header
