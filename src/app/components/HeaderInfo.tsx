import { Box, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.common.white,
  width: '100%',
}))

const HeaderInfo = ({ children }: { children: ReactNode }) => (
  <Container
    className="justify-center sm:items-center sm:justify-between sm:pl-[350px] sm:pr-[60px] h-[110px] sm:h-[80px]"
  >{children}</Container>
)

export default HeaderInfo
