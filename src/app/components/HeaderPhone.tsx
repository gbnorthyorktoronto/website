import { Typography, styled } from '@mui/material'
import { Phone as PhoneMui } from '@mui/icons-material'

const Container = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: 24,
  fontWeight: 600,
}))

const Phone = styled(PhoneMui)(() => ({
  height: 30,
  width: 30,
  marginRight: 10,
}))

const HeaderPhone = ({ ...props }) => (
  <Container {...props}><Phone />(416) 782-8255</Container>
)

export default HeaderPhone
